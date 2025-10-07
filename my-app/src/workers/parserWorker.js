let intervalId;

onmessage = function(e) {
  const {API_KEY, isWork, GLOVES, GLOVES1, GLOVES2, SKINS } = e.data;

  async function loadData() {
    try {
      //console.log(GLOVES);
      const urls = [
        `https://market.csgo.com/api/v2/search-list-items-by-hash-name-all?key=${API_KEY}&extended=1&list_hash_name[]=${GLOVES[0]}&list_hash_name[]=${GLOVES[1]}&list_hash_name[]=${GLOVES[2]}&list_hash_name[]=${GLOVES[3]}&list_hash_name[]=${GLOVES[4]}`,
        `https://market.csgo.com/api/v2/search-list-items-by-hash-name-all?key=${API_KEY}&extended=1&list_hash_name[]=${GLOVES1[0]}&list_hash_name[]=${GLOVES1[1]}&list_hash_name[]=${GLOVES1[2]}&list_hash_name[]=${GLOVES1[3]}&list_hash_name[]=${GLOVES1[4]}`,
        `https://market.csgo.com/api/v2/search-list-items-by-hash-name-all?key=${API_KEY}&extended=1&list_hash_name[]=${GLOVES2[0]}&list_hash_name[]=${GLOVES2[1]}&list_hash_name[]=${GLOVES2[2]}&list_hash_name[]=${GLOVES2[3]}&list_hash_name[]=${GLOVES2[4]}`,
        `https://market.csgo.com/api/v2/search-list-items-by-hash-name-all?key=${API_KEY}&extended=1&list_hash_name[]=${SKINS[0]}&list_hash_name[]=${SKINS[1]}&list_hash_name[]=${SKINS[2]}`
      ];

      const responses = await Promise.all(urls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(res => res.json()));

      const combinedData = {
        success: data.every(d => d.success),
        currency: data[0].currency,
        data: {}
      };

      data.forEach(obj => {
        for (const [key, value] of Object.entries(obj.data)) {
          if (!combinedData.data[key]) {
            combinedData.data[key] = [];
          }
          combinedData.data[key] = combinedData.data[key].concat(value);
        }
      });

      //console.log(combinedData);
      postMessage({ combinedData });
    } catch (error) {
      console.error('Worker error:', error);
    }
  }

  if (isWork) {
    if (intervalId) clearInterval(intervalId);
    loadData(); // Run immediately
    intervalId = setInterval(loadData, 5000);
  } else {
    clearInterval(intervalId);
    intervalId = null; // сброс ссылки
  }
};