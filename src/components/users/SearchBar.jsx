import React from 'react'

function SearchBar() {
  return (
    <div className=''>
        <form action="" className='px-1 py-2 transition-all border border-gray-200 rounded-3xl  hover:border-[#3F87F5]'>
             <i class="fa-solid fa-magnifying-glass px-2 text-gray-400"></i>        
             <input type="search" name="" id="" placeholder='Rechercher...' className='px-2 bg-transparent border-0 outline-none'/>
        </form>
       
    </div>
  )
}

export default SearchBar