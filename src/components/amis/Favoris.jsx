import React from 'react'
import Navbar from '../users/Navbar'

function Favoris() {
  return <>
            <Navbar/>
            <main className="my-28 mx-4 md:ml-[14vw] ">
                <div className='flex items-center gap-6'>
                    <h1 className='font-semibold text-xl '>User</h1>
                    <div className='flex items-center gap-4 ' >
                        <i className="fa-solid fa-circle-plus text-[#53535f]"></i> 
                        <i class="fa-solid fa-caret-right text-gray-400"></i>
                            <p className='text-gray-400 cursor-pointer hover:text-blue-600'>
                                Fav
                            </p>   
                    </div>
                 </div>
                 <section className='w-full mt-10 rounded-lg '>
                    <div className='flex flex-col items-center gap-5 justify-center h-[50vh]'>
                        <i class="fa-regular fa-bookmark text-6xl text-gray-400"></i>
                        <p className=' font-semibold text-2xl'>Aucun favori pour le moment </p>
                        <p className='text-gray-400 font-semibold txt-xl'>Sauvegardez des publications pour les retrouver facilement </p>
                        <button className='mt-4 mb-4 px-6 py-4  bg-blue-600 border text-white rounded-md  transition-all'>Explorer les publications</button>
                    </div>
                </section>
            </main>
  
  </>
}

export default Favoris