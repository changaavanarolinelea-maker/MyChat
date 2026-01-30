import React from 'react'
import Navbar from '../users/Navbar'
import { Link } from 'react-router-dom'
import Suggestion from './Suggestion'

function Amis() {
  return<>
        <Navbar/>
        <main className='my-28 mx-5 max-sm:mx-0 md:ml-[16vw]  p-5 max-sm:w-full'>

            <div className='flex items-center gap-6'>
                  <h1 className='font-bold text-3xl '>User</h1>
                <div className='flex items-center gap-4 ' >
                   <i className="fa-solid fa-users text-[#53535f]"></i> 
                   <i class="fa-solid fa-caret-right text-gray-400"></i>
                    <p className='text-gray-400 cursor-pointer'>
                         Friend
                    </p>   
                </div>
            </div>
            <div  className='flex flex-col w-full '>
                <h1 className=' p-8 text-4xl max-sm:text-xl font-semibold md:mx-44'>Gestion  des amis</h1>
                <ul className='flex md:mx-44 gap-5 p-6 '>
                     <li className=' text-blue-600 font-bold border-b-blue-600 border-b-4'>
                        <Link  to="/amis/amis" className='max-sm:flex items-center flex gap-3 hover:text-blue-600 font-bold'>
                           <i className="fa-solid fa-users text-blue-500"></i>
                           Demandes
                        </Link>
                     </li>
                     <li className=' hover:text-blue-600 font-bold hover:border-b-blue-600 hover:border-b-4'>
                        <Link  to='/amis/suggestion' className='max-sm:flex flex gap-3 items-center '>
                           <i className="fa-solid fa-users text-[#53535f] hover:text-blue-600 font-bold"></i>
                           Suggestions
                        </Link>
                     </li>
                </ul>
            </div>
            <div className='border border-blue-100 flex items-center md:mx-40 t p-10 w-ful max-sm:mx-0 '>
                 <div className='mx-auto max-sm:w-full'>
                      <i className="fa-solid fa-users text-[#53535f] text-5xl px-24 max-sm:px-24 py-8"></i> 
                      <h3 className='text-center py-6 font-bold'>Aucune demande d'amitié</h3>
                      <p className='text-center text-gray-500 font-semibold'>Vous n'avez aucune demande en attente</p>
                 </div>
            </div>
        </main>
  
  </>
}

export default Amis