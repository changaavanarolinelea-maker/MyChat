import React from 'react'
import SearchBar from './SearchBar'
import Logo from '../../images/logo.jpg'
import ProImg from '../../images/photo_2024-11-26_10-29-53.jpg'
import Sidebar from './Sidebar'

function Navbar() {
  return <>
        <div className='fixed top-0 z-50 bg-white '>
           <img src={Logo} alt="" className='object-contain w-72 h-16 border'/>
        </div>
        <header className="fixed top-0 left-0  right-0 h-16 bg-white border-b shadow z-50 md:left-72">
            <nav className="flex items-center justify-between h-full px-4">

                {/* Burger (mobile only) */}
                <i className="fa-solid fa-bars text-2xl cursor-pointer text-gray-500 md:hidden " />

                {/* Search */}
                <div className="">
                    <SearchBar />
                </div>

                {/* Right icons */}
                <div className="flex items-center gap-6">
                    <i className="fa-regular fa-bell text-gray-400 hover:text-blue-500 cursor-pointer" />
                    <img src={ProImg} alt="profile"  className="w-10 h-10 rounded-full object-cover"/>
                </div>
            </nav>
        </header>
        <main>
            <Sidebar/>
        </main>
  </>
}

export default Navbar