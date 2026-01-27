import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/users/home'
import Profit from './components/profits/Profit'
import Modal from './components/users/Modal'

function App() {
 
  return (
    <>
        <BrowserRouter>
        <Routes>
             
             <Route path='/' element ={<Home/>} />
             <Route path='/users/home' element ={<Home/>} />
             <Route path='/profits/profit' element ={<Profit/>}/>
             <Route path='/users/modal' element={<Modal/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
