import Image from "next/image";
import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import Logo from "../../public/logo.png";
import Profil from "../../public/profil.png";
import {
  FiUsers,
  FiCalendar,
  FiBell,
  FiFileText,
  FiBriefcase,
} from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { ComboboxComponent } from "./Combobox";
import UserDropdownMenu from "./UserDropdownMenu";
import { FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState("Mon Hub");

  const handleProfile = () => {};

  const handleSettings = () => {};

  const handleLogout = () => {};

  const menuItems = [
    { name: "Mon Hub", icon: <FaRegCircle />, href: "#" },
    { name: "Mon équipe", icon: <FiUsers />, href: "#" },
    { name: "Agenda", icon: <FiCalendar />, href: "#" },
    { name: "Notifications", icon: <FiBell />, href: "#" },
    { name: "Ressources", icon: <FiFileText />, href: "#" },
  ];

  const itemHeight = 40;
  const itemSpacing = 8;

  return (
    <div className="flex flex-col h-screen p-4 bg-[#28292E] text-white w-64">
      {/* Logo Section with Arrow */}
      <div className="flex items-center justify-between mb-4 ">
        <div className="flex items-center">
          <Image width={100} height={100} src={Logo} alt="logo Uptoo" />
        </div>

        <div className="flex justify-center items-center bg-gray-700 rounded-full p-2 cursor-pointer">
          <FiLogOut className="transform -scale-x-100" />
        </div>
      </div>

      {/* User Info with Three Dots */}
      <div className="flex items-center space-x-3 mb-3">
        <Image
          src={Profil}
          alt="Avatar"
          width={45}
          height={45}
          className="rounded-full"
        />
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="font-semibold">Rémy Dubois</p>
          </div>
          <UserDropdownMenu
            onProfile={handleProfile}
            onSettings={handleSettings}
            onLogout={handleLogout}
          />
        </div>
      </div>

      {/* Workspace Name */}
      <div className=" rounded-md mb-6 w-full">
        <ComboboxComponent />
      </div>

      {/* Mon Espace Section */}
      <div className="mb-6">
        <p className="text-[#aeb9cf] text-xs mb-2 font-bold">MON ESPACE</p>
        <div className="relative">
          {/* Fond mobile */}
          <span
            className="absolute left-0 w-full bg-blue-600 rounded-md transition-all duration-300"
            style={{
              height: `${itemHeight}px`,
              top: `${
                menuItems.findIndex((item) => item.name === activeLink) *
                (itemHeight + itemSpacing)
              }px`,
            }}
          ></span>

          <ul className="relative space-y-2">
            {menuItems.map((item) => (
              <li key={item.name} className="relative">
                <a
                  href={item.href}
                  onClick={() => setActiveLink(item.name)}
                  className={`flex items-center space-x-3 p-2 rounded-md relative z-10 ${
                    activeLink === item.name
                      ? "text-white"
                      : "text-gray-400 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mes Produits Section */}
      <div className="mb-6">
        <p className="text-[#aeb9cf] text-xs mb-2 font-bold">MES PRODUITS</p>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md"
            >
              <FiBriefcase />
              <span>Recrutements</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md"
            >
              <FiBriefcase />
              <span>Tous nos produits</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Theme Toggle Section */}
      <div className="mb-4 ">
        <div className="flex space-x-2">
          <ThemeToggle />
        </div>
      </div>

      {/* Help Section */}
      <div>
        <a
          href="#"
          className="text-sm text-[#5d6c80] underline decoration-solid hover:text-white"
        >
          Un problème ?
        </a>
      </div>
    </div>
  );
}
