// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './style.css'
import { SettingsProvider } from "./context/SettingsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SettingsProvider>
      {/* <BrowserRouter>
        <App />
      </BrowserRouter> */}
      <BrowserRouter basename="/parser">
        <App />
      </BrowserRouter>
    </SettingsProvider>
  </React.StrictMode>
);