
import Navbar from './Navbar'
import myImag from '../../images/photo_2024-11-26_10-29-53.jpg'
import Post from '../post/Post'
import {Link} from 'react-router-dom'


function Home() {

  return <>
       <Navbar/>
      <main className=' my-28 mx-8 max-sm:w-auto md:ml-[20vw] md:w-[75vw]'>
           <section className=' shadow-md rounded-lg border max-sm:mx-[8px] max-sm:w-full bg-white'>
                <div className='grid grid-flow-row p-6'>
                         <h5 className='py-2 font-bold'>Verifier votre compte</h5>
                         <p className='py-2 text-gray-400 '>verifier votre adresse email pour recevoir les notifications directement dans votre boite mail</p>
                         <div className='flex justify-end gap-2'>
                             <button type="button" className='bg-[#3F87F5] hover:bg-[#1166f8] px-2 py-1 text-white rounded transition-all'>Ok</button>
                             <button type="button" className='px-2 py-1 text-gray-500 transition-all border rounded hover:bg-slate-400 hover:text-white'>Plus tard</button>
                         </div>
                </div>    
            </section> 
            <section className='shadow-md rounded-lg border max-sm:mx-[8px] max-sm:w-full p-6 my-8 md:mx-48 bg-white'>
              <div className='grid w-full grid-flow-row'>
                    <div className='max-sm:w-full' >
                      <div className='flex w-auto'>
                          <img src={myImag} alt="" className='object-cover w-10 h-10 p-1 rounded-full' />
                          <Link to="/users/home" className='w-full px-3 py-2 mx-auto font-semibold text-center text-gray-400 bg-gray-100 hover:bg-gray-300 text-md grow rounded-2xl'>Quoi de neuf ? Morel</Link>
                      </div>
                    </div>
                  </div>
            </section>
            
            
           <Post/>
           
           
      </main>
  
  </>
}

export default Home
