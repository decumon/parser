import React, { useState } from "react";

export default function GloveConfigCard({ gloveKey, glove, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const renderRow = (label, buffField, steamField) => (
    <div className="range">
      {label} →
      Уведомление:
      {isEditing ? (
        <input
          type="number"
          value={glove[buffField]}
          onChange={e => onChange(gloveKey, buffField, e.target.value)}
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
        />
      ) : (
        <> {glove[steamField]} </>
      )}
    </div>
  );

  return (
    <div className="card">
      <h3 className="card-header" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▼ " : "▶ "} {glove.mhm}
      </h3>

      <div className={`card-content ${isOpen ? "open" : ""}`}>
        {renderRow("Флоат 0.15–0.18", "buff0_15", "steam0_15")}
        {renderRow("Флоат 0.18–0.21", "buff0_21", "steam0_21")}
        {renderRow("Флоат 0.21–0.24", "buff0_24", "steam0_24")}

        <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "💾 Сохранить" : "✏️ Редактировать"}
        </button>
      </div>
    </div>
  );
}
