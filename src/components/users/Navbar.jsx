import React, { useState ,useRef,useEffect} from 'react'
import SearchBar from './SearchBar'
import Logo from '../../images/logo.jpg'
import ProImg from '../../images/photo_2024-11-26_10-29-53.jpg'
import Sidebar from './Sidebar'
import Button from './Button'


function Navbar() {
    const [close, setClose]=useState(true)
    const [open, setOpen] = useState(false)
    const [notice, setNotice] = useState(false)
    const notificeRef = useRef(null)


    useEffect(() => {

        const handleClickOutside = (event) => {
             if (notificeRef.current && !notificeRef.current.contains(event.target)) {
        setNotice(false) // Fermer
      }
        }
       if (notice) {
      document.addEventListener('mousedown', handleClickOutside);
    }

     return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [notice]); // Se déclenche quand isOpen change

        
    
    
  return <div ref={notificeRef} className='relative'>
        <div className='fixed top-0 z-50 bg-white '>
           <img src={Logo} alt="" className='object-contain h-16 border w-72'/>
        </div>
        <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b shadow md:left-72" >
            <nav className="flex items-center justify-between h-full px-4">

                {/* Burger (mobile only) */}
                <i className="text-2xl text-gray-500 cursor-pointer fa-solid fa-bars md:hidden" onClick={()=>setClose(!close)}/>

                {/* Search */}
                <div className="">
                    <SearchBar />
                </div>

                {/* Right icons */}
                <div className="flex items-center gap-6" >
                    <div onClick={()=>setNotice(!notice)}>
                        <i className="text-xl text-gray-400 cursor-pointer fa-regular fa-bell hover:text-blue-500"/>
                        <span className='absolute w-5 ml-20 text-center text-white bg-red-500 rounded-full cursor-pointer top-1 right-16'>3</span>
                    </div>
                    <img src={ProImg} alt="profile"  className="object-cover w-10 h-10 rounded-full" onClick={()=>setOpen(true)}/>
                  
                </div>
            </nav>
             {open &&
                 <div className='w-2/12 bg-white rounded shadow-md absolute right-9 px-5 border top-14 py-3' >
                    <div>
                        <div className='flex items-center gap-5 border-b-gray-200 border-b pb-3 '>
                             <img src={ProImg} alt="profile"  className="object-cover w-10 h-10 rounded-full" />
                             <div>
                                <h6>Morel</h6>
                                <span className='text-gray-400'>Developpeur</span>
                             </div>
                        </div>
                        <div className='flex flex-col items-center gap-5 border-b-gray-200 border-b px-3 py-6 '>
                            <div  className='flex items-center justify-between w-full ' >
                                <div className='flex items-center gap-7'>
                                <i class="fa-regular fa-user text-gray-400"></i>
                                <span className='font-normal'>Mon profil</span> 
                                </div>
                                <i class="fa-solid fa-caret-right text-gray-400"></i>
                            </div>
                            <div  className='flex items-center justify-between w-full' >
                                <div className='flex items-center gap-7'>
                                <i class="fa-regular fa-question text-gray-400"></i>
                                <span>Aide</span> 
                                </div>
                                <i class="fa-solid fa-caret-right text-gray-400"></i>
                            </div>
                        </div>
                        </div>
                         <div  className='flex items-center justify-between w-full px-3 py-4' >
                                <div className='flex items-center gap-7'>
                                <i class="fa-solid fa-power-off text-gray-400"></i>
                                <span>Deconnexion</span> 
                                </div>
                                <i class="fa-solid fa-arrow-right-from-bracket text-gray-400"></i>
                            </div>
                    </div>
           }
             {notice &&
                 <div className='w-1/5 bg-white rounded shadow-md absolute right-9 px-5 border top-14 py-3' >
                    <div>
                        <div className='flex items-center gap-5 border-b-gray-200 border-b pb-3 justify-between'>
                             <div className='flex items-center gap-3'>
                               <i className="fa-regular fa-bell"></i>
                                <h6>Notifications</h6>
                             </div>
                             <div className=' cursor-pointer border px-2 py-1 text-gray-400 hover:bg-zinc-200'>
                                 <Button  text='voir tout'/>
                             </div>
                        </div>
                        <div className='flex flex-col items-center gap-5  px-3 '>
                            <div  className='border-b-gray-200 border-b w-full hover:bg-slate-200 hover:h-auto cursor-pointer' >
                                <div className='flex items-center gap-7'>
                                    <div className='w-10 h-10 rounded-full my-1 bg-blue-100'>
                                          <i class="fa-regular fa-envelope  px-3 py-3 text-blue-300"></i>
                                    </div>
                                <p className='font-normal pb-3'>Vous avez un nouveau message</p> 
                                </div>
                                <p className='text-sm text-gray-400 px-16 pb-2'>il y a 8 minn</p>
                            </div>
                            <div  className=' w-full border-b-gray-200 border-b hover:bg-slate-200 hover:h-auto cursor-pointer' >
                                <div className='flex items-center gap-7'>
                                    <div className='w-10 h-10 rounded-full  bg-green-100'>
                                          <i class="fa-regular fa-user  px-3 py-3 text-green-300"></i>
                                    </div>
                                <p className='font-normal pb-3'> Nouveau demande d'ami</p> 
                                </div>
                                <p className='text-sm text-gray-400 px-16 pb-2  '>il y a 2 heures</p>
                            </div>
                            <div  className=' w-full hover:bg-slate-200 hover:h-auto cursor-pointer' >
                                <div className='flex items-center gap-7'>
                                    <div className='w-10 h-10 rounded-full  bg-yellow-100'>
                                        <i class="fa-solid fa-check px-3 py-3 text-yellow-300"></i>
                                    </div>
                                  <p className='font-normal pb-3'>3 nouvelles reactions</p> 
                                </div>
                                <p className='text-sm text-gray-400 px-16  '>il y a 5 heures</p>
                            </div>
                            
                        </div>
                        </div>
                     
                    </div>
           }
            
        </header>
      
        <main onClick={()=>setOpen(false)}>
            {close &&
            <Sidebar/>
            }
        </main>
  </div>
}

export default Navbar