import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00ced1]">TechGen</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Projects</li>
        <li className="p-4">Home</li>
        <li className="p-4">Resources</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 h-full ease-in-out md:hidden duration-500 w-[60%] border-r border-gray-900 bg-[#000300]"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-8 text-[#00df9a]">
          TechGen
        </h1>
        <ul className="uppercase p-4 md:hidden">
          <li className="p-4 border-b border-gray-600">Projects</li>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
