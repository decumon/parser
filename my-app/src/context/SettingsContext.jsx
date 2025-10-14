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

  // Синхронизация при изменении в той же вкладке (CustomEvent) и в других вкладках (storage)
  useEffect(() => {
    const handleLocalChange = (event) => {
      if (event && event.detail) {
        setSettings(prev => {
          // Избегаем лишних перерисовок, если данные не изменились
          try {
            const same = JSON.stringify(prev) === JSON.stringify(event.detail);
            return same ? prev : event.detail;
          } catch (_) {
            return event.detail;
          }
        });
      }
    };

    const handleStorage = (event) => {
      if (event.key === 'parser:settings' && event.newValue) {
        try {
          const next = JSON.parse(event.newValue);
          setSettings(prev => {
            try {
              const same = JSON.stringify(prev) === JSON.stringify(next);
              return same ? prev : next;
            } catch (_) {
              return next;
            }
          });
        } catch (_) {
          // ignore parse errors
        }
      }
    };

    window.addEventListener('settings:changed', handleLocalChange);
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('settings:changed', handleLocalChange);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  // Убираем автосохранение при каждом изменении state, т.к. сохраняем в updateSettings

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}