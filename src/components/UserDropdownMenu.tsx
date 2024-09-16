import { FiMoreVertical, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function UserDropdownMenu({ onProfile, onSettings, onLogout }) {
  const handleProfile = onProfile || (() => console.log("Mon Profil"));
  const handleSettings = onSettings || (() => console.log("Paramètres"));
  const handleLogout = onLogout || (() => console.log("Déconnexion"));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="focus:outline-none">
          <FiMoreVertical className="text-gray-400" size={20} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="bg-gray-800 text-white rounded-md p-1"
      >
        <DropdownMenuItem
          onSelect={handleProfile}
          className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
        >
          <FiUser className="mr-2" />
          Mon Profil
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={handleSettings}
          className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
        >
          <FiSettings className="mr-2" />
          Paramètres
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={handleLogout}
          className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
        >
          <FiLogOut className="mr-2" />
          Déconnexion
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
