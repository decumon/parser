// components/Layout/Navbar.jsx
import { Link } from 'react-router-dom'

export default function Navbar({ notif, setNotif, currentPath }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={`${import.meta.env.BASE_URL}assets/img/logo.png`} alt="logo" />
        </Link>
      </div>
      
      <div className="nav-links">
        <Link to="/" className={currentPath === '/' ? 'active' : ''}>Главная</Link>
        <Link to="/AutoBuy" className={currentPath === '/AutoBuy' ? 'active' : ''}>Автобаи</Link>
        <Link to="/gloves" className={currentPath === '/gloves' ? 'active' : ''}>Перчатки</Link>
        <Link to="/skins" className={currentPath === '/skins' ? 'active' : ''}>Скины</Link>
        <Link to="/stats" className={currentPath === '/stats' ? 'active' : ''}>Статистика</Link>
        <Link to="/settings" className={currentPath === '/settings' ? 'active' : ''}>Настройки</Link>
      </div>

      <div className="nav-controls">
        {/* <button onClick={() => setNotif(!notif)} className={`sound-btn ${notif ? '' : 'muted'}`}>
          <img src={notif ? `${import.meta.env.BASE_URL}assets/img/sound-on.png` : `${import.meta.env.BASE_URL}assets/img/sound-off.png`} alt="sound" />
        </button> */}
        <div className="profile">
          <img className="avatar" src={`${import.meta.env.BASE_URL}assets/img/steamAvatar2.png`} alt="Profile" />
          <span>decumon</span>
        </div>
      </div>
    </nav>
  )
}