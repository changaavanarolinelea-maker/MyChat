import React from 'react'

function SearchBar() {
  return (
    <div className=''>
        <form action="" className='border py-1 rounded-full hover:border-[#1166f8] max-sm:py-0'>
             <i className="fa-solid fa-magnifying-glass px-2 text-gray-400"></i>        
             <input type="search" name="" id="" placeholder='Rechercher...' className='px-2 bg-transparent border-0 outline-none max:sm:w-36'/>
        </form>
       
    </div>
  )
}

export default SearchBar