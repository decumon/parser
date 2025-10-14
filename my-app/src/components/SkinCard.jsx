export default function SkinCard({ item, onBuy, onBlacklist }) {
  return (
    <div className="skin-card">
      <div className="skin-info">
        <h3 className="skin-name">{item.name || "Без названия"}</h3>
        <p className="price">
          {Math.floor(item.price / 100).toLocaleString("ru-RU")} ₽
        </p>

        {item.float && (
          <p className="float">Float: {Number(item.float).toFixed(4)}</p>
        )}

        {item.pattern && (
          <p className="pattern">Pattern: {item.pattern}</p>
        )}

        {item.steamPrice && (
          <p className="profit">
            Прибыль:{" "}
            {Math.floor((item.steamPrice - item.price) / 100).toLocaleString("ru-RU")} ₽
          </p>
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