import React from "react";
import UserProjects from "./UserProjects";
import DiscoverTools from "./DiscoverTools";
import StudiesSection from "./StudiesSection";
import { useTheme } from "@/contexts/ThemeContext";

const Dashboard = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex flex-col flex-1 rounded-tl-[40px] md:flex-row md:space-x-6 h-full p-9 w-full transition-colors duration-300 ease-in-out ${
        isDarkMode ? "bg-dark-background" : "bg-background"
      }`}
    >
      {/* Colonne de gauche */}
      <div className="md:w-1/3">
        <UserProjects />
      </div>
      {/* Colonne de droite */}
      <div className="md:w-2/3 flex flex-col space-y-6 mt-6 md:mt-0">
        <DiscoverTools />
        <StudiesSection />
      </div>
    </div>
  );
};

export default Dashboard;
