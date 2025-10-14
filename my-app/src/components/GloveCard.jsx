export default function GloveCard({ item, onBuy, onBlacklist }) {
  return (
    <div className="glove-card">
      <div className="glove-info">
        <h3 className="glove-name">{item.name || "Без названия"}</h3>
        <p className="price">
          {Math.floor(item.price / 100).toLocaleString("ru-RU")} ₽
        </p>

        {item.float && (
          <p className="float">Float: {Number(item.float).toFixed(4)}</p>
        )}
      </div>
      <div className="card-actions">
        <button onClick={() => onBuy(item)} className="buy-btn">
          Купить
        </button>
        <button onClick={() => onBlacklist(item)} className="blacklist-btn">
          В ЧС
        </button>
      </div>
    </div>
  );
}