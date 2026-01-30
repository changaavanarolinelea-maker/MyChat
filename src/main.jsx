import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Modal from './components/users/Modal.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-poppins'>
       <App/>
    </div>
        
  </StrictMode>,
)
