import React from "react";
import Nav from '../components/Nav';

import "../CSS/icofont.min.css";
const Home = () => {
  return (
    <div className="flex items-center h-screen">
      <div className="container 2xl:w-[1140px] content-center ml-auto mr-auto items-center">
        <h1 className="font-[Poppins,sans-serif] text-5xl font-bold text-white">
          Song JuanJuan
        </h1>
        <h2 className="text-white/[.8] text-[24px] mt-[20px] font-[Raleway,sans-serif] mb-[35px]">
          I'm a senior{" "}
          <span className="text-white pb-[6px] border-b-[2px] border-[#18d26e]">
            Full stack engineer
          </span>
        </h2>

        {/* Navigation bar place */}

        <Nav />
        {/* Picture Button */}
        <div className="mt-[40px] flex">
          <a
            href="/"
            className="bg-white/[.1] rounded-full w-[40px] h-[40px] mr-[8px] text-[16px] flex justify-center items-center text-white hover:bg-[#18d26e] hover:transition hover:ease-in-out hover:delay-100"
          >
            <i className="icofont-linkedin"></i>
          </a>
          <a
            href="/"
            className="bg-white/[.1] rounded-full w-[40px] h-[40px] mr-[8px] text-[16px] flex justify-center items-center text-white hover:bg-[#18d26e] hover:transition hover:ease-in-out hover:delay-100"
          >
            <i className="icofont-twitter"></i>
          </a>
          <a
            href="/"
            className="bg-white/[.1] rounded-full w-[40px] h-[40px] mr-[8px] text-[16px] flex justify-center items-center text-white hover:bg-[#18d26e] hover:transition hover:ease-in-out hover:delay-100"
          >
            <i className="icofont-facebook"></i>
          </a>
          <a
            href="/"
            className="bg-white/[.1] rounded-full w-[40px] h-[40px] mr-[8px] text-[16px] flex justify-center items-center text-white hover:bg-[#18d26e] hover:transition hover:ease-in-out hover:delay-100"
          >
            <i className="icofont-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
