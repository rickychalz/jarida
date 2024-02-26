import React from "react";
import Follow from "./Follow";

function FollowList() {
  return (
    <div className="flex flex-col pb-4 border-b">
      <h3 className="py-2 text-zinc-800 font-semibold">Wakumfuatilia</h3>
      <Follow />
      <Follow />
      <Follow />
    </div>
  );
}

export default FollowList;
