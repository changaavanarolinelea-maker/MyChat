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
        
  return <>
        
            <Navbar/>
    
         {/* <main className='flex my-28 flex-col mx-8 max-sm:w-auto md:ml-[16vw] md:w-[82vw]  '>
           <section className='flex  shadow-md rounded-lg border max-sm:mx-[8px] max-sm:w-full'>
                <div className='grid grid-cols-subgrid'>
                     <div className="flex items-center gap-6 p-5 max-sm:h-full max-sm:flex-col">
                        <div className=''>
                            <img src='' alt="profile"  className="object-cover w-40 h-40 border-4 rounded-full "/>
                        </div>
                            <div className='flex flex-col'>
                                <span className='p-2 text-gray-400'> @Morel</span>
                                <span className='p-2 text-green-500'>En ligne</span>
                            </div>
                            <div>
                                <div className=''>
                                <button className='p-2 transition-colors rounded-sm text-[#3f87f5] bg-[#3f87f51A] hover:text-white hover:bg-[#3f87f5] mx-2'>Contact</button>
                                <button className='p-2 transition-shadow text-[#886CFF] bg-[#886CFF1A] hover:text-white hover:bg-[#886CFF] rounded-sm'>Modifier</button>
                            </div>
                            </div>
                            
                      
                        <div className='grid place-content-end'>
                            <ul className=''>
                                <li>
                                    <i class="fa-regular fa-envelope"></i>
                                    <span>Email : {}</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-phone-flip"></i>
                                    <span>Phone :</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-location-crosshairs"></i>
                                    <span>Location :</span>
                                </li>
                                
                            </ul>
                            <div>
                                <a href="">
                                <i class="fa-brands fa-square-facebook"></i>
                                </a>
                                <a href="">
                                <i class="fa-brands fa-twitter"></i>
                                </a>
                                <a href="">
                                <i class="fa-brands fa-behance"></i>
                                </a>
                                <a href="">
                                    <i class="fa-brands fa-dribbble"></i>
                                </a>
                            </div>
                        </div>
                        <div >
                        
                            
                        </div>
                    </div>
                </div>    
            </section> 
        </main> */}
        <main className="my-28 mx-4 md:ml-[16vw] md:w-[82vw]">
            <section className="w-full border rounded-lg shadow-md">
                    <div className="flex max-sm:flex-col">

                    {/* LEFT PART */}
                    <div className="flex flex-col items-center w-full gap-6 p-6 md:flex-row md:w-2/3">
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
                    <div className="flex flex-col justify-between w-full p-6 border-t md:w-1/3 md:border-t-0 md:border-l max-sm:border-t-0 ">

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
                        <div className="flex gap-4 mt-6 text-xl">
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
                    <div className='w-2/3 px-10 py-6 border rounded-lg shadow-lg md:flex-row max-sm:w-full'>
                        <div className='mb-4 space-y-1 border-b-2'>
                            <h4 className='text-xl font-bold'>Bio</h4>
                            <p className='py-3 text-gray-400'>Aucune bio renseignée</p>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='text-xl font-bold'>Spécialité</h4>
                            <p className='py-3 text-gray-400'>Aucune spécialité renseignée</p>
                        </div>
                    </div>
                      {/* RIGHT SITE */}
                    <div className='w-1/3 py-6 border rounded-lg shadow-xl max-sm:w-full'>
                         <h4 className='text-xl font-bold text-center'>Statistiques</h4>
                         <div className='flex items-center justify-around w-full gap-6 p-4'>
                            <div>
                                 <div className='flex items-center justify-center gap-2'>
                                    <span className='text-xl font-bold '>1</span>
                                    <i class="fa-regular fa-face-smile text-[#3f87f5]"></i>
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
            <section className='shadow-xl rounded-lg max-sm:mx-[8px] max-sm:w-full my-8 md:mx-auto w-2/3 border'>
                        <div className='grow '>
                                <div className='w-full h-full grid-flow-col bg-zinc-50'>
                                    <div className='max-sm:w-full ' >
                                      <div className='bg-white p-'>
                                          <div className='flex items-center justify-between gap-5 p-5 '>
                                               <div className='flex items-center gap-5'>
                                                    <div>
                                                        <span className='px-3 py-3 font-semibold text-white bg-purple-600 rounded-full w-45 '>CM</span>
                                                    </div>
                                                    <div>
                                                        <h4 className='font-bold'>Classickid Morel</h4>
                                                        <span className='font-semibold text-gray-400 text-'>{now} a {heure}</span>
                                                    </div>
                                               </div>
                                                
                                                <div>
                                                     <i class="fa-solid fa-caret-down cursor-pointer"></i>
                                                </div>
                                          </div>
                                          <p className='px-6 py-2 font-semibold text-gray-400'>Test oo</p>
                                      </div>
                                      
                                    </div>
                                    <div className='flex justify-between gap-2 px-2 py-3 bg-white border-t border-b'>
                                            <span className='text-gray-400'>👍{num}</span>
                                            <span className='transition-all cursor-pointer hover:underline'>{commentaire} commentaires</span>
                                           
                                    </div>
                                     <div className='flex items-center justify-around w-full p-4 bg-white'>
                                            <div className='flex items-center gap-3 py-2 cursor-pointer hover:rounded-md hover:px-6 tansition-all hover:w-44 hover:bg-gray-200'>
                                                <i>👍</i>
                                                <span onClick={addEmojis} className='max-sm:hidden'>
                                                    Reagir
                                                </span>
                                            </div>
                                            <div className='flex items-center gap-3 py-2 cursor-pointer hover:rounded-md hover:px-6 tansition-all hover:w-44 hover:bg-gray-200'>
                                              <i class="fa-regular fa-heart "></i> 
                                                <span onClick={addEmojis} className='max-sm:hidden'> 
                                                   J'aime 
                                                 </span>
                                            </div>
                                            <div className='flex items-center gap-3 py-2 cursor-pointer hover:rounded-md hover:px-6 tansition-all hover:w-44 hover:bg-gray-200'>
                                                <i class="fa-solid fa-comment"></i>
                                                <span onClick={addComment} className='max-sm:hidden'>
                                                    Commenter
                                                </span>
                                            </div>
                                            <div className='flex items-center gap-3 py-2 cursor-pointer hover:rounded-md hover:px-6 tansition-all hover:w-44 hover:bg-gray-200'>
                                                <i class="fa-solid fa-share"></i>
                                                <span onClick={addEmojis} className='max-sm:hidden'>
                                                    Partager
                                                </span>
                                            </div>
                                    </div>
                                   
                                </div>
                        </div>
                 </section>
     </main>

        
    </>
    
}

export default Profit