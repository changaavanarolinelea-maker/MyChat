import React, { useState } from 'react'
import Navbar from '../users/Navbar'
import ProImg from '../../images/photo_2024-11-26_10-29-53.jpg'

function Profit() {
   
    const date = new Date()
    const now = date.toLocaleDateString("fr-FR",{
           day : 'numeric',
           month: 'short',
           year: '2-digit',
         })
        const time = new Date()
        const heure = time.toLocaleTimeString("fr-FR", {
            hour : '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })
    
        const [emojis, setEmojis] = useState([
            { id:1, HAHA : '😂'},
            { id:2, ANGRY:'😡'},
            { id:3, SAD : '🥺'},
            { id:4, LIKE : '👍'}
    
        ])
        const [num, setNum] = useState(1)
        const addEmojis = ()=>{
            setNum ( num+1)
        }
        const [commentaire, setCommentaire] = useState(0)
        const addComment = ()=>{
            setCommentaire ( commentaire+1)
        }
        
  return <div >
        
            <Navbar/>
    
        <main className="my-28 mx-4 md:ml-[20vw] ">
            <section className="w-full border rounded-lg shadow-md bg-white ">
                    <div className="flex max-sm:flex-col ">

                    {/* LEFT PART */}
                    <div className="flex flex-col items-center w-full gap-6 p-6 md:flex-row md:w-2/3 text-sm ">
                        <img
                        src=""
                        alt="profile"
                        className="object-cover w-40 h-40 border-4 rounded-full"
                        />

                        <div className="flex flex-col items-center md:items-start">
                        <span className="text-gray-400">@Morel</span>
                        <span className="text-green-500">En ligne</span>

                        <div className="flex gap-2 mt-4">
                            <button className="p-2 rounded-sm text-[#3f87f5] bg-[#3f87f51A] hover:text-white hover:bg-[#3f87f5]">
                            Contact
                            </button>
                            <button className="p-2 rounded-sm text-[#886CFF] bg-[#886CFF1A] hover:text-white hover:bg-[#886CFF]">
                            Modifier
                            </button>
                        </div>
                        </div>
                    </div>

                    {/* RIGHT PART */}
                    <div className="flex flex-col justify-between w-full p-6 border-t md:w-1/3 md:border-t-0 md:border-l max-sm:border-t-0 font-medium ">

                        {/* CONTACT INFOS (BOTTOM) */}
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <i className="fa-regular fa-envelope text-[#3f87f5]"></i>
                                <span>Email :</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fa-solid fa-phone-flip text-[#3f87f5]"></i>
                                <span>Phone :</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fa-solid fa-location-crosshairs text-[#3f87f5]"></i>
                                <span>Location :</span>
                            </li>
                        </ul>

                        {/* SOCIAL ICONS */}
                        <div className="flex gap-4 mt-6 text-xl sm:flex-row md:flex-row">
                            <a href="#"><i className="text-gray-500 fa-brands fa-square-facebook hover:text-black"></i></a>
                            <a href="#"><i className="text-gray-500 fa-brands fa-twitter hover:text-black"></i></a>
                            <a href="#"><i className="text-gray-500 fa-brands fa-behance hover:text-black"></i></a>
                            <a href="#"><i className="text-gray-500 fa-brands fa-dribbble hover:text-black"></i></a>
                        </div>
                    </div>

                </div>
            </section>
            <section className='w-full mt-10 rounded-lg '>
                <div className='flex gap-10 max-sm:flex-col'>
                    {/* LEFT SITE */}
                    <div className='w-2/3 px-10 py-6 border rounded-lg shadow-lg md:flex-row max-sm:w-full bg-white'>
                        <div className='mb-4 space-y-1 border-b-2'>
                            <h4 className='text-black font-medium'>Bio</h4>
                            <p className='py-3 text-gray-400'>Aucune bio renseignée</p>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='text-black font-medium'>Spécialité</h4>
                            <p className='py-3 text-gray-400'>Aucune spécialité renseignée</p>
                        </div>
                    </div>
                      {/* RIGHT SITE */}
                    <div className='w-1/3 py-6 border rounded-lg shadow-xl max-sm:w-full font-medium bg-white'>
                         <h4 className='text-black text-center font-bold'>Statistiques</h4>
                         <div className='flex items-center justify-around w-full gap-6 p-4'>
                            <div  className=' font-bold'>
                                 <div className='flex items-center justify-center gap-2'>
                                    <span className='text-black font-bold '>1</span>
                                    <i class="fa-regular fa-face-smile text-[#3f87f5] "></i>
                                 </div>
                                 <p className='mb-5 text-xs text-center text-gray-400'>Nombre d'amis</p>
                                 <div>
                                 <div className='flex items-center justify-center gap-2'>
                                    <span className='text-xl font-bold'>0</span>
                                    <i class="fa-regular fa-star text-orange-400"></i>
                                 </div>
                                   <p className='text-xs text-center text-gray-400'>Mises en favoris</p>
                                </div> 
                              </div>
                              <div>
                                 <div className='flex items-center justify-center gap-2'>
                                    <span className='text-xl font-bold '>1</span>
                                    <i class="fa-regular fa-heart text-red-400"></i>
                                 </div>
                                 <p className='mb-5 text-xs text-center text-gray-400'>Likes</p>
                                 <div>
                                    <div className='flex items-center justify-center gap-2'>
                                        <span className='text-xl font-bold '>0</span>
                                        <i class="fa-solid fa-share text-sky-400"></i>
                                      </div>
                                      <p className='text-xs text-center text-gray-400'>Patages</p>
                                    </div>
                                </div>
                         </div>
                    </div>
                </div>
            </section>
           
            <section className='w-full mt-10 rounded-lg '>
                <div className='flex flex-col items-center'>
                   <p className='text-gray-400 font-semibold '>Vous n'aviez pas encore de publication </p>
                     <button className='mt-4 mb-4 px-4 py-2  text-blue-600 border hover:text-neutral-950 rounded hover:bg-zinc-400 transition-all'>Créer une premiere publication</button>
                </div>
            </section>
           
     </main>

        
    </div>
    
}

export default Profit