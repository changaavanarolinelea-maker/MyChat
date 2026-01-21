import React from 'react'
import SearchBar from './SearchBar'
import Logo from '../../images/logo.jpg'
import ProImg from '../../images/photo_2024-11-26_10-29-53.jpg'
import Sidebar from './Sidebar'

function Navbar() {
  return <>
    <div className='fixed top-0 z-50'>
        <img src={Logo} alt=""  className='object-contain w-72 h-20 border'/>
     </div>
    <header className='fixed top-0 z-50 w-screen h-20 p-2 border-b-[1px] border-l-[1px] bg-slate- left-72 shadow-xl'>
        <nav className='flex items-center justify-around'>
            <div className='ml-80'>
               <SearchBar/>
            </div>
            <div className='flex '>
                <div className='flex items-center  gap-6'>
                    <div className='flex items-center  justify-end'>
                       <i class="fa-regular fa-bell text-gray-400 hover:text-[#3F87F5]"></i>
                    </div>
                    <div className='flex items-center w-full'>
                        <img src={ProImg} alt="" className='w-10 object-cover p-1 h-10 rounded-full'/>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <Sidebar/>
    </main>
  </>
}

export default Navbar