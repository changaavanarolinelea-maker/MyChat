



import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'
import Home from './components/users/home'
import Profit from './components/profits/Profit'
import Message from './components/users/message'

function App() {
  

 
       
    
 
  return (
    <>
        <BrowserRouter>
        <Routes>
             
             <Route path='/' element ={<Home/>} />
             <Route path='/users/home' element ={<Home/>} />
             <Route path='/profits/profit' element ={<Profit/>}/>
             <Route path='/users/message' element={<Message/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
