import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalVariables } from "../hooks";
import { useBetween } from "use-between";

const useSharedGlobalVariables = () => useBetween(useGlobalVariables);

const Nav = () => {
  const { activeNavItem, setClassActive } = useSharedGlobalVariables();
  return (
    <div className="relative ">
      <NavLink
        to="/"
        className={`before:content-[''] before:bg-green-500 before:absolute before:bottom-[-2px] left-[0px] before:w-0  before:transition-all before:delay-150 before:ease-in-out before:delay-0  before:h-[2px]  text-white/[.8] font-[Poppins,sans-serif] text-[16px] hover:text-white hover:before:visible hover:before:w-[30px] ${
          activeNavItem === "Home"
            ? "before:visible before:w-[30px]"
            : "before:invisible"
        }`}
   
      > 
      Home

       </NavLink>
      <NavLink
        to="/About"
        className={`ml-[30px] before:content-[''] before:bg-green-500 before:absolute before:bottom-[-2px] left-[0px] before:w-0  before:transition-all before:delay-150 before:ease-in-out before:delay-0  before:h-[2px]  text-white/[.8] font-[Poppins,sans-serif] text-[16px] hover:text-white hover:before:visible hover:before:w-[30px] ${
          activeNavItem === "About"
            ? "before:visible before:w-[30px]"
            : "before:invisible"
        }`}
        onClick={() => setClassActive("About")}
      >
        About
      </NavLink>
      <NavLink
        to="/"
        className="before:content-[''] before:bg-green-500 before:absolute before:bottom-[-2px] left-[0px] before:w-0 before:invisible before:transition-all before:delay-150 before:ease-in-out before:delay-0  before:h-[2px]  text-white/[.8] font-[Poppins,sans-serif] text-[16px] ml-[30px] hover:text-white hover:before:visible hover:before:w-[30px]"
        onClick={() => setClassActive("Home")}
      >
        Resume
      </NavLink>
      <NavLink
        to="/"
        className="before:content-[''] before:bg-green-500 before:absolute before:bottom-[-2px] left-[0px] before:w-0 before:invisible before:transition-all before:delay-150 before:ease-in-out before:delay-0  before:h-[2px]  text-white/[.8] font-[Poppins,sans-serif] text-[16px] ml-[30px] hover:text-white hover:before:visible hover:before:w-[30px]"
        onClick={() => setClassActive("Home")}
      >
        Services
      </NavLink>
      <NavLink
        to="/"
        className="before:content-[''] before:bg-green-500 before:absolute before:bottom-[-2px] left-[0px] before:w-0 before:invisible before:transition-all before:delay-150 before:ease-in-out before:delay-0  before:h-[2px]  text-white/[.8] font-[Poppins,sans-serif] text-[16px] ml-[30px] hover:text-white hover:before:visible hover:before:w-[30px]"
        onClick={() => setClassActive("Home")}
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/"
        className="before:content-[''] before:bg-green-500 before:absolute before:bottom-[-2px] left-[0px] before:w-0 before:invisible before:transition-all before:delay-150 before:ease-in-out before:delay-0  before:h-[2px]  text-white/[.8] font-[Poppins,sans-serif] text-[16px] ml-[30px] hover:text-white hover:before:visible hover:before:w-[30px]"
        onClick={() => setClassActive("Home")}
      >
        Contact
      </NavLink>
    </div>
  );
};
export default Nav;
