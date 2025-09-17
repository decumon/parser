import { useContext, useEffect } from 'react';
import { useMarket } from '../hooks/useMarket'
import GloveCard from '../components/GloveCard'
import SkinCard from '../components/SkinCard'
import { SettingsContext } from "../context/SettingsContext";

export default function HomePage() {
  const { settings } = useContext(SettingsContext);
  useEffect(() => {
   // console.log("🏠 HomePage received new settings:", settings);
  }, [settings]);
  const {
    notif, setNotif,
    parserRunning, setParserRunning,
    exportRunning, setExportRunning,
    gloves, skins,
    gloveText, feText,
    logs,
    playNotification,
    buyItem,
    GLOVES, GLOVES1, GLOVES2, SKINS,
    API_KEY,
    startParser, stopParser,
    startExport, stopExport
  } = useMarket(settings); // ← ОДИН вызов!

  
  const toggleParser = () => {
    if (parserRunning) {
      stopParser()
      setParserRunning(false)
    } else {
      startParser(API_KEY, GLOVES, GLOVES1, GLOVES2, SKINS)
      setParserRunning(true)
    }
  }

  const toggleExport = () => {
    if (exportRunning) {
      stopExport()
      setExportRunning(false)
    } else {
      startExport()
      setExportRunning(true)
    }
  }

    const toggleSound = () => {
    const newNotif = !notifRef.current;
    setNotif(newNotif);
    
    // Проигрываем звук только при включении уведомлений
    if (newNotif && audioRef.current) {
      audioRef.current.play();
    }
  };

    const handleBuy = (item) => {
    // Если в useMarket есть buyItem
    if (buyItem) {
      buyItem(API_KEY, item.id, item.price, item.name, item.float || item.pattern)
    }
  }

  const handleBlacklist = (item) => {
    // Логика добавления в черный список
    //console.log('Добавить в ЧС:', item)
    // addToBlacklist(item) - если есть такая функция в useMarket
  }
  
  return (
    <div className="home-page">
      <div className="page-header">
        <h1>CS:GO Market Parser</h1>
      </div>

      <div className="boxes-container">
        {/* Левый бокс - Перчатки */}
        <div className="box left-box">
          <div className="box-header">
            <h2>Парсер перчаток</h2>
            <button onClick={toggleParser} className={`toggle-btn ${parserRunning ? 'stop' : 'start'}`}>
              {parserRunning ? '⏹️ Стоп' : '▶️ Старт'}
            </button>
          </div>
          <div className="status">{gloveText}</div>
          <div className="cards-grid">
            {gloves.map((glove) => (
              <GloveCard
                key={glove.id}
                item={glove}
                onBuy={handleBuy}
                onBlacklist={handleBlacklist}
              />
            ))}
          </div>
        </div>

        {/* Правый бокс - Скины */}
        <div className="box right-box">
          <div className="box-header">
            <h2>Full Export Парсер</h2>
            <button onClick={toggleExport} className={`toggle-btn ${exportRunning ? 'stop' : 'start'}`}>
              {exportRunning ? '⏹️ Стоп' : '▶️ Старт'}
            </button>
          </div>
          <div className="status">{feText}</div>
          <div className="cards-grid">
            {skins.map((skin) => (
              <SkinCard
                key={skin.id}
                item={skin}
                onBuy={handleBuy}
                onBlacklist={handleBlacklist}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

