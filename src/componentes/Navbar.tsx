import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white border-b border-gray-300">
   
      <div className="text-2xl font-bold">
        <span className="text-black">loca</span>
        <span className="text-teal-500">lhost</span>
      </div>

      <ul className="flex space-x-6 text-gray-700">
        <li className="cursor-pointer hover:text-black">Home</li>
        <li className="cursor-pointer hover:text-black">Stays</li>
        <li className="cursor-pointer hover:text-black">Become a host</li>
      </ul>

      <div className="flex items-center space-x-6">
        <span className="text-xl cursor-pointer">🔔</span>
        <img
          src="../img/img-1-1.png"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
