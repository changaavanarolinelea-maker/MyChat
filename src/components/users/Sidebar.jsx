import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <aside className="fixed h-full bg-white border-r shadow-md top-10 w-72 py-36 max-lg:hidden">
      <ul className="flex flex-col">

        <li className="p-2 active">
          <Link to="/users/home" className="flex items-center gap-3 px-4">
            <i className="fa-solid fa-house text-[#53535f]"></i>
            <span className="text-[#53535f] hover:text-black">Accueil</span>
          </Link>
        </li>

        <li className="p-2">
          <Link to="/profits/profit" className="flex items-center gap-3 px-4">
            <i className="fa-regular fa-user text-[#53535f]"></i>
            <span className="text-[#53535f] hover:text-black">Profil</span>
          </Link>
        </li>

        <li className="p-2">
          <Link to="/users/message" className="flex items-center gap-3 px-4">
            <i className="fa-regular fa-comment text-[#53535f]"></i>
            <span className="text-[#53535f] hover:text-black">Messages</span>
          </Link>
        </li>

        <li className="p-2">
          <Link to="#" className="flex items-center gap-3 px-4">
            <i className="fa-regular fa-star text-[#53535f]"></i>
            <span className="text-[#53535f] hover:text-black">Favoris</span>
          </Link>
        </li>

        <li className="p-2">
          <Link to="#" className="flex items-center gap-3 px-4">
            <i className="fa-regular fa-bell text-[#53535f]"></i>
            <span className="text-[#53535f] hover:text-black">Notifications</span>
            <span className="w-6 ml-auto text-sm text-center text-white bg-red-500 rounded-md">
              3
            </span>
          </Link>
        </li>

        <li className="p-2">
          <Link to="#" className="flex items-center gap-3 px-4">
            <i className="fa-solid fa-users text-[#53535f]"></i>
            <span className="text-[#53535f] hover:text-black">Amis</span>
          </Link>
        </li>

        {/* PARAMÈTRES + DROPDOWN */}
        <li className="relative p-2">
          <div className="flex items-center gap-3 px-4 cursor-pointer"onClick={() => setDropDown(!dropDown)} >
            <i className="fa-solid fa-gear text-[#53535f]"></i>
            <span className="text-[#53535f] hover:text-black">Paramètres</span>
            <i className="ml-auto fa-solid fa-caret-down"></i>
          </div>

          {dropDown && (
            <ul className="absolute bg-white border rounded-md shadow-lg left-4 top-10 w-60">
              <li>
                <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >
                  Compte
                </Link>
              </li>
              <li>
                <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >
                  Confidentialité
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <div className="p-4 mx-4 my-6 shadow-lg">
        <p className="text-sm text-center text-[#53535f]">
          Aucune invitation en attente
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
