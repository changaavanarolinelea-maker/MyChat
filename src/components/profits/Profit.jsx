import  { useState } from 'react'
import Navbar from '../users/Navbar'


function Profit() {
   
    const [isModalOpen, setIsModalOpen] = useState(false)
    
      
        
  return <div >
        
            <Navbar/>
    
        <main className="my-28 mx-4 md:ml-[20vw] ">
            <section className="w-full border rounded-lg shadow-md bg-white ">
                    <div className="flex max-sm:flex-col ">

                    {/* LEFT PART */}
                    <div className="flex flex-col items-center w-full gap-6 p-6 md:flex-row md:w-2/3 text-sm ">
                        <img
                        src="https://i.pravatar.cc/150?img=67"
                        alt="profile"
                        className="object-cover w-40 h-40 border-4 rounded-full"
                        />

                        <div className="flex flex-col items-center md:items-start">
                        <span className="text-gray-400">@Morel</span>
                        <span className="text-green-500">En ligne</span>

                        <div className="flex gap-2 mt-4">
                            <button className="p-2 rounded-sm text-[#3f87f5] bg-[#3f87f51A] hover:text-white hover:bg-[#3f87f5]">
                            Contact
                            </button>
                            <button className="p-2 rounded-sm text-[#886CFF] bg-[#886CFF1A] hover:text-white hover:bg-[#886CFF]" onClick={() => setIsModalOpen(true)}>
                            Modifier
                            </button>
                             <ProfileEditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
                        </div>
                        </div>
                    </div>

                    {/* RIGHT PART */}
                    <div className="flex flex-col justify-between w-full p-6 border-t md:w-1/3 md:border-t-0 md:border-l max-sm:border-t-0 font-medium ">

                        {/* CONTACT INFOS (BOTTOM) */}
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <i className="fa-regular fa-envelope text-[#3f87f5]"></i>
                                <span>Email :</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fa-solid fa-phone-flip text-[#3f87f5]"></i>
                                <span>Phone :</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fa-solid fa-location-crosshairs text-[#3f87f5]"></i>
                                <span>Location :</span>
                            </li>
                        </ul>

                        {/* SOCIAL ICONS */}
                        <div className="flex gap-4 mt-6 text-xl sm:flex-row md:flex-row">
                            <a href="#"><i className="text-gray-500 fa-brands fa-square-facebook hover:text-black"></i></a>
                            <a href="#"><i className="text-gray-500 fa-brands fa-twitter hover:text-black"></i></a>
                            <a href="#"><i className="text-gray-500 fa-brands fa-behance hover:text-black"></i></a>
                            <a href="#"><i className="text-gray-500 fa-brands fa-dribbble hover:text-black"></i></a>
                        </div>
                    </div>

                </div>
            </section>
            <section className='w-full mt-10 rounded-lg '>
                <div className='flex gap-10 max-sm:flex-col'>
                    {/* LEFT SITE */}
                    <div className='w-2/3 px-10 py-6 border rounded-lg shadow-lg md:flex-row max-sm:w-full bg-white'>
                        <div className='mb-4 space-y-1 border-b-2'>
                            <h4 className='text-black font-medium'>Bio</h4>
                            <p className='py-3 text-gray-400'>Aucune bio renseignée</p>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='text-black font-medium'>Spécialité</h4>
                            <p className='py-3 text-gray-400'>Aucune spécialité renseignée</p>
                        </div>
                    </div>
                      {/* RIGHT SITE */}
                    <div className='w-1/3 py-6 border rounded-lg shadow-xl max-sm:w-full font-medium bg-white'>
                         <h4 className='text-black text-center font-bold'>Statistiques</h4>
                         <div className='flex items-center justify-around w-full gap-6 p-4'>
                            <div  className=' font-bold'>
                                 <div className='flex items-center justify-center gap-2'>
                                    <span className='text-black font-bold '>1</span>
                                    <i class="fa-regular fa-face-smile text-[#3f87f5] "></i>
                                 </div>
                                 <p className='mb-5 text-xs text-center text-gray-400'>Nombre d'amis</p>
                                 <div>
                                 <div className='flex items-center justify-center gap-2'>
                                    <span className='text-xl font-bold'>0</span>
                                    <i class="fa-regular fa-star text-orange-400"></i>
                                 </div>
                                   <p className='text-xs text-center text-gray-400'>Mises en favoris</p>
                                </div> 
                              </div>
                              <div>
                                 <div className='flex items-center justify-center gap-2'>
                                    <span className='text-xl font-bold '>1</span>
                                    <i class="fa-regular fa-heart text-red-400"></i>
                                 </div>
                                 <p className='mb-5 text-xs text-center text-gray-400'>Likes</p>
                                 <div>
                                    <div className='flex items-center justify-center gap-2'>
                                        <span className='text-xl font-bold '>0</span>
                                        <i class="fa-solid fa-share text-sky-400"></i>
                                      </div>
                                      <p className='text-xs text-center text-gray-400'>Patages</p>
                                    </div>
                                </div>
                         </div>
                    </div>
                </div>
            </section>
           
            <section className='w-full mt-10 rounded-lg '>
                <div className='flex flex-col items-center'>
                   <p className='text-gray-400 font-semibold '>Vous n'aviez pas encore de publication </p>
                     <button className='mt-4 mb-4 px-4 py-2  text-blue-600 border hover:text-neutral-950 rounded hover:bg-zinc-400 transition-all'>Créer une premiere publication</button>
                </div>
            </section>
           
     </main>

        
    </div>
    
}

export default Profit




const ProfileEditModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-6xl mx-4 rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="border-b border-gray-300 px-6 py-4">
          <h2 className="text-2xl font-semibold text-gray-800">Modifier le profil</h2>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {/* Ligne 1: Nom complet, Nom d'utilisateur, Profession */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Entrez votre nom complet"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom d'utilisateur
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Entrez votre nom d'utilisateur"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profession
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Entrez votre profession"
              />
            </div>
          </div>

          {/* Ligne 2: Email, Téléphone, Localisation */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Entrez votre email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Entrez votre téléphone"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Localisation
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Entrez votre localisation"
              />
            </div>
          </div>

          {/* Ligne 3: Liens sociaux, Spécialité */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Liens sociaux
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Entrez vos liens sociaux"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Spécialité
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Entrez votre spécialité"
              />
            </div>
          </div>

          {/* Ligne 4: Bio (pleine largeur) */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Parlez-nous de vous..."
            />
          </div>
        </div>

        {/* Footer avec boutons */}
        <div className="border-t border-gray-300 px-6 py-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Annuler
          </button>
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
};

