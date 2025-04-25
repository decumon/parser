let intervalId;
const fullExport="https://market.csgo.com/api/full-export/RUB.json";
//const apiKey="Ic01ERCKhpW48pksAlRK7yrIDtd643Y";

onmessage= function (e){
    console.log (e.data);

    async  function loadData(){
        const responseFE = await fetch(fullExport);
        const dataFE = await responseFE.json();
        let myDate = new Date(dataFE.time *1000);
        //console.log(`Время обновления: ${myDate.toLocaleString()}`);
        let itemsFE=dataFE.items;
        //console.log(data2);
        postMessage({itemsFE, myDate});
    }

    if (e.data.isWorkFE) intervalId=setInterval(loadData, 10000);       
    else clearInterval(intervalId);
}

    //parserFullExport2(itemsFE[0],0);