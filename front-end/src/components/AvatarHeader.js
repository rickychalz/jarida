import React, { useState } from "react";

import Avatar from "../assets/avatar.png";
import PopOver from "./PopOver";

function AvatarHeader() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="relative group inline-flex text-sm items-center gap-2 cursor-pointer">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img
          width={20}
          height={20}
          src={Avatar}
          alt="Avatar"
          className="rounded-full"
        />
      </div>
      <h3
        className="text-xs"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        John Doe
      </h3>
      {isHovered && (
        <div className="hidden md:block absolute top-6 left-52 transform -translate-x-1/2 bg-white border border-gray-300 min-w-200 p-4 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-50 ">
          <PopOver />
        </div>
      )}
    </div>
  );
}

export default AvatarHeader;
