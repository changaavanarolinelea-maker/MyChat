import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Logo from '../../images/logo.jpg'
import ProImg from '../../images/photo_2024-11-26_10-29-53.jpg'
import Sidebar from './Sidebar'

function Navbar() {
    const [close, setClose]=useState(true)
    
  return <>
        <div className='fixed top-0 z-50 bg-white '>
           <img src={Logo} alt="" className='object-contain h-16 border w-72'/>
        </div>
        <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b shadow md:left-72">
            <nav className="flex items-center justify-between h-full px-4">

                {/* Burger (mobile only) */}
                <i className="text-2xl text-gray-500 cursor-pointer fa-solid fa-bars md:hidden" onClick={()=>setClose(!close)}/>

                {/* Search */}
                <div className="">
                    <SearchBar />
                </div>

                {/* Right icons */}
                <div className="flex items-center gap-6">
                    <i className="text-xl text-gray-400 cursor-pointer fa-regular fa-bell hover:text-blue-500"/>
                    <span className='absolute w-5 ml-20 text-center text-white bg-red-500 rounded-full cursor-pointer top-1 right-16'>3</span>
                  
                    <img src={ProImg} alt="profile"  className="object-cover w-10 h-10 rounded-full"/>
                </div>
            </nav>
        </header>
        <main>
            {close &&
            <Sidebar/>
            }
        </main>
  </>
}

export default Navbar