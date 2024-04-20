import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const navLinks = ["Home", "Features", "Pricing", "About us"];
  return (
    <div className="px-[2%]  flex justify-between items-center shadow-md shadow-[#59874f]">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-[100px]" />
      </Link>
      <div className="flex text-[1.1rem] items-center">
        {navLinks.map((link, index) => (
          <a
            href="#"
            className={`ml-5 px-2 py-1 hover:bg-[#59874f] hover:text-white duration-500 rounded-md ease-in-out`}
          >
            {link}
          </a>
        ))}
        <a href="#" className="ml-5">
          <button className="px-3 py-2 rounded-md bg-[#eddd5e] hover:bg-[#59874f] ease-in-out  hover:text-white duration-500">
            Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
