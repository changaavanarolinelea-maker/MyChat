

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'
import Home from './components/users/home'
import Profit from './components/profits/Profit'
import Message from './components/users/message'
import Modal from './components/users/Modal'
import Amis from './components/amis/Amis'
import Suggestion from './components/amis/Suggestion'
import Favoris from './components/amis/Favoris'
import AccountSettings from './components/users/compte'
import Confidentialite from './components/users/confidentialite'


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
              <Route path='/users/comptes' element={<AccountSettings/>}/>
              <Route path='/users/confidentialite' element={<Confidentialite/>}/>
        </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
