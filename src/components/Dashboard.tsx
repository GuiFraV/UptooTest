import React from "react";
import UserProjects from "./UserProjects";
import DiscoverTools from "./DiscoverTools";
import StudiesSection from "./StudiesSection";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-6 border border-red-600 h-full">
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
