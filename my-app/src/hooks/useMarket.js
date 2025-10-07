import { useContext, useEffect, useRef, useState, useCallback } from "react";
import { useParserWorker } from "./useParserWorker";
import { useFullExportWorker } from "./useFullExportWorker";
import {
  GLOVES,
  GLOVES1,
  GLOVES2,
  SKINS,
  BLACKLIST,
  BLACKLIST_FE,
  DEFAULT_GLOVES_ARR,
  DEFAULT_ITEMS_FE,
} from "../constants/marketData";
import { loadMarketData } from "../utils/storage";
import { SettingsContext } from "../context/SettingsContext";
import {
  checkItems,
  checkFeItems,
  isInBlacklist,
  isInBlacklistFE,
} from "../utils/processData";

export function useMarket(settings) {
  //const { settings } = useContext(SettingsContext);
  //console.log("[useMarket] render, settings:", settings);
  const { PERCENT_OUT, BALANCE, volume, notif, API_KEY } = settings;
  useEffect(() => {
  //console.log("[useMarket] settings from context (raw):", settings);
  //try { console.log("[useMarket] settings JSON:", JSON.stringify(settings)); } catch(e) {}
  //console.log("[useMarket] providerRef === settings?",
  //  window.__DEBUG_settings_from_provider === settings);
}, [settings]);

 // const { PERCENT_OUT, BALANCE, volume, notif, API_KEY } = settings;

  // Загружаем данные из localStorage или дефолтные
  const { gloves: loadedGloves, itemsFE: loadedItemsFE } = loadMarketData({
    gloves: DEFAULT_GLOVES_ARR,
    itemsFE: DEFAULT_ITEMS_FE,
  });

  const [parserRunning, setParserRunning] = useState(false);
  const [exportRunning, setExportRunning] = useState(false);
  const [gloves, setGloves] = useState([]);
  const [skins, setSkins] = useState([]);
  const [existingSkinIds, setExistingSkinIds] = useState(new Set());
  const [gloveText, setGloveText] = useState("");
  const [feText, setFeText] = useState("");
  const [logs, setLogs] = useState([]);

  const [glovesData, setGlovesData] = useState(loadedGloves);
  const [itemsFEData, setItemsFEData] = useState(loadedItemsFE);

  const audioRef = useRef(null);

  // Мультипликаторы
  const notifMnozh = ((30 - PERCENT_OUT) * 0.00816 + 1) * 100;
  const buyMnozh = ((30 - PERCENT_OUT) * 0.006 + 0.666) * 100;

//   useEffect(() => {
//   console.log("🎯 useMarket settings changed:", settings);
//   console.log("🔊 New volume:", settings.volume);
// }, [settings]);

  // Подписка на изменения в localStorage (для синхронизации вкладок)
  useEffect(() => {
    const syncData = () => {
      const { gloves, itemsFE } = loadMarketData({
        gloves: DEFAULT_GLOVES_ARR,
        itemsFE: DEFAULT_ITEMS_FE,
      });
      setGlovesData(gloves);
      setItemsFEData(itemsFE);
    };
    window.addEventListener("storage", syncData);
    return () => window.removeEventListener("storage", syncData);
  }, []);

   useEffect(() => {
    audioRef.current = new Audio(`${import.meta.env.BASE_URL}assets/sounds/new_message_notice.mp3`);
    audioRef.current.volume = volume; // ← Устанавливаем начальную громкость
  }, []); // ← Только при монтировании

  
  // Обновляем громкость при изменении
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      //console.log("🔊 Volume updated to:", volume);
    }
  }, [volume]); // ← Срабатывает при изменении volume

  // 🔊 Воспроизведение уведомления
const playNotification = useCallback(() => {
  if (settings.notif && audioRef.current) {
    //console.log("🔊 Playing notification, volume:", volume, "notif:", notif);
    audioRef.current.pause(); // останавливаем на всякий случай
    audioRef.current.currentTime = 0;
    audioRef.current.volume = volume; // гарантированно обновляем
    audioRef.current.play();
  }
}, [notif, volume]);


  const onLog = useCallback((message) => {
    setLogs((prev) => [...prev, message]);
  }, []);

  const onNotification = useCallback(() => {
    playNotification();
  }, [playNotification]);

    // Следим за изменением списка скинов (для удаления старых карточек)
  useEffect(() => {
    setExistingSkinIds(new Set(skins.map((skin) => skin.id)));
  }, [skins]);


  // Обертки для утилитных функций
  const isInBlacklistWrapper = useCallback((price, float) => {
    return isInBlacklist(price, float, BLACKLIST)
  }, [])

  const isInBlacklistFEWrapper = useCallback((priceFE, idFE) => {
    return isInBlacklistFE(priceFE, idFE, BLACKLIST_FE)
  }, [])

  const buyItem = useCallback(async (key, id, price, name, fp) => {
    try {
      const response = await fetch(`https://market.csgo.com/api/v2/buy?key=${key}&id=${id}&price=${price}`)
      playNotification()
      const formPrice = Math.floor(price / 100).toLocaleString('ru-RU')
      const logMessage = `КУПЛЕНО ${name} за ${formPrice}, float/pattern: ${fp}`
      onLog(logMessage)
      //console.log(logMessage)
    } catch (error) {
      console.error('Ошибка при покупке:', error)
    }
  }, [playNotification, onLog])
  
  const checkItemsWrapper = useCallback((item, prices) => {
    const result = checkItems(
      item, 
      prices, 
      settings.BALANCE, 
      settings.API_KEY, 
      isInBlacklistWrapper, 
      buyItem, 
      buyMnozh, 
      notifMnozh,
    );
    if (result.shouldNotify) onNotification();
    return result.shouldCreateCard;
  }, [buyItem, buyMnozh, notifMnozh, onNotification, onLog, isInBlacklistWrapper])

  const checkFeItemsWrapper = useCallback((item, prices) => {
    const result = checkFeItems(
      item,
      prices,
      notifMnozh,
      buyMnozh,
      buyItem,
      isInBlacklistFEWrapper,
      settings.API_KEY
    );

    if (result.shouldNotify) onNotification();
    if (result.shouldBuy) onLog(`Попытка покупки ${item[2]}, float: ${item[10]}, цена: ${item[0]}`);

    return result.shouldCreateCard;
  }, [notifMnozh, buyMnozh, buyItem, onLog, onNotification, isInBlacklistFEWrapper]);

  const processGloveDataWrapper = useCallback((combinedData) => {
  const { gloves } = loadMarketData({
    gloves: DEFAULT_GLOVES_ARR,
    itemsFE: DEFAULT_ITEMS_FE,
  });

  const gloveItems = []
  Object.entries(combinedData.data).forEach(([gloveName, gloveArray]) => {
    Object.entries(gloves).some(([key, gloveData]) => {
      if (gloveData.mhm === gloveName) {
        gloveArray.forEach(item => {
          const shouldCreateCardGlove = checkItemsWrapper(item, gloveData); 
          if (shouldCreateCardGlove) {
            gloveItems.push({
              id: item.id,
              name: gloveName,
              price: item.price,
              float: item.extra.float,
            });
          }
        });
        return true
      }
      return false
    })
  })
  return gloveItems
}, [checkItemsWrapper]);

  const handleParserMessage = useCallback((event) => {
    const { combinedData } = event.data
    if (combinedData) {
      setGloveText(`Данные получены\n${new Date()}`)
      const processedGloves = processGloveDataWrapper(combinedData)
      setGloves(processedGloves)
    }
  }, [processGloveDataWrapper])

const handleExportMessage = useCallback((event) => {
  const { type, myDate, fileData } = event.data;

  if (type === "fileDataAll" && fileData) {
    setFeText(`Время обновления\n${myDate}`);

    const newSkins = [];

    const { itemsFE } = loadMarketData({
      gloves: DEFAULT_GLOVES_ARR,
      itemsFE: DEFAULT_ITEMS_FE,
    });

    fileData.forEach((item) => {
      Object.entries(itemsFE).some(([key, itemData]) => {
        if (key === item[2]) {
          const shouldCreateCard = checkFeItemsWrapper(item, itemData);
          if (shouldCreateCard) {
            newSkins.push({
              id: item[1],
              name: item[2],
              price: item[0],
              pattern: item[12] || null,
              float: item[10] || null,
            });
          }
          return true;
        }
        return false;
      });
    });

    // как с перчатками — заменяем весь список
    setSkins(newSkins);
  }
}, [checkFeItemsWrapper]);


  const { startParser, stopParser } = useParserWorker(handleParserMessage)       
  const { startExport, stopExport } = useFullExportWorker(handleExportMessage)     

  return {
    // Состояния
    //settings.notif,
    //settings.volume,
    parserRunning, setParserRunning,
    exportRunning, setExportRunning,
    gloves, setGloves,
    skins, setSkins,
    gloveText, setGloveText,
    feText, setFeText,
    logs, setLogs,
    
    // Функции
    onNotification,
    playNotification,
   // toggleMute,
    buyItem,
    startParser, stopParser,
    startExport, stopExport,
    checkItems: checkItemsWrapper,
    checkFeItems: checkFeItemsWrapper,
    processGloveData: processGloveDataWrapper,
    
    // Данные
    GLOVES,
    GLOVES1,
    GLOVES2,
    SKINS,
    notifMnozh,
    buyMnozh,
    glovesData,
    itemsFEData,
    //settings.BALANCE,

    notif: settings.notif,
    volume: settings.volume,
    API_KEY: settings.API_KEY,
    BALANCE: settings.BALANCE,
    PERCENT_OUT: settings.PERCENT_OUT,
    SKIP_PRICE: settings.SKIP_PRICE,
  }
}
