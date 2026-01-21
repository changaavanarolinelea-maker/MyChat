import React from 'react'
import Navbar from './Navbar'
import myImag from '../../images/photo_2024-11-26_10-29-53.jpg'

function Home() {
  return <>
       <Navbar/>

      <main className='container flex my-32 flex-col ml-auto mr-10 max-sm:mx-auto max-sm:px-3'>
           <section className='flex justify-center shadow-md rounded-lg border '>
                <div className='grow '>
                    <div className='grid-flow-col p-6'>
                         <h5 className='font-bold py-2'>Verifier votre compte</h5>
                         <p className=' text-gray-400 py-2'>verifier votre adresse email pour recevoir les notifications directement dans votre boite mail</p>
                         <div className='flex justify-end gap-2'>
                             <button type="button" className='bg-[#3F87F5] hover:bg-[#1166f8] px-2 py-1 text-white rounded transition-all'>Ok</button>
                             <button type="button" className='border px-2 py-1 text-gray-500 rounded hover:bg-slate-400 hover:text-white transition-all'>Plus tard</button>
                         </div>
                    </div>
                </div>    
            </section> 
            <section >
              <div className='flex items-center border my-9 mx-44 py-4 px-4 rounded-lg shadow-md max-sm:w-full max-sm:ml-0 md:overflow-x-hidden' >
                   <img src={myImag} alt="" className='w-10 object-cover p-1 h-10 rounded-full justify-start flex' />
                  <a href="" className='bg-slate-200  mx-auto w-full text-center px-3 py-2 grow rounded-xl text-gray-400'>Quoi de neuf ? Morel</a>
              </div>
            </section>
            <section >
              <div className='flex items-center border my-9 mx-44 py-4 px-4 rounded-lg shadow-md max-sm:w-full max-sm:ml-0 md:overflow-x-hidden' >
                   <img src={myImag} alt="" className='w-10 object-cover p-1 h-10 rounded-full justify-start flex' />
                  <a href="" className='bg-slate-200  mx-auto w-full text-center px-3 py-2 grow rounded-xl text-gray-400'>Quoi de neuf ? Morel</a>
              </div>
            </section>
            <section >
              <div className='flex items-center border my-9 mx-44 py-4 px-4 rounded-lg shadow-md max-sm:w-full max-sm:ml-0 md:overflow-x-hidden' >
                   <img src={myImag} alt="" className='w-10 object-cover p-1 h-10 rounded-full justify-start flex' />
                  <a href="" className='bg-slate-200  mx-auto w-full text-center px-3 py-2 grow rounded-xl text-gray-400'>Quoi de neuf ? Morel</a>
              </div>
            </section>
            <section >
              <div className='flex items-center border my-9 mx-44 py-4 px-4 rounded-lg shadow-md max-sm:w-full max-sm:ml-0 md:overflow-x-hidden' >
                   <img src={myImag} alt="" className='w-10 object-cover p-1 h-10 rounded-full justify-start flex' />
                  <a href="" className='bg-slate-200  mx-auto w-full text-center px-3 py-2 grow rounded-xl text-gray-400'>Quoi de neuf ? Morel</a>
              </div>
            </section>
            <section >
              <div className='flex items-center border my-9 mx-44 py-4 px-4 rounded-lg shadow-md max-sm:w-full max-sm:ml-0 md:overflow-x-hidden' >
                   <img src={myImag} alt="" className='w-10 object-cover p-1 h-10 rounded-full justify-start flex' />
                  <a href="" className='bg-slate-200  mx-auto w-full text-center px-3 py-2 grow rounded-xl text-gray-400'>Quoi de neuf ? Morel</a>
              </div>
            </section>
            <section >
              <div className='flex items-center border my-9 mx-44 py-4 px-4 rounded-lg shadow-md max-sm:w-full max-sm:ml-0 md:overflow-x-hidden' >
                   <img src={myImag} alt="" className='w-10 object-cover p-1 h-10 rounded-full justify-start flex' />
                  <a href="" className='bg-slate-200  mx-auto w-full text-center px-3 py-2 grow rounded-xl text-gray-400'>Quoi de neuf ? Morel</a>
              </div>
            </section>
            

      </main>
  
  </>
}

export default Home
