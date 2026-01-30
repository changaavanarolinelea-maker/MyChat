

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'
import Home from './components/users/home'
import Profit from './components/profits/Profit'
import Message from './components/users/message'
import Modal from './components/users/Modal'
import Amis from './components/amis/Amis'
import Suggestion from './components/amis/Suggestion'
import Favoris from './components/amis/Favoris'


function App() {
  return (
    <>
        
        <BrowserRouter>
        <Routes>
             <Route path='/' element ={<Home/>} />
             <Route path='/users/home' element ={<Home/>} />
             <Route path='/profits/profit' element ={<Profit/>}/>
             <Route path='/users/message' element={<Message/>}/>
             <Route path='/users/modal' element={<Modal/>}/>
             <Route path='/users/favoris' element={<Favoris/>}/>
             <Route path='/amis/amis' element={<Amis/>}/>
             <Route path='/amis/suggestion' element={<Suggestion/>}/>
        </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
