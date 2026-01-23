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
    const [commentaire, setCommentaire] = useState('')
    const addComment = ()=>{
        setCommentaire ( commentaire+1)
    }
  return (
    // Partie reserver au post de l'utilisateur
     <section className='flex justify-center shadow-md rounded-lg border max-sm:mx-[8px] max-sm:w-full  my-8 md:mx-48'>
            <div className='grow '>
                    <div className='grid-flow-col w-full h-full bg-zinc-50 border'>
                        <div className='max-sm:w-full ' >
                          <div className='bg-white p-'>
                              <div className='p-5 flex items-center justify-between gap-5 '>
                                   <div className='flex items-center gap-5'>
                                        <div>
                                            <span className='bg-purple-600 px-3 py-3 text-white font-semibold rounded-full w-45 '>Cl</span>
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
                          <div className='flex my-4 justify-center '>
                              <img src={Postpic} alt="" className='w-[2] object-center h-[50vh] object-contain p-' />
                          </div>
                        </div>
                        <div className='flex justify-between px-2 py-3 bg-white border-t border-b'>
                                <span className='text-gray-400'>👍{num}</span>
                                <a href="">{commentaire}commentaires</a>
                        </div>
                         <div className='flex justify-around items-center p-4'>
                                <div>
                                    <span onClick={addEmojis}>👍Reagir</span>
                                </div>
                                <div className=' cursor-pointer bg-slate-500 '>
                                    <span onClick={addEmojis}> 
                                       <i class="fa-regular fa-heart "></i> 
                                       J'aime 
                                     </span>
                                </div>
                                <div>
                                    <span onClick={setCommentaire}>
                                        <i class="fa-solid fa-comment"></i>
                                        Commenter
                                    </span>
                                </div>
                                <div>
                                    <span onClick={addEmojis}>
                                        <i class="fa-solid fa-share"></i>
                                        Partager
                                    </span>
                                </div>
                        </div>
                       
                    </div>
            </div>
     </section>
  )
}

export default Post