// utils/storage.js
import { DEFAULT_GLOVES_ARR, DEFAULT_ITEMS_FE } from "../constants/marketData";
// Ключ для хранения
const STORAGE_KEY = "marketData";
const SETTINGS_KEY = "marketSettings";


// Сохранение данных
export function saveMarketData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Загрузка данных
export function loadMarketData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  // Если данных нет → возвращаем дефолт
  return { gloves: DEFAULT_GLOVES_ARR, itemsFE: DEFAULT_ITEMS_FE };
}

export function loadSettings() {
  try {
    const saved = localStorage.getItem(SETTINGS_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error("Ошибка загрузки настроек:", e);
  }
  return {
    PERCENT_OUT: 30,
    SKIP_PRICE: 100
  };
}

export function saveSettings(settings) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error("Ошибка сохранения настроек:", e);
  }
}