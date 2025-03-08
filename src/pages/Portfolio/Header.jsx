import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="pb-8">
      <div className="py-4">
        <Link to="/">
          <img
            loading="lazy"
            alt="logo"
            src="/Images/logo-webp.webp"
            className=" w-56 mx-auto"
          />
        </Link>
      </div>
      <div className="px-4">
        <div className=" space-x-2  py-2 flex items-center">
          <input
            className="w-full py-2 bg-gray-50 focus:outline-none rounded px-4"
            placeholder="Search Here.."
          />
          <BsSearch className="text-xl text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Header;
