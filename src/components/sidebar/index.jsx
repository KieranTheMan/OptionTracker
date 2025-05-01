/* eslint-disable */
import React from "react"
import { HiX} from "react-icons/hi";
// Icon Imports
import {
  MdHome,
} from "react-icons/md";

import Links from "./components/Links";

import SidebarCard from "components/sidebar/componentsrtl/SidebarCard";
import routes from  "routes";

const Sidebar = ( {open, onClose, openModal}) => {
  

  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          Horizon <span className="font-medium">FREE</span>
        </div>
      </div>
      <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        {/* Manage Portfolio Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <MdHome className="h-6 w-6" />
          <h1 className="text-lg font-semibold">Manage Portfolio</h1>
        </div>

        {/* Button to open modal */}
        <button
          onClick= {()=>{
            openModal();
          console.log('button clicked')
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
        >
          ManPort
        </button>
</div>
      </ul>


      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      {/* Free Horizon Card */}
      <div className="flex justify-center">
        <SidebarCard />
      </div>

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
