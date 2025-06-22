import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#1e1b4b] border-b border-[#312e81] shadow-lg">
      <ul className="flex justify-center py-4 list-none">
        <li className="bg-white text-black px-4 py-2 rounded-md hover:bg-yellow-300 transition duration-300 cursor-pointer">
          Home
        </li>
        <li className="bg-white text-black px-4 py-2 rounded-md hover:bg-yellow-300 transition duration-300 cursor-pointer ml-4">
          Markets
        </li>
        <li className="bg-white text-black px-4 py-2 rounded-md hover:bg-yellow-300 transition duration-300 cursor-pointer ml-4">
          Watchlist
        </li>
        <li className="bg-white text-black px-4 py-2 rounded-md hover:bg-yellow-300 transition duration-300 cursor-pointer ml-4">
          Portfolio Hello
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
