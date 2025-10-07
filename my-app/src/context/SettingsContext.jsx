import React, { createContext, useState, useEffect, useCallback } from "react";
import { loadSettings, saveSettings } from "../utils/settings";

export const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const initialSettings = loadSettings();
  const [settings, setSettings] = useState(initialSettings);

  // Функция обновления + сохранения
  const updateSettings = useCallback((newSettings) => {
    setSettings(prev => {
      const updated = { ...prev, ...newSettings };
      saveSettings(updated);  // ← сохраняем в localStorage
      return updated;
    });
  }, []);

  // На случай, если settings меняются извне
  useEffect(() => {
    saveSettings(settings);
    //console.log("[SettingsContext] settings изменились:", settings);
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}