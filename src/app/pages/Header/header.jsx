
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import NotificationDropdown from "./NotificationDropdown";
import MpcLogo from '../../../assets/images/MpcLogo.jpeg';

const Header = () => {
    
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between bg-white shadow-md px-4 z-60">
      {/* Sidebar à gauche */}
      
      
      <div className="flex-shrink-0">
        <SideBar />
      </div>

      {/* Barre de recherche au centre */}
      <div className="flex-grow flex justify-start px-4">
        <img src={MpcLogo} alt="MPC Logo" className="h-10 w-auto mr-4" />
        <SearchBar />
      </div>

      {/* Notification à droite */}
      <div className="flex-shrink-0">
        <NotificationDropdown />
      </div>
      
    </header>
  );
};

export default Header;
