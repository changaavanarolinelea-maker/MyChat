import { Ellipsis } from 'lucide-react'
import Navbar from './Navbar'
import { useState, useEffect, useRef } from 'react';

 function SmartPopover() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null); // On crée l'étiquette

  useEffect(() => {
    // Fonction qui décide si on doit fermer
    function handleClickOutside(event) {
      // Si le bloc existe ET que le clic n'est PAS dedans
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // On dit au navigateur d'écouter les clics
    document.addEventListener("mousedown", handleClickOutside);
    
    // On nettoie quand on quitte la page (très important !)
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative inline-block">
      <button onClick={() => setIsOpen(!isOpen)}>Clique-moi</button>

      {isOpen && (
        <div 
          ref={popoverRef} // On colle l'étiquette ici
          className="absolute z-10 p-4 bg-white shadow-lg border"
        >
          Je suis intelligent, je sais quand tu cliques ailleurs !
        </div>
      )}
    </div>
  );
}




export default function Confidentialite() {
  

  return (
    <div>

      <div className="flex flex-col h-screen w-full bg-gray-50 "> {/* Fond légèrement gris pour faire ressortir le blanc */}
       <Navbar/>
     

      </div>

    
  </div>
  )
}


function ItemSettingProfil({p1}) {
 return( <button className="w-full flex items-center justify-between p-5 border-b border-slate-100 hover:bg-slate-50 transition-colors">
            <div className="text-left">
              <h3 className="font-semibold text-slate-800 mb-1">{p1}</h3>
             
            </div>
            <Ellipsis className="w-5 h-5 text-slate-400 flex-shrink-0" />
          </button>
 )
}
