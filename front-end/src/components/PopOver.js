import React from "react";
import Avatar from "../assets/avatar.png";

function PopOver() {
  return (
    <div className="flex flex-col gap-2 p-1 w-56">
      <div className="flex flex-row items-center gap-2">
        <div>
          <img
            width={20}
            height={20}
            src={Avatar}
            alt="Avatar"
            className="rounded-full"
          />
        </div>
        <h3 className="text-md">John Doe</h3>
      </div>
      <div className="text-xs">
        Tempor quis laborum occaecat enim labore laborum. Et duis ipsum velit
        aliquip esse ad do aliquip.
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm">35k followers</div>
        <div className="flex items-center justify-center border-solid bg-lime-600 w-20 h-8 rounded-full  px-2 text-center text-white text-sm hover:bg-green-400 hover:text-white cursor-pointer transition-all duration-150">
          Fuatilia
        </div>
      </div>
    </div>
  );
}

export default PopOver;
