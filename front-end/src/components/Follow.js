import React from "react";
import Avatar from "../assets/avatar.png";

function Follow() {
  return (
    <div className="py-3 flex flex-row items-center gap-2 text-zinc-800">
      <div className="flex flex-row w-full gap-2">
        <div>
          <img
            width={30}
            height={30}
            src={Avatar}
            alt="Avatar"
            className="rounded-full"
          />
          </div>
        
        <div className="flex flex-col text-sm">
          <h3 className="text-sm">John Doe</h3>
          <p className="text-md">Writer | Reader | Architect</p>
        </div>
      </div>
      <div className="flex items-center justify-center border-solid bg-lime-600 w-20 h-8 rounded-full px-2 text-center text-white text-sm cursor-pointer transition-all duration-150">
        Fuatilia
      </div>
    </div>
  );
}

export default Follow;
