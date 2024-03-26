import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className=" mt-20 flex 
    "
    >
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `w-full px-2  py-1 text-base text-center font-nunito m-2.5

${isActive
              ? " text-black bg-white"
              : "bg-black text-white hover:text-cyan   active:text-zinc-300"
            }
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Crypto
      </NavLink>

      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `w-full px-2  py-1 text-base text-center font-nunito m-2.5

${isActive
              // ? "text-black bg-white"
              // : "bg-gray-200 text-black hover:text-cyan active:bg-cyan active:text-gray-300"

              ? " text-black bg-white"
              : "bg-black text-white hover:text-cyan   active:text-zinc-300"
            }
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        trending
      </NavLink>

      <NavLink
        to="/saved"
        className={({ isActive }) => {
          return `w-full px-2  py-1 text-base text-center font-nunito m-2.5
${isActive
              // ? "text-black bg-white"
              // : "bg-gray-200 text-black hover:text-cyan active:bg-cyan active:text-gray-300"

              ? " text-black bg-white"
              : "bg-black text-white hover:text-cyan   active:text-zinc-300"
            }
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        saved
      </NavLink>
    </nav>
  );
};

export default Navigation;
