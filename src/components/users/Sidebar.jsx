import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Sidebar() {
  const [dropDown, setDropDown] = useState(false)
  const toggleDrop = () =>{
      setDropDown(true)
  }
  return (
    <div>
        
        <aside className='fixed w-72 h-full shadow-md border-r-[1px] top-10 py-36 active:bg-slate-400  bg-white max-lg:hidden'>
              <ul className='flex flex-col' >
                <li className='col-span-2 p-2 bg-black active'>
                  <Link to="/users/home" className='flex items-center gap-3 px-[15px] py-px'>
                      <i class="fa-solid fa-house text-[#53535f] focus:text-[#3F87F5]"></i>
                      <span className='text-[#53535f] hover:text-black  font-sans'>Accueil</span>
                  </Link>
                </li>
                <li className='col-span-2 p-2 '>
                  <Link to="/profits/profit" className='flex items-center gap-3 px-[15px] py-px'>
                      <i class="fa-regular fa-user text-[#53535f] hover:text-[#3F87F5]"></i>
                      <span className='text-[#53535f] hover:text-black font-sans'>Profil</span>
                  </Link>
                </li>
                <li className='col-span-2 p-2 '>
                  <Link to="" className='flex items-center gap-3 px-[15px] py-px'>
                      <i class="fa-regular fa-comment text-[#53535f] hover:text-[#3F87F5]"></i>
                      <span className='text-[#53535f] hover:text-black font-sans'>Messages</span>
                  </Link>
                </li>
                <li className='col-span-2 p-2 '>
                  <Link to="" className='flex items-center gap-3 px-[15px] py-px'>
                      <i class="fa-regular fa-star text-[#53535f] hover:text-[#3F87F5]"></i>
                      <span className='text-[#53535f] hover:text-black font-sans'>Favoris</span>
                  </Link>
                </li>
                <li className='col-span-2 p-2'>
                  <Link to="" className='flex items-center gap-3 px-[15px] py-px'>
                      <i class="fa-regular fa-bell text-[#53535f] hover:text-[#3F87F5]"></i>
                      <span className='text-[#53535f] hover:text-black font-sans'>Notification</span>
                      <span className='w-6 ml-20 text-center text-white bg-red-500 rounded-md animate-bounce'>3</span>
                  </Link>
                </li>
                <li className='col-span-2 p-2 '>
                  <Link to="" className='flex items-center gap-3 px-[15px] py-px'>
                      <i class="fa-solid fa-users text-[#53535f] hover:text-[#3F87F5]"></i>
                      <span className='text-[#53535f] hover:text-black font-sans'>Amis</span>
                  </Link>
                </li>
               
                <li className='inline-block'> {dropDown}
                  <Link to="" className='flex items-center gap-3 px-[20px] py-px' >
                      <i class="fa-solid fa-gear text-[#53535f] hover:text-[#3F87F5]"></i>
                      <span className='text-[#53535f] hover:text-black font-sans'>Parametre</span>
                      <i class="fa-solid fa-caret-down ml-20" onClick={toggleDrop}></i>
                       
                          <ul className="w-64 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in absolute top-9" >
                            <li className='py-1'>
                                  <Link to="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Compte</Link>
                                  <Link to="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Confidentialite</Link>
                            </li>
                          </ul>
                          
                        
                  </Link>
                </li>
              </ul>
              <div className='p-4 mx-2 my-6 shadow-lg'>
                  <p className='text-wrap text-[#53535f] text-sm text-center p-1'>Aucune invitation en attente</p>
              </div>
        </aside>
    </div>
  )
}

export default Sidebar