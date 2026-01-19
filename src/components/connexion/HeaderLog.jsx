
import React from 'react'
import logo from '../../images/logo.jpg'


function HeaderLog() {
  return (
    <div className='absolute top-0 w-screen overflow-x-hidden border-b '>
        <div className='w-full py-2 md:mx-96 max-sm:mx-10 max-sm:w-10'>            
            <img src={logo} alt="logo-" srcset="" className='w-16' />
        </div>
    </div>
  )
}

export default HeaderLog