import React from 'react'
import Navbar from './Navbar'
import myImag from '../../images/photo_2024-11-26_10-29-53.jpg'
import Post from '../post/Post'

function Home() {
  return <>
       <Navbar/>

      <main className='flex my-28 flex-col mx-8 max-sm:w-auto md:ml-[20vw] md:w-[75vw]  '>
           <section className='flex justify-center shadow-md rounded-lg border max-sm:mx-[8px] max-sm:w-full'>
                <div className='grow '>
                    <div className='grid-flow-col p-6 '>
                         <h5 className='font-bold py-2'>Verifier votre compte</h5>
                         <p className=' text-gray-400 py-2'>verifier votre adresse email pour recevoir les notifications directement dans votre boite mail</p>
                         <div className='flex justify-end gap-2'>
                             <button type="button" className='bg-[#3F87F5] hover:bg-[#1166f8] px-2 py-1 text-white rounded transition-all'>Ok</button>
                             <button type="button" className='border px-2 py-1 text-gray-500 rounded hover:bg-slate-400 hover:text-white transition-all'>Plus tard</button>
                         </div>
                    </div>
                </div>    
            </section> 
            <section className='flex justify-center shadow-md rounded-lg border max-sm:mx-[8px] max-sm:w-full p-6 my-8 md:mx-48'>
              <div className='grow '>
                  <div className='grid-flow-col w-full  '>
                    <div className='max-sm:w-full' >
                      <div className='flex justify-center w-auto'>
                          <img src={myImag} alt="" className='w-10 object-cover p-1 h-10 rounded-full justify-start flex' />
                          <a href="" className=' bg-gray-50 hover:bg-gray-300  mx-auto w-full text-center text-md px-3 py-2 font-semibold grow rounded-2xl text-gray-400'>Quoi de neuf ? Morel</a>
                      </div>
                    </div>
                  </div>
              </div>
            </section>
           <Post/>
           
      </main>
  
  </>
}

export default Home
