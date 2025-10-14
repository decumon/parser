import React, { useState } from "react";

export default function GloveConfigCard({ gloveKey, glove, onChange, onDragStart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const renderRow = (label, buffField, steamField, enabledField) => (
    <div className="range">
      {isEditing && (
        <input
          type="checkbox"
          title="Проверять скин"
          checked={glove[enabledField]}
          onChange={e => onChange(gloveKey, enabledField, e.target.checked)}
          style={{ marginRight: '3px', width: '13px' }}
        />
      )}
      {label} →
      Уведомление:
      {isEditing ? (
        <input
          type="number"
          value={glove[buffField]}
          onChange={e => onChange(gloveKey, buffField, e.target.value)}
          style={{ width: '55px' }}
        />
      ) : (
        <> {glove[buffField]} </>
      )}
      {" "}| Покупка:
      {isEditing ? (
        <input
          type="number"
          value={glove[steamField]}
          onChange={e => onChange(gloveKey, steamField, e.target.value)}
          style={{ width: '55px' }}
        />
      ) : (
        <> {glove[steamField]} {!glove[enabledField] && <span style={{ color: 'red', marginLeft: '4px' }}> ❌ </span>} </>
      )}
    </div>
  );

  return (
    <div className="card">
      <h3 className="card-header" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▼ " : "▶ "} {glove.mhm}
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
        {renderRow("Флоат 0.15–0.18", "buff0_15", "steam0_15", "enabled0_15")}
        {renderRow("Флоат 0.18–0.21", "buff0_21", "steam0_21", "enabled0_21")}
        {renderRow("Флоат 0.21–0.24", "buff0_24", "steam0_24", "enabled0_24")}

        <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "💾 Сохранить" : "✏️ Редактировать"}
        </button>
      </div>
    </div>
  );
}
