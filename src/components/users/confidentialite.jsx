import { Ellipsis } from 'lucide-react';
import Navbar from './Navbar';''



export default function Confidentialite() {
  

  return (
    <div>

      <div className="flex flex-col h-screen w-full bg-gray-50 "> {/* Fond légèrement gris pour faire ressortir le blanc */}
       <Navbar/>
     
<main className="flex-1 pt-20 lg:ml-64 p-6 transition-all duration-300 overflow-hidden">
        
        {/* Le conteneur de ton composant avec des bords arrondis et une ombre */}
        <div className="h-full w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mx-4 ">
          <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-2xl mx-auto">
        
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Confidentialite</h1>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          
          {/* Ligne 1 */}
         <ItemSetting p1="presence en ligne "/>

         <ItemSetting p1="permission photo de profil"/>

          <ItemSetting p1="infos"/>

           <ItemSetting p1="contacts bloques"/>

            <ItemSetting p1="delai avant disparition"/>
            <ItemSetting p1="parametre avances"/>          

        </div>
      </div>
    </div>
        </div>

      </main>
      </div>

    
  </div>
  )
}


function ItemSetting({p1}) {
 return( <button className="w-full flex items-center justify-between p-5 border-b border-slate-100 hover:bg-slate-50 transition-colors">
            <div className="text-left">
              <h3 className="font-semibold text-slate-800 mb-1">{p1}</h3>
             
            </div>
            <Ellipsis className="w-5 h-5 text-slate-400 flex-shrink-0" />
          </button>
 )
}
