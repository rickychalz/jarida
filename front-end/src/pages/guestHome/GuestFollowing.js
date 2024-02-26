import React from "react";
import Follow from "../../components/Follow";

function GuestFollowing() {
  return (
    
      <div className="pt-4 flex flex-col gap-5">
        <div className="text-zinc-800 font-semibold">Waandishi wakuwafatilia</div>
        <div className="flex flex-col gap-5">
          <Follow />
          <Follow />
          <Follow />
          <Follow />
        </div>
      </div>
    
  );
}

export default GuestFollowing;
