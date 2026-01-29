import React, { useState } from 'react'
import Button from './Button'
import imgPro from '../../images/photo_2024-11-26_10-29-53.jpg'



function Modal({open, closeModal}) {
    const [opens, setOpen] = useState(false)
  return <>
      <main className={`flex justify-center items-center h-screen w-full ease-in-out delay-150 ${opens ?'bg-zinc-200':'bg-stone-200'}`} closeModal={closeModal} >
      
       {opens &&
        <div className='absolute flex flex-col items-center justify-center px-6 mx-auto bg-white rounded-md py-9 md:w-3/12 shadow-md transition-all'>
               
               <div className='w-5/12 mx-auto mb-3 border-b-4 border-orange-600 py-'>
                   <img src={imgPro} alt="user" />
                   <h5>Morel</h5>
                   <span></span>
               </div>
               <p className='w-5/6 py-3 italic text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo suscipit soluta quia vero libero obcaecati nobis omnis dolores sed natus? Aspernatur enim vel aliquam. Velit consequuntur similique doloremque optio labore?</p>
               <div className="px-4 py-2 mt-4 text-white bg-orange-600 rounded" onClick={()=>setOpen(false)}>
                  <Button text="close modal" />
               </div>
          
       </div>
}
            <div onClick={()=>setOpen(!opens)} open={open} className='text-white bg-orange-400 px-4 py-2 rounded cursor-pointer'>
              <Button text="Open modal" />
            </div>
       </main>
      
          
  </>
}  

export default Modal