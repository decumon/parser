let intervalId;

onmessage = function (e) {
  const { isWorkFE } = e.data;

  async function loadData() {
    try {
      // Первый запрос - получаем список JSON файлов
      const response = await fetch("https://market.csgo.com/api/full-export/RUB.json");
      const data = await response.json();
      const myDate = new Date(data.time * 1000);

      // Соберём все предметы из всех файлов
      let allFileData = [];

      if (data.items && data.items.length > 0) {
        for (const item of data.items) {
          try {
            const fileResponse = await fetch(`https://market.csgo.com/api/full-export/${item}`);
            const fileData = await fileResponse.json();

            // fileData — это массив предметов, значит просто добавляем
            allFileData.push(...fileData);
          } catch (fileError) {
            console.error(`Error loading file ${item}:`, fileError);
          }
        }
      }

      // 🔹 Теперь шлём всё одним куском
      postMessage({
        type: "fileDataAll",
        myDate,
        fileData: allFileData,
      });

    } catch (error) {
      console.error("Export worker error:", error);
    }
  }

  if (isWorkFE) {
    if (intervalId) clearInterval(intervalId);
    loadData(); // сразу выполняем
    intervalId = setInterval(loadData, 10000);
  } else {
    clearInterval(intervalId);
    intervalId = null;
  }
};
