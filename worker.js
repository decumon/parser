let intervalId;

onmessage= function (e){
    //console.log (e.data);

    async  function loadData(){
        const response = await fetch(`https://market.csgo.com/api/v2/search-list-items-by-hash-name-all?key=Ic01ERCKhpW48pksAlRK7yrIDtd643Y&extended=1&list_hash_name[]=${e.data.gloves[0]}&list_hash_name[]=${e.data.gloves[1]}&list_hash_name[]=${e.data.gloves[2]}
        &list_hash_name[]=${e.data.gloves[3]}&list_hash_name[]=${e.data.gloves[4]}`);        
        const response1 = await fetch(`https://market.csgo.com/api/v2/search-list-items-by-hash-name-all?key=Ic01ERCKhpW48pksAlRK7yrIDtd643Y&extended=1&list_hash_name[]=${e.data.gloves1[0]}&list_hash_name[]=${e.data.gloves1[1]}&list_hash_name[]=${e.data.gloves1[2]}
        &list_hash_name[]=${e.data.gloves1[3]}&list_hash_name[]=${e.data.gloves1[4]}`);
        const response2 = await fetch(`https://market.csgo.com/api/v2/search-list-items-by-hash-name-all?key=Ic01ERCKhpW48pksAlRK7yrIDtd643Y&extended=1&list_hash_name[]=${e.data.gloves2[0]}&list_hash_name[]=${e.data.gloves2[1]}&list_hash_name[]=${e.data.gloves2[2]}
        &list_hash_name[]=${e.data.gloves2[3]}&list_hash_name[]=${e.data.gloves2[4]}`);

        const data = await response.json();
        const data1 = await response1.json();
        const data2 = await response2.json();

        const combinedData = {
            success: data.success && data1.success && data2.success, // true, если все успешны
            currency: data.currency, // Предполагаем, что везде RUB
            data: {}
          };

        const allData = [data.data, data1.data, data2.data];

        allData.forEach(obj => {
        for (const [key, value] of Object.entries(obj)) {
            if (!combinedData.data[key]) {
            combinedData.data[key] = []; // Создаем массив, если ключа нет
            }
            combinedData.data[key] = combinedData.data[key].concat(value); // Добавляем предметы
        }
        });

        //console.log(combinedData);
        postMessage({combinedData});
        //postMessage({data, data1, data2});
    }

    if (e.data.isWork) intervalId=setInterval(loadData, 5000);       
    else clearInterval(intervalId);
}