
import React from 'react'

function Footer() {
  return (
    <footer className='absolute bottom-0 items-center w-screen py-3 border-t'>
        <div className='container flex justify-around max-sm:flex-col max-sm:text-center'>
            <div>
                <span className='text-xs font-semibold text-center text-gray-300 xl:mx-56'>
                    © 2026 myChat
                </span>
            </div>
            <div className='flex justify-center gap-4 '>
                <a href="#" className='text-sm font-light text-blue-500 decoration-0'>Legal</a>
                <a href="#"  className='text-sm font-light text-blue-500 decoration-0'>Privacy</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer