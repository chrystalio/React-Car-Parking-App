import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/assets/main.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '@/views/Home.jsx'
import Register from '@/views/auth/Register.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route index element={<Home/>}/>
        <Route path="register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)