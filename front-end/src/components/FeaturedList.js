import React from "react";
import Featured from "./Featured";

function FeaturedList() {
  return (
    <div className="max-w-xs pb-4 border-b">
      <h3 className="text-zinc-800 font-semibold">Chaguo la mhariri</h3>
      <Featured />
      <Featured />
      <Featured />
    </div>
  );
}

export default FeaturedList;
