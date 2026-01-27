import React, { useState } from 'react'



function Modal( {open, onClose, children} ) {
    const [opens, setOpen] = useState(false)
  return <>
       
        {/* BackDrop */}
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors
             ${opens ? 'visible bg-black/20' : 'invisible'}`}>
          {children}  
        </div>
        <main className='flex justify-center items-center h-screen '>
            <button className='rounded-md text-white bg-red-600 p-2 hover:bg-red-700 ' onClick={()=>setOpen(true)}>
                Open Modal
                </button>
        <div open={opens} onClose={()=>setOpen(false)}>
            <div className='size-56 mx-auto text-red-600'>
                vvv
            </div>
        </div>
        </main>
  </>
}

export default Modal