import React, { createContext, useState, useEffect, useCallback } from "react";
import { loadSettings, saveSettings } from "../utils/settings";

export const SettingsContext = createContext();

// export function SettingsProvider({ children }) {
  
//   // Загружаем сохранённые настройки
//   const initialSettings = loadSettings();

//   const [settings, setSettings] = useState(initialSettings);

  // Сохраняем в localStorage при изменении
//   useEffect(() => {
//     console.log("[SettingsContext] settings изменились:", settings);
//     window.__DEBUG_settings_from_provider = settings;
//     saveSettings(settings);
//   }, [settings]);

//   return (
//     <SettingsContext.Provider value={{ settings, setSettings }}>
//       {children}
//     </SettingsContext.Provider>
//   );
// }

export function SettingsProvider({ children }) {
  const initialSettings = loadSettings();
  const [settings, setSettings] = useState(initialSettings);

  // Правильное обновление - создаем новый объект
  const updateSettings = useCallback((newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings })); // ← Новый объект!
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}