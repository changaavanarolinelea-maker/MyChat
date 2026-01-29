
import { Bell, MessageSquare, User, Plus } from "lucide-react";
import { useState } from "react";

const NotificationDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Icône cliquable */}
      <div
        className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-md shadow cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <Bell className="w-5 h-5 text-gray-700" />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4 z-50">
          {/* En-tête */}
          <div className="flex justify-between items-center border-b pb-2 mb-3">
            <div className="flex items-center space-x-2">
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="font-semibold text-gray-800">Notifications</span>
            </div>
            <button className="px-2 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200">
              Voir tout
            </button>
          </div>

          {/* Notification 1 */}
          <div className="flex items-start space-x-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500 bg-blue-100">
              <MessageSquare className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-black font-medium">Vous avez un nouveau message</p>
              <p className="text-xs text-gray-500 italic">il y a 8 min</p>
            </div>
          </div>

          {/* Notification 2 */}
          <div className="flex items-start space-x-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-green-600 bg-green-100">
              <User className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-black font-medium">Une nouvelle demande d’ami</p>
              <p className="text-xs text-gray-500 italic">il y a 2 heures</p>
            </div>
          </div>

          {/* Notification 3 */}
          <div className="flex items-start space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-yellow-500 bg-yellow-100">
              <Plus className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-black font-medium">Trois nouvelles réactions</p>
              <p className="text-xs text-gray-500 italic">il y a 5 heures</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
