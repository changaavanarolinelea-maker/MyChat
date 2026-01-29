import { Search } from "lucide-react"


export default function SearchBar(){


    return(
        
       <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 w-64 bg-white shadow-sm">
         <Search className="w-5 h-5 text-gray-500 mr-2" /> 
         <input type="text" placeholder="Rechercher..." className="flex-1 outline-none text-xl text-gray-700 placeholder-gray-400" />
        </div>
    )
}