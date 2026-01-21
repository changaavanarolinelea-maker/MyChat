import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Register from './components/connexion/Register.jsx'
import Login from './components/connexion/Login.jsx'
import Navbar from './components/users/Navbar.jsx'
import Home from './components/users/home.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    {/* <Register /> */}
    {/* <Login/> */}
    {/* <Navbar/> */}
  </StrictMode>,
)
