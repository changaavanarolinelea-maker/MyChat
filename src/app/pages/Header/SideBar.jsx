 import { useState } from "react";
 import { Menu } from "lucide-react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Bouton menu visible seulement sur petits écrans */}
      <button
        className="lg:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* Overlay flouté quand sidebar ouverte */}
      {isOpen && (
        <div
          className="fixed top-20 left-0 right-0 bottom-0 bg-black  bg-opacity-30 backdrop-blur-sm  lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white shadow-lg z-50 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0 w-1/4" : "-translate-x-full w-1/4"} 
        lg:translate-x-0 lg:w-64`}
      >
        {/* Image en haut */}
        <div className="p-4 border-b">
          <img
            src="https://via.placeholder.com/150"
            alt="Logo"
            className="w-20 h-20 rounded-full mx-auto"
          />
        </div>

        {/* Profil */}
        <div className="p-4">
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/50"
              alt="Profil"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">Développeur</p>
            </div>
          </div>
        </div>

        {/* Menu exemple */}
        <nav className="mt-6 space-y-2 px-4">
          <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
            Dashboard
          </a>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">
            Paramètres
          </a>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;