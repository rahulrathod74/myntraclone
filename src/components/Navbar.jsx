import React from "react";
import logo from "../images/logo.png";
import icon from '../images/icon.png';
import account from "../images/account.png"
import out from "../images/logout.png"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex text-sm font-bold text-gray-700 items-center p-4 shadow-lg  ">
      <img src={logo} alt="myntra-logo" className="w-20 h-12 ml-5 " />
      <h1 className="ml-8">MEN</h1>
      <h1 className="ml-8">WOMEN</h1>
      <h1 className="ml-8">KIDS</h1>
      <h1 className="ml-8">HOME & LIVING</h1>
      <h1 className="ml-8">BEAUTY</h1>
      <h1 className="ml-12">STUDIO</h1>
      <div className="border border-gray-100 flex items-center bg-gray-100 w-96 h-10 ml-64 " >
        <img src={icon} alt="" className="w-3 h-3 ml-4" />
        <input  className="bg-gray-100   text-gray-900 font-normal outline-none text-sm rounded-sm   block w-full p-2.5 ml-3  "  placeholder="Search for products" required />
      </div>
      <Link to="/login">
      <div className="ml-6 text-xs">
      <img src={account} alt=""  className="w-5 h-5 ml-2"/>
      <h1>login</h1>
      </div>
      </Link>
     
      <div className="ml-6 text-xs">
      <img src={out} alt=""  className="w-4 h-4 ml-2"/>
      <h1>logout</h1>
      </div>
    </div>
  );
};

export default Navbar;
