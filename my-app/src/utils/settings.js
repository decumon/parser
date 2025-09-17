//import { API_KEY } from "../constants/marketData";

const SETTINGS_KEY = 'parser:settings';

export function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? JSON.parse(raw) : { volume: 0.5, notif: true, PERCENT_OUT: 30, SKIP_PRICE: 100, BALANCE: 0, API_KEY:"" };
  } catch (e) {
    console.error('loadSettings error', e);
    return { volume: 0.5, notif: true };
  }
}

export function saveSettings(partial) {
  try {
    const current = loadSettings();
    const next = { ...current, ...partial };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
    // уведомляем слушателей в той же вкладке
    window.dispatchEvent(new CustomEvent('settings:changed', { detail: next }));
    console.info('settings saved', next);
    return next;
  } catch (e) {
    console.error('saveSettings error', e);
  }
}