import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import navLogo from "../assets/Evergreen.png";

import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="sticky top-0 z-50 w-full h-[10vh] flex justify-around items-center p-4 bg-green-800 text-white shadow-2xl">
      <div>
        <img src={navLogo} alt="logo" style={{ width: "120px" }} />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="p-5 cursor-pointer hover:bg-yellow-600 duration-500 hover:rounded-xl">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-5 cursor-pointer hover:bg-yellow-600 duration-500 hover:rounded-xl">
          <Link to="destinations" smooth={true} duration={500}>
            Destinations
          </Link>
        </li>
        <li className="p-5 cursor-pointer hover:bg-yellow-600 duration-500 hover:rounded-xl">
          <Link to="packages" smooth={true} duration={500}>
            Packages
          </Link>
        </li>
        <li className="p-5 cursor-pointer hover:bg-yellow-600 duration-500 hover:rounded-xl">
          <Link to="reviews" smooth={true} duration={500}>
            Reviews
          </Link>
        </li>
        <li className="p-5 cursor-pointer hover:bg-yellow-600 duration-500 hover:rounded-xl">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-green-800 flex flex-col justify-center items-center cursor-pointer"
        }
      >
        <div>
          <img src={navLogo} alt="logo" style={{ width: "120px" }} />
        </div>
        <li className="py-6">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6">
          <Link
            onClick={handleClick}
            to="destinations"
            smooth={true}
            duration={500}
          >
            Destinations
          </Link>
        </li>
        <li className="py-6">
          <Link
            onClick={handleClick}
            to="packages"
            smooth={true}
            duration={500}
          >
            Packages
          </Link>
        </li>
        <li className="py-6">
          <Link onClick={handleClick} to="reviews" smooth={true} duration={500}>
            Reviews
          </Link>
        </li>
        <li className="py-6">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
