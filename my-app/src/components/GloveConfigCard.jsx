import React from "react";

export default function GloveConfigCard({ gloveKey, glove, onChange }) {
  return (
    <div className="card">
      <h3>{glove.mhm}</h3>
      <div className="range">
        Флоат 0.15–0.18 → 
        Уведомление: <input type="number" value={glove.buff0_15} onChange={e => onChange(gloveKey, "buff0_15", e.target.value)} /> | 
        Покупка: <input type="number" value={glove.steam0_15} onChange={e => onChange(gloveKey, "steam0_15", e.target.value)} />
      </div>
      <div className="range">
        Флоат 0.18–0.21 → 
        Уведомление: <input type="number" value={glove.buff0_21} onChange={e => onChange(gloveKey, "buff0_21", e.target.value)} /> | 
        Покупка: <input type="number" value={glove.steam0_21} onChange={e => onChange(gloveKey, "steam0_21", e.target.value)} />
      </div>
      <div className="range">
        Флоат 0.21–0.24 → 
        Уведомление: <input type="number" value={glove.buff0_24} onChange={e => onChange(gloveKey, "buff0_24", e.target.value)} /> | 
        Покупка: <input type="number" value={glove.steam0_24} onChange={e => onChange(gloveKey, "steam0_24", e.target.value)} />
      </div>
    </div>
  );
}
