import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AutoBuy from './pages/AutoBuy'
import Settings from './pages/Settings'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AutoBuy" element={<AutoBuy />} />
        <Route path='/settings' element={<Settings />} />
        {/* <Route path="/gloves" element={<GlovesPage />} />
        <Route path="/skins" element={<SkinsPage />} /> */}
      </Routes>
    </Layout>
  )
}

export default App