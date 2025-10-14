import React, { useState } from "react";

export default function SkinConfigCard({ skinName, patterns, onChange, onAdd, onRemove, onDelete, onDragStart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="card">
      <h3 className="card-header" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▼ " : "▶ "} {skinName}
        <span 
          className="drag-handle" 
          title="Перетащить для изменения порядка"
          draggable
          onDragStart={onDragStart}
        >
          ⋮⋮
        </span>
      </h3>

      <div className={`card-content ${isOpen ? "open" : ""}`}>
        {patterns.map((pattern, index) => (
          <div key={index} className="range">
            {isEditing && (
              <input
                type="checkbox"
                title="Проверять скин"
                onChange={e => onChange(skinName, index, "enabled", e.target.checked)}
                style={{ marginRight: '3px', width: '13px' }}
              />
            )}
            Паттерн:
            {isEditing ? (
              <>
                <input
                  type="number"
                  value={pattern.pattern1}
                  onChange={e => onChange(skinName, index, "pattern1", e.target.value)}
                  style={{ width: '55px' }}
                />
                -
                <input
                  type="number"
                  value={pattern.pattern2}
                  onChange={e => onChange(skinName, index, "pattern2", e.target.value)}
                  style={{ width: '55px' }}
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
                style={{ width: '55px' }}
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
                style={{ width: '55px' }}
              />
            ) : (
              <> {pattern.priceBuy} {!pattern.enabled && <span style={{ color: 'red', marginLeft: '4px' }}>❌</span>} </>
            )}

            {isEditing && <button onClick={() => onRemove(skinName, index)}>❌</button>}
          </div>
        ))}

        {isEditing && <button onClick={() => onAdd(skinName)}>➕ Добавить диапазон</button>}

        <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "💾 Сохранить" : "✏️ Редактировать"}
        </button>
        <button className="delete-skin-btn" onClick={onDelete}>
          🗑 Удалить скин
        </button>
      </div>
    </div>
  );
}
