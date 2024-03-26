import React from "react";
import { Link } from "react-router-dom";
import { FaEthereum } from "react-icons/fa";


const Logo = () => {
  return (
    <Link
      to="/"
      className="
     absolute top-[1.5rem] left-[1.5rem] [text-decoration:none]
text-lg text-white flex items-center md:px-[60px] 
     "
    >
      <FaEthereum />
      <span  >Cryptocurrency Tracker</span>
    </Link>
  );
};

export default Logo;
