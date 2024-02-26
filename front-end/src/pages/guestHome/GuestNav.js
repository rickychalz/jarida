import React, { useState } from "react";
import { Link } from "react-router-dom";
import GetStartedBtn from "../../components/GetStartedBtn";
import Login from "../../components/Login";

const GuestHeader = () => {
 
  return (
    <header className="sticky top-0 bg-white z-10">
      <nav className="border-b border-gray-100 flex items-center justify-center w-screen ">
        <div className="w-screen px-6 bg-white flex flex-row justify-between items-center py-2 z-50 lg:max-w-screen-2xl ">
          {/*Website Logo */}
          <Link to="#">
            <h1 className="text-2xl font-bold ">Jarida.</h1>
          </Link>
          <div className="flex flex-row gap-10 items-center">
            {/*Top Navigation */}
            <ul className="font-medium hidden md:flex flex-row gap-10">
              <Link to="#">Kuhusu Sisi</Link>
              <Login/>
            </ul>

            {/*Register Button */}
            <GetStartedBtn />
          </div>
        </div>
      </nav>

  
    </header>
  );
};

export default GuestHeader;
