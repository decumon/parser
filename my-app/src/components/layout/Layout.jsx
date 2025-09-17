// components/Layout/Layout.jsx
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
//import './Layout.css'

export default function Layout({ children }) {
  const [notif, setNotif] = useState(true)
  const location = useLocation()

  return (
    <div className="app">
      <Navbar notif={notif} setNotif={setNotif} currentPath={location.pathname} />
      <main className="main-content">
        {children}
      </main>
    </div>
  )
}