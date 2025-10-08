import React, { useState } from "react";

export default function SkinConfigCard({ skinName, patterns, onChange, onAdd, onRemove }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="card">
      <h3 className="card-header" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▼ " : "▶ "} {skinName}
      </h3>

      <div className={`card-content ${isOpen ? "open" : ""}`}>
        {patterns.map((pattern, index) => (
          <div key={index} className="range">
            Паттерн:
            {isEditing ? (
              <>
                <input
                  type="number"
                  value={pattern.pattern1}
                  onChange={e => onChange(skinName, index, "pattern1", e.target.value)}
                />
                -
                <input
                  type="number"
                  value={pattern.pattern2}
                  onChange={e => onChange(skinName, index, "pattern2", e.target.value)}
                />
              </>
            ) : (
              <> {pattern.pattern1} – {pattern.pattern2} </>
            )}
            {" "}→ Уведомление:
            {isEditing ? (
              <input
                type="number"
                value={pattern.priceNotif}
                onChange={e => onChange(skinName, index, "priceNotif", e.target.value)}
              />
            ) : (
              <> {pattern.priceNotif} </>
            )}
            {" "} | Покупка:
            {isEditing ? (
              <input
                type="number"
                value={pattern.priceBuy}
                onChange={e => onChange(skinName, index, "priceBuy", e.target.value)}
              />
            ) : (
              <> {pattern.priceBuy} </>
            )}

            {isEditing && <button onClick={() => onRemove(skinName, index)}>❌</button>}
          </div>
        ))}

        {isEditing && <button onClick={() => onAdd(skinName)}>➕ Добавить диапазон</button>}

        <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "💾 Сохранить" : "✏️ Редактировать"}
        </button>
      </div>
    </div>
  );
}
