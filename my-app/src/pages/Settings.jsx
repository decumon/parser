import  { useState, useEffect, useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import "../Settings.css";

  export default function Settings() {
  //const { settings, setSettings } = useContext(SettingsContext);
  const { settings, updateSettings } = useContext(SettingsContext);
  const [showApiKey, setShowApiKey] = useState(false);

  // const onChangeVolume = (v) => {
  //   setSettings(prev => ({ ...prev, volume: v, notif: v > 0 }));
  // };
//   const onChangeVolume = (v) => {
//   setSettings(prev => {
//     const next = { ...prev, volume: v };
//     console.log("[Settings] setSettings ->", next);
//     return next;
//   });
// };

  const onChangeVolume = (v) => {
    updateSettings({ volume: v, notif: v > 0 }); // ← Используем updateSettings
  };
  
  const toggleMute = () => {
    if (settings.volume > 0) {
      setSettings(prev => ({ ...prev, lastVolume: prev.volume, volume: 0, notif: false }));
    } else {
      setSettings(prev => ({ ...prev, volume: prev.lastVolume || 0.5, notif: true }));
    }
  };

  const handleChange = (field, value) => {
    setSettings((prev) => ({
      ...prev,
      [field]: ["BALANCE", "SKIP_PRICE", "PERCENT_OUT"].includes(field)
        ? Number(value)   // числа
        : value           // строки (например, API_KEY)
    }));
  };

// useEffect(() => {
//   console.log("[SettingsContext] settings изменились:", settings);            //!!!!!!!!!!!!!!!!!
// }, [settings]);

  return (
    <div className="settings-container">
      <h2>Настройки</h2>

      <div className="setting-row">
        <button className="volume-btn" onClick={toggleMute}>
          {settings.volume > 0 && settings.notif ? "🔊" : "🔇"}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={settings.volume}
          onChange={(e) => onChangeVolume(parseFloat(e.target.value))}
        />
        <span>{Math.round(settings.volume * 100)}%</span>
      </div>

      <div className="setting-item">
        <label htmlFor="skip">Skip price:</label>
        <input
          id="skip"
          type="number"
          value={settings.SKIP_PRICE}
          onChange={(e) => handleChange("SKIP_PRICE", e.target.value)}
        />
      </div>

      <div className="setting-item">
        <label htmlFor="balance">Баланс:</label>
        <input
          id="balance"
          type="number" 
          value={settings.BALANCE}
          onChange={(e) => handleChange("BALANCE", e.target.value)}
        />
      </div>

      <div className="setting-item">
        <label htmlFor="percent">Процент вывода:</label>
        <input
          id="percent"
          type="number" 
          value={settings.PERCENT_OUT}
          onChange={(e) => handleChange("PERCENT_OUT", e.target.value)}
        />
      </div>
      {/* 🔑 API KEY */}
      <div className="setting-item">
        <label htmlFor="api">API Key:</label>
        <div className="input-with-toggle">
          <input
            id="api"
            type={showApiKey ? "text" : "password"}
            value={settings.API_KEY}
            onChange={(e) =>
              setSettings((prev) => ({
                ...prev,
                API_KEY: e.target.value   // 🔹 всегда строка
              }))
            }
          />
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setShowApiKey((prev) => !prev)}
          >
            {showApiKey ? "🙈" : "👁️"}
          </button>
        </div>
      </div>
    </div>
  );
}
