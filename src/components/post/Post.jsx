import React, { useState } from 'react'
import Postpic from '../../images/photo_2024-11-26_10-29-53.jpg'

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
function Post() {
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
      const [drop,setDrop] = useState(false)
  return <>
     {/* Partie reserver au post de l'utilisateur */}
      <section className='flex justify-center shadow-md rounded-lg border max-sm:mx-[8px] max-sm:w-full  my-8 md:mx-48 hover:touch-pinch-zoom'>
            <div className='grow '>
                    <div className='w-full h-full grid-flow-col border bg-zinc-50'>
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
                                    
                                    {drop  &&(
                                        <div className=' p-2 bg-white rounded right-10 top-7 border '>
                                            <div className='p-2'>
                                                <i class="fa-regular fa-bookmark text-[#3F87F5] px-2"></i>
                                                <span>Ajouter un favoris</span>
                                            </div>
                                            <div className='p-2'>
                                                <i class="fa-solid fa-trash text-red-600 px-2"></i>
                                                <span className='text-red-600' >Supprimer</span>
                                            </div>

                                        </div>
                                    )}                          
                                    <div className=''>
                                         <i class="fa-solid fa-caret-down cursor-pointer hover:border hover:p-3 hover:rounded-md hover:shadow-[#3F87F5]" onClick={()=>setDrop(!drop)}></i>
                                    </div>
                              </div>
                              <p className='px-6 py-2 font-semibold text-gray-400'>Test oo</p>
                          </div>
                          {/* <div className='flex justify-center my-4 '>
                              <img src={Postpic} alt="" className='w-[2] object-center h-[50vh] object-contain p-' />
                          </div> */}
                        </div>
                        <div className='flex justify-between gap-2 px-2 py-3 bg-white border-t border-b'>
                                <span className='text-gray-400'>👍{num}</span>
                                <span className='transition-all cursor-pointer hover:underline'>{commentaire} commentaires</span>
                               
                        </div>
                         <div className='flex items-center justify-around w-full p-4 bg-white'>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                    <i>👍</i>
                                    <span onClick={addEmojis} className='max-sm:hidden'>
                                        Reagir
                                    </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                  <i class="fa-regular fa-heart "></i> 
                                    <span onClick={addEmojis} className='max-sm:hidden'> 
                                       J'aime 
                                     </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                    <i class="fa-solid fa-comment"></i>
                                    <span onClick={addComment} className='max-sm:hidden'>
                                        Commenter
                                    </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                    <i class="fa-solid fa-share"></i>
                                    <span onClick={addEmojis} className='max-sm:hidden'>
                                        Partager
                                    </span>
                                </div>
                        </div>
                </div>
            </div>    
     </section>
      <section className='flex justify-center shadow-md rounded-lg border max-sm:mx-[8px] max-sm:w-full  my-8 md:mx-48 hover:touch-pinch-zoom'>
            <div className='grow '>
                    <div className='w-full h-full grid-flow-col border bg-zinc-50'>
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
                                    {drop  &&(
                                        <div className=' p-2 bg-white rounded right-10 top-7 border '>
                                            <div className='p-2'>
                                                <i class="fa-regular fa-bookmark text-[#3F87F5] px-2"></i>
                                                <span>Ajouter un favoris</span>
                                            </div>
                                            <div className='p-2'>
                                                <i class="fa-solid fa-trash text-red-600 px-2"></i>
                                                <span className='text-red-600' >Supprimer</span>
                                            </div>

                                        </div>
                                    )}     
                                    <div>
                                         <i class="fa-solid fa-caret-down cursor-pointer hover:border hover:p-3 hover:rounded-md hover:shadow-[#3F87F5]" onClick={()=>setDrop(!drop)} ></i>
                                    </div>
                              </div>
                              <p className='px-6 py-2 font-semibold text-gray-400'>Test oo</p>
                          </div>
                          {/* <div className='flex justify-center my-4 '>
                              <img src={Postpic} alt="" className='w-[2] object-center h-[50vh] object-contain p-' />
                          </div> */}
                        </div>
                        <div className='flex justify-between gap-2 px-2 py-3 bg-white border-t border-b'>
                                <span className='text-gray-400'>👍{num}</span>
                                <span className='transition-all cursor-pointer hover:underline'>{commentaire} commentaires</span>
                               
                        </div>
                         <div className='flex items-center justify-around w-full p-4 bg-white'>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                    <i>👍</i>
                                    <span onClick={addEmojis} className='max-sm:hidden'>
                                        Reagir
                                    </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                  <i class="fa-regular fa-heart "></i> 
                                    <span onClick={addEmojis} className='max-sm:hidden'> 
                                       J'aime 
                                     </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                    <i class="fa-solid fa-comment"></i>
                                    <span onClick={addComment} className='max-sm:hidden'>
                                        Commenter
                                    </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                    <i class="fa-solid fa-share"></i>
                                    <span onClick={addEmojis} className='max-sm:hidden'>
                                        Partager
                                    </span>
                                </div>
                        </div>
                       
                    </div>
            </div>
     </section>
     <section className='flex justify-center shadow-md rounded-lg border max-sm:mx-[8px] max-sm:w-full  my-8 md:mx-48 antialiased'>
            <div className='grow '>
                    <div className='w-full h-full grid-flow-col border bg-zinc-50'>
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
                          <div className='flex justify-center my-4 '>
                              <img src={Postpic} alt="" className='w-[2] object-center h-[50vh] object-contain p-' />
                          </div>
                        </div>
                        <div className='flex justify-between gap-2 px-2 py-3 bg-white border-t border-b'>
                                <span className='text-gray-400'>👍{num}</span>
                                <span className='transition-all cursor-pointer hover:underline'>{commentaire} commentaires</span>   
                        </div>
                         <div className='flex items-center justify-around w-full p-4 bg-white'>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                    <i>👍</i>
                                    <span onClick={addEmojis} className='max-sm:hidden'>
                                        Reagir
                                    </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                  <i class="fa-regular fa-heart "></i> 
                                    <span onClick={addEmojis} className='max-sm:hidden'> 
                                       J'aime 
                                     </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                    <i class="fa-solid fa-comment"></i>
                                    <span onClick={addComment} className='max-sm:hidden'>
                                        Commenter
                                    </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                    <i class="fa-solid fa-share"></i>
                                    <span onClick={addEmojis} className='max-sm:hidden'>
                                        Partager
                                    </span>
                                </div>
                        </div>
                       
                    </div>
            </div>
     </section>
     <section className='flex justify-center shadow-md rounded-lg border max-sm:mx-[8px] max-sm:w-full  my-8 md:mx-48 hover:touch-pinch-zoom'>
            <div className='grow '>
                    <div className='w-full h-full grid-flow-col border bg-zinc-50'>
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
                          {/* <div className='flex justify-center my-4 '>
                              <img src={Postpic} alt="" className='w-[2] object-center h-[50vh] object-contain p-' />
                          </div> */}
                        </div>
                        <div className='flex justify-between gap-2 px-2 py-3 bg-white border-t border-b'>
                                <span className='text-gray-400'>👍{num}</span>
                                <span className='transition-all cursor-pointer hover:underline'>{commentaire} commentaires</span>
                               
                        </div>
                         <div className='flex items-center justify-around w-full p-4 bg-white'>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                    <i>👍</i>
                                    <span onClick={addEmojis} className='max-sm:hidden'>
                                        Reagir
                                    </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                  <i class="fa-regular fa-heart "></i> 
                                    <span onClick={addEmojis} className='max-sm:hidden'> 
                                       J'aime 
                                     </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                    <i class="fa-solid fa-comment"></i>
                                    <span onClick={addComment} className='max-sm:hidden'>
                                        Commenter
                                    </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                    <i class="fa-solid fa-share"></i>
                                    <span onClick={addEmojis} className='max-sm:hidden'>
                                        Partager
                                    </span>
                                </div>
                        </div>
                       
                    </div>
            </div>
     </section>
     <section className='flex justify-center shadow-md rounded-lg border max-sm:mx-[8px] max-sm:w-full  my-8 md:mx-48 hover:touch-pinch-zoom'>
            <div className='grow '>
                    <div className='w-full h-full grid-flow-col border bg-zinc-50'>
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
                          <div className='flex justify-center my-4 '>
                              <img src={Postpic} alt="" className='w-[2] object-center h-[50vh] object-contain p-' />
                          </div>
                        </div>
                        <div className='flex justify-between gap-2 px-2 py-3 bg-white border-t border-b'>
                                <span className='text-gray-400'>👍{num}</span>
                                <span className='transition-all cursor-pointer hover:underline'>{commentaire} commentaires</span>
                               
                        </div>
                         <div className='flex items-center justify-around w-full p-4 bg-white'>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                    <i>👍</i>
                                    <span onClick={addEmojis} className='max-sm:hidden'>
                                        Reagir
                                    </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                  <i class="fa-regular fa-heart "></i> 
                                    <span onClick={addEmojis} className='max-sm:hidden'> 
                                       J'aime 
                                     </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                    <i class="fa-solid fa-comment"></i>
                                    <span onClick={addComment} className='max-sm:hidden'>
                                        Commenter
                                    </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 text-center cursor-pointer focus:w-44 focus:rounded-md hover:px-6 max-sm:hover:w-auto hover:bg-gray-200'>
                                    <i class="fa-solid fa-share"></i>
                                    <span onClick={addEmojis} className='max-sm:hidden'>
                                        Partager
                                    </span>
                                </div>
                        </div>
                       
                    </div>
            </div>
     </section>
     <section className='flex justify-center shadow-md rounded-lg border max-sm:mx-[8px] max-sm:w-full  my-8 md:mx-48 hover:touch-pinch-zoom'>
            <div className='grow '>
                    <div className='w-full h-full grid-flow-col border bg-zinc-50'>
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
                          <div className='flex justify-center my-4 '>
                              <img src={Postpic} alt="" className='w-[2] object-center h-[50vh] object-contain p-' />
                          </div>
                        </div>
                        <div className='flex justify-between gap-2 px-2 py-3 bg-white border-t border-b'>
                                <span className='text-gray-400'>👍{num}</span>
                                <span className='transition-all cursor-pointer hover:underline'>{commentaire} commentaires</span>
                               
                        </div>
                         <div className='flex items-center justify-around w-full p-4 bg-white'>
                                <div className='flex items-center gap-3 py-2 cursor-pointer hover:rounded-md hover:px-6 tansition-all hover:w-44 hover:bg-gray-200 max-sm:hover:w-auto'>
                                    <i>👍</i>
                                    <span onClick={addEmojis} className='max-sm:hidden'>
                                        Reagir
                                    </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 cursor-pointer hover:rounded-md hover:px-6 tansition-all hover:w-44 hover:bg-gray-200 max-sm:hover:w-auto'>
                                  <i class="fa-regular fa-heart "></i> 
                                    <span onClick={addEmojis} className='max-sm:hidden'> 
                                       J'aime 
                                     </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 cursor-pointer hover:rounded-md hover:px-6 tansition-all hover:w-44 hover:bg-gray-200 max-sm:hover:w-auto'>
                                    <i class="fa-solid fa-comment"></i>
                                    <span onClick={addComment} className='max-sm:hidden'>
                                        Commenter
                                    </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 cursor-pointer hover:rounded-md hover:px-6 tansition-all hover:w-44 hover:bg-gray-200 max-sm:hover:w-auto'>
                                    <i class="fa-solid fa-share"></i>
                                    <span onClick={addEmojis} className='max-sm:hidden'>
                                        Partager
                                    </span>
                                </div>
                        </div>
                       
                    </div>
            </div>
     </section>
     <section className='flex justify-center shadow-md rounded-lg border max-sm:mx-[8px] max-sm:w-full  my-8 md:mx-48 hover:touch-pinch-zoom'>
            <div className='grow '>
                    <div className='w-full h-full grid-flow-col border bg-zinc-50'>
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
                          {/* <div className='flex justify-center my-4 '>
                              <img src={Postpic} alt="" className='w-[2] object-center h-[50vh] object-contain p-' />
                          </div> */}
                        </div>
                        <div className='flex justify-between gap-2 px-2 py-3 bg-white border-t border-b'>
                                <span className='text-gray-400'>👍{num}</span>
                                <span className='transition-all cursor-pointer hover:underline'>{commentaire} commentaires</span>
                               
                        </div>
                         <div className='flex items-center justify-around w-full p-4 bg-white'>
                                <div className='flex items-center gap-3 py-2 cursor-pointer hover:rounded-md hover:px-6 tansition-all hover:w-44 hover:bg-gray-200 max-sm:hover:w-auto'>
                                    <i>👍</i>
                                    <span onClick={addEmojis} className='max-sm:hidden'>
                                        Reagir
                                    </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 cursor-pointer hover:rounded-md hover:px-6 tansition-all hover:w-44 hover:bg-gray-200 max-sm:hover:w-auto'>
                                  <i class="fa-regular fa-heart "></i> 
                                    <span onClick={addEmojis} className='max-sm:hidden'> 
                                       J'aime 
                                     </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 cursor-pointer hover:rounded-md hover:px-6 tansition-all hover:w-44 hover:bg-gray-200 max-sm:hover:w-auto'>
                                    <i class="fa-solid fa-comment"></i>
                                    <span onClick={addComment} className='max-sm:hidden'>
                                        Commenter
                                    </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 cursor-pointer hover:rounded-md hover:px-6 tansition-all hover:w-44 hover:bg-gray-200 max-sm:hover:w-auto'>
                                    <i class="fa-solid fa-share"></i>
                                    <span onClick={addEmojis} className='max-sm:hidden'>
                                        Partager
                                    </span>
                                </div>
                        </div>
                       
                    </div>
            </div>
     </section>
     <section className='flex justify-center shadow-md rounded-lg border max-sm:mx-[8px] max-sm:w-full  my-8 md:mx-48 hover:touch-pinch-zoom'>
            <div className='grow '>
                    <div className='w-full h-full grid-flow-col border bg-zinc-50'>
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
                          <div className='flex justify-center my-4 '>
                              <img src={Postpic} alt="" className='w-[2] object-center h-[50vh] object-contain p-' />
                          </div>
                        </div>
                        <div className='flex justify-between gap-2 px-2 py-3 bg-white border-t border-b'>
                                <span className='text-gray-400'>👍{num}</span>
                                <span className='transition-all cursor-pointer hover:underline'>{commentaire} commentaires</span>
                               
                        </div>
                         <div className='flex items-center justify-around w-full p-4 bg-white'>
                                <div className='flex items-center gap-3 py-2 cursor-pointer hover:rounded-md hover:px-6 tansition-all hover:w-44 hover:bg-gray-200 max-sm:hover:w-auto'>
                                    <i>👍</i>
                                    <span onClick={addEmojis} className='max-sm:hidden'>
                                        Reagir
                                    </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 cursor-pointer hover:rounded-md hover:px-6 tansition-all hover:w-44 hover:bg-gray-200 max-sm:hover:w-auto'>
                                  <i class="fa-regular fa-heart "></i> 
                                    <span onClick={addEmojis} className='max-sm:hidden'> 
                                       J'aime 
                                     </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 cursor-pointer hover:rounded-md hover:px-6 tansition-all hover:w-44 hover:bg-gray-200 max-sm:hover:w-auto'>
                                    <i class="fa-solid fa-comment"></i>
                                    <span onClick={addComment} className='max-sm:hidden'>
                                        Commenter
                                    </span>
                                </div>
                                <div className='flex items-center gap-3 py-2 cursor-pointer hover:rounded-md hover:px-6 tansition-all hover:w-44 hover:bg-gray-200 max-sm:hover:w-auto'>
                                    <i class="fa-solid fa-share"></i>
                                    <span onClick={addEmojis} className='max-sm:hidden'>
                                        Partager
                                    </span>
                                </div>
                        </div>
                       
                    </div>
            </div>
     </section>
  </>
}

export default Post