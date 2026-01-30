import React from 'react'

function SearchBar() {
  return (
    <div className=''>
        <form action="" className='border py-1 rounded-full hover:border-[#1166f8] max-sm:py-0 max-sm:px-2 flex items-center max-sm:w-44'>
             <i class="fa-solid fa-magnifying-glass px-2 text-gray-400 max-sm:p-0"></i>        
             <input type="search" name="" id="" placeholder='Rechercher...' className='px-2 bg-transparent border-0 outline-none max:sm:w-36'/>
        </form>
       
    </div>
  )
}

export default SearchBar