// components/SkinCard.jsx
export default function SkinCard({ item, onBuy, onBlacklist }) {
  return (
    <div className="card skin-card">
      <div className="card-image">
        <img 
          //src={`/src/assets/skins/${item.name}.jpg`} 
          src={`/src/assets/img/white.png`} 
          alt={item.name}
          onError={(e) => {
            e.target.src = '/src/assets/skins/default.jpg' // fallback image
          }}
        />
        {item.float && !isNaN(item.float) && (
          <span className="float-badge">Float: {Number(item.float).toFixed(4)}</span>
        )}
        {item.pattern && (
          <span className="pattern-badge">Pattern: {item.pattern}</span>
        )}
      </div>
      
      <div className="card-content">
        <h3>{item.name}</h3>
        <p className="price">{Math.floor(item.price / 100).toLocaleString('ru-RU')} RUB</p>
        
        {/* {item.steamPrice && (
          <p className="market">Steam: {Math.floor(item.steamPrice / 100).toLocaleString('ru-RU')} RUB</p>
        )} */}
        
        <div className="profit">
          {item.steamPrice && item.price && (
            <span>Прибыль: {Math.floor((item.steamPrice - item.price) / 100).toLocaleString('ru-RU')} RUB</span>
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
    </div>
  )
}