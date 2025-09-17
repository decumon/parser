// components/GloveCard.jsx
export default function GloveCard({ item, onBuy, onBlacklist }) {
  return (
    <div className="card glove-card">
      <div className="card-image">
        <img src={`/src/assets/gloves/${item.name}.jpg`} alt={item.name} />
        <span className="float-badge">Float: {item.float}</span>
      </div>
      
      <div className="card-content">
        <h3>{item.name}</h3>
        <p className="price">{Math.floor(item.price / 100).toLocaleString('ru-RU')} RUB</p>
        <p className="market">Steam: {Math.floor(item.steamPrice / 100).toLocaleString('ru-RU')} RUB</p>
        
        <div className="card-actions">
          <button onClick={() => onBuy(item)} className="buy-btn">
            Купить
          </button>
          <button onClick={() => onBlacklist(item)} className="blacklist-btn">
            В ЧС
          </button>
        </div>
      </div>
    </div>
  )
}