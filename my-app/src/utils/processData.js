  export function checkItems(
  item,
  prices,
  BALANCE,
  API_KEY,
  isInBlacklist,
  buyItem,
  buyMnozh,
  notifMnozh,
) {
  if (!item) return false;

  if (!isInBlacklist(item.price, item.extra.float)) {
    const notifPrice0_15 = prices.buff0_15 * notifMnozh;
    const notifPrice0_21 = prices.buff0_21 * notifMnozh;
    const notifPrice0_24 = prices.buff0_24 * notifMnozh;
    const buyPrice0_15 = prices.steam0_15 * buyMnozh;
    const buyPrice0_21 = prices.steam0_21 * buyMnozh;
    const buyPrice0_24 = prices.steam0_24 * buyMnozh;

    // --- Покупки ---
    if (item.price <= buyPrice0_15 && item.extra.float >= 0.15 && item.extra.float <= 0.18 && item.price <= BALANCE*100) {
      buyItem(API_KEY, item.id, item.price, prices.mhm, item.extra.float);
      //console.log("ПОПЫТКА ПОКУПКИ", prices.mhm, "флот:",item.extra.float,"цена: ", item.price);
      return { shouldNotify: true};
    }
    if (item.price <= buyPrice0_21 && item.extra.float >= 0.18 && item.extra.float <= 0.21 && item.price <= BALANCE*100) {
      buyItem(API_KEY, item.id, item.price, prices.mhm, item.extra.float);
      //onsole.log("ПОПЫТКА ПОКУПКИ", prices.mhm, "флот:",item.extra.float,"цена: ", item.price);
      return { shouldNotify: true};
    }
    if (item.price <= buyPrice0_24 && item.extra.float >= 0.21 && item.extra.float <= 0.24 && item.price <= BALANCE*100) {
      buyItem(API_KEY, item.id, item.price, prices.mhm, item.extra.float);
      //console.log("ПОПЫТКА ПОКУПКИ", prices.mhm, "флот:",item.extra.float,"цена: ", item.price);
      return { shouldNotify: true};
    }

    // --- Нотификации ---
    if (item.price <= notifPrice0_15 && item.extra.float >= 0.15 && item.extra.float <= 0.18) {
      const formPrice = Math.floor(item.price / 100).toLocaleString("ru-RU");
      //console.log(`ПОКУПАЕМ ${prices.mhm} Цена - ${formPrice}, Флоат - ${item.extra.float}, id - ${item.id}`);
      return { shouldNotify: true, shouldCreateCard: true };
    }
    if (item.price <= notifPrice0_21 && item.extra.float >= 0.18 && item.extra.float <= 0.21) {
      const formPrice = Math.floor(item.price / 100).toLocaleString("ru-RU");
      //console.log(`ПОКУПАЕМ ${prices.mhm} Цена - ${formPrice}, Флоат - ${item.extra.float}, id - ${item.id}`);
      return { shouldNotify: true, shouldCreateCard: true};
    }
    if (item.price <= notifPrice0_24 && item.extra.float >= 0.21 && item.extra.float <= 0.24) {
      const formPrice = Math.floor(item.price / 100).toLocaleString("ru-RU");
      //console.log(`ПОКУПАЕМ ${prices.mhm} Цена - ${formPrice}, Флоат - ${item.extra.float}, id - ${item.id}`);
      return { shouldNotify: true, shouldCreateCard: true};
    }
  }

  return { shouldNotify: false, shouldCreateCard: false};
}


  export function checkFeItems (item, prices, notifMnozh, buyMnozh, buyItem, isInBlacklistFE, API_KEY) {
    let shouldCreateCard = false; // ← Флаг для создания карточки
    if (!isInBlacklistFE(item[0], item[1])) {
      //console.log("паттерн-",item[12],"цена-", item[0]);
      prices.forEach(data => {
        let notifPrice, buyPrice;
        
        if (data.type === "pattern") {
          if (item[12] >= data.pattern1 && item[12] <= data.pattern2 && item[12] !== null) {
            notifPrice = Math.round(data.priceNotif * notifMnozh);
            buyPrice = Math.round(data.priceBuy * buyMnozh);
            if (item[0] < buyPrice) {
              //console.log("ПОПЫТКА ПОКУПКИ", item[2], "паттерн:",item[12],"цена: ", item[0]);
              buyItem(API_KEY, item[1], item[0], item[2], item[12]);              
              return { shouldNotify: true};
              //shouldCreateCard = true; // ← Помечаем для создания карточки
            }
            if (item[0] < notifPrice) {
              //console.log("ИНТЕРЕСНЫЙ ЛОТ", item[2], "паттерн:",item[12],"цена: ", item[0]);
              return { shouldNotify: true, shouldCreateCard: true };
            }
          }
        } else if (data.type === "float") {
          if (item[10] > data.float1 && item[10] < data.float2) {
            notifPrice = Math.round(data.priceNotif * notifMnozh);
            buyPrice = Math.round(data.priceBuy * buyMnozh);
            
            if (item[0] < buyPrice) {
              //console.log("ПОПЫТКА ПОКУПКИ", item[2], "флот:",item[10],"цена: ", item[0]);
              buyItem(API_KEY, item[1], item[0], item[2], item[10]);              
              return { shouldNotify: true};
            }
            if (item[0] < notifPrice) {
              //const logMessage = `${item[2]} float: ${item[10]} price: ${item[0]/100} <${notifPrice/100}`;
              console.log("ИНТЕРЕСНЫЙ ЛОТ", item[2], "флот:",item[10],"цена: ", item[0]);
              return { shouldNotify: true, shouldCreateCard: true};
            }
          }
        }
      });
    }
    return { shouldNotify: false, shouldCreateCard: false};
  };

export function isInBlacklist(price, float, BLACKLIST) {
  return BLACKLIST.some(item => 
    Math.abs(item.price - Number(price)) < 10000 && item.float === Number(float)
  );
}

export function isInBlacklistFE(priceFE, idFE, BLACKLIST_FE) {
  return BLACKLIST_FE.some(itemFE => 
    Math.abs(itemFE.price - Number(priceFE)) < 1000 && itemFE.id === Number(idFE)
  );
}
