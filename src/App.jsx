import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/users/home'
import Profit from './components/profits/Profit'

function App() {
 
  return (
    <>
        <BrowserRouter>
        <Routes>
             
             <Route path='/' element ={<Home/>} />
             <Route path='/users/home' element ={<Home/>} />
             <Route path='/profits/profit' element ={<Profit/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
