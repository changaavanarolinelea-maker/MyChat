import { Link } from 'react-router-dom'
import Navbar from '../users/Navbar'

function Suggestion() {
  return <>
        <Navbar/>
        <main className='my-28 mx-5 max-sm:mx-0 md:ml-[18vw]  p-5 max-sm:w-full'>
            <div className='flex items-center gap-6'>
                  <h1 className='font-semibold text-xl '>User</h1>
                <div className='flex items-center gap-4 ' >
                   <i className="fa-solid fa-user text-[#53535f]"></i> 
                   <i class="fa-solid fa-caret-right text-gray-400"></i>
                    <p className='text-gray-400 cursor-pointer hover:text-blue-600'>
                         Friend
                    </p>   
                </div>
            </div>
            <div  className='flex flex-col w-full '>
                <h1 className=' p-8 text-xl max-sm:text-xl font-semibold md:mx-44 w-auto'>Gestion  des amis</h1>
                <ul className='flex md:mx-44 gap-5 p-6 '>
                     <li className=' hover:text-blue-600 font-bold hover:border-b-blue-600 hover:border-b-4'>
                        <Link  to="/amis/amis" className='max-sm:flex items-center flex gap-3 hover:text-blue-600 font-bold'>
                           <i className="fa-solid fa-user-plus text-[#53535f] hover:text-blue-500"></i>
                           Demandes
                        </Link>
                     </li>
                     <li className=' text-blue-600 font-bold border-b-blue-600 border-b-4'>
                        <Link  to='/amis/suggestion' className='max-sm:flex flex gap-3 items-center '>
                           <i className="fa-solid fa-users  text-blue-600 font-bold"></i>
                           Suggestions
                        </Link>
                     </li>
                </ul>
            </div>
            <div className='border border-blue-100  md:mx-40 p-10  max-sm:mx-0 '>
                <div className='grid grid-cos-1 max-sm:grid-cols-1  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    <CardAmis nom="lea" lien="https://i.pravatar.cc/150?img=9"/>
                   <CardAmis nom="Paul" lien="https://i.pravatar.cc/150?img=10"/>
                   <CardAmis nom="Marie" lien="https://i.pravatar.cc/150?img=11"/>
                   <CardAmis nom="Sophie" lien="https://i.pravatar.cc/150?img=12"/> 
                   <CardAmis nom="Lucas" lien="https://i.pravatar.cc/150?img=13"/>
                   <CardAmis nom="Emma" lien="https://i.pravatar.cc/150?img=14"/>
                   <CardAmis nom="Noah" lien="https://i.pravatar.cc/150?img=15"/>
                   <CardAmis nom="Olivia" lien="https://i.pravatar.cc/150?img=16"/>
                  <CardAmis nom="Liam" lien="https://i.pravatar.cc/150?img=17"/>
                  <CardAmis nom="Ava" lien="https://i.pravatar.cc/150?img=18"/>
                  <CardAmis nom="Ethan" lien="https://i.pravatar.cc/150?img=19"/>
                  <CardAmis nom="Isabella" lien="https://i.pravatar.cc/150?img=20"/>
                  
                </div>
            </div>
            

        </main>
  
  </>
  
}

export default Suggestion


 function CardAmis({nom,lien}){
      return(
         <div className='grid border bg-white rounded-md shadow-md p-8 place-content-center overflow-hidden '>
                        <img src={lien} alt="" className='w-16 h-16 rounded-full border-2 border-gray-400 mx-auto' />
                        <span className='text-center my-4 font-semibold '>{nom}</span>
                        <button className='rounded-md px-10 py-2  bg-blue-600 text-white flex gap-3 items-center my-4 hover:bg-blue-700 transition-all'>
                            <i className="fa-solid fa-user"></i>
                             Ajouter
                        </button>
                    </div>
      )
}
