import React, { useState } from 'react'

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
                  <a href="" className='flex items-center gap-3 px-[15px] py-px'>
                      <i class="fa-solid fa-house text-[#53535f] focus:text-[#3F87F5]"></i>
                      <span className='text-[#53535f] hover:text-black  font-sans'>Accueil</span>
                  </a>
                </li>
                <li className='col-span-2 p-2 '>
                  <a href="" className='flex items-center gap-3 px-[15px] py-px'>
                      <i class="fa-regular fa-user text-[#53535f] hover:text-[#3F87F5]"></i>
                      <span className='text-[#53535f] hover:text-black font-sans'>Profil</span>
                  </a>
                </li>
                <li className='col-span-2 p-2 '>
                  <a href="" className='flex items-center gap-3 px-[15px] py-px'>
                      <i class="fa-regular fa-comment text-[#53535f] hover:text-[#3F87F5]"></i>
                      <span className='text-[#53535f] hover:text-black font-sans'>Messages</span>
                  </a>
                </li>
                <li className='col-span-2 p-2 '>
                  <a href="" className='flex items-center gap-3 px-[15px] py-px'>
                      <i class="fa-regular fa-star text-[#53535f] hover:text-[#3F87F5]"></i>
                      <span className='text-[#53535f] hover:text-black font-sans'>Favoris</span>
                  </a>
                </li>
                <li className='col-span-2 p-2'>
                  <a href="" className='flex items-center gap-3 px-[15px] py-px'>
                      <i class="fa-regular fa-bell text-[#53535f] hover:text-[#3F87F5]"></i>
                      <span className='text-[#53535f] hover:text-black font-sans'>Notification</span>
                      <span className='ml-20 rounded-md bg-red-500 w-6 text-center text-white'>3</span>
                  </a>
                </li>
                <li className='col-span-2 p-2 '>
                  <a href="" className='flex items-center gap-3 px-[15px] py-px'>
                      <i class="fa-solid fa-users text-[#53535f] hover:text-[#3F87F5]"></i>
                      <span className='text-[#53535f] hover:text-black font-sans'>Amis</span>
                  </a>
                </li>
               
                <li className='inline-block'>
                  <a href="" className='flex items-center gap-3 px-[20px] py-px' onClick={toggleDrop}>
                      <i class="fa-solid fa-gear text-[#53535f] hover:text-[#3F87F5]"></i>
                      <span className='text-[#53535f] hover:text-black font-sans'>Parametre</span>
                      <i class="fa-solid fa-caret-down ml-20"></i>
                        {dropDown}
                          {/* <ul className="w-64 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in absolute top-96">
                            <li className='py-1'>
                                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Compte</a>
                                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Confidentialite</a>
                            </li>
                          </ul> */}
                        
                  </a>
                </li>
              </ul>
              <div className='p-4 shadow-lg my-6 mx-2'>
                  <p className='text-wrap text-[#53535f] text-sm text-center p-1'>Aucune invitation en attente</p>
              </div>
        </aside>
    </div>
  )
}

export default Sidebar