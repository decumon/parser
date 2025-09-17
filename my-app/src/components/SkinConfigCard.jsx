export default function SkinConfigCard({ skinName, patterns, onChange, onAdd, onRemove }) {
  return (
    <div className="card">
      <h3>{skinName}</h3>
      {patterns.map((pattern, index) => (
        <div key={index} className="range">
          Паттерн {pattern.pattern1} – {pattern.pattern2} → 
          Уведомление: <input type="number" value={pattern.priceNotif} onChange={e => onChange(skinName, index, "priceNotif", e.target.value)} /> | 
          Покупка: <input type="number" value={pattern.priceBuy} onChange={e => onChange(skinName, index, "priceBuy", e.target.value)} />
          <button onClick={() => onRemove(skinName, index)}>❌</button>
        </div>
      ))}
      <button onClick={() => onAdd(skinName)}>➕ Добавить диапазон</button>
    </div>
  );
}
