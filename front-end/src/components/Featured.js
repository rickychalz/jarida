import React from "react";
import AvatarHeader from "./AvatarHeader";

function Featured() {
  return (
    <div className="flex flex-col gap-2 items-start my-4">
      <AvatarHeader/>
      <h3 className="font-bold text-sm">
        Jinsi ya kupata chakula bomba sana Dar es salaam..
      </h3>
    </div>
  );
}

export default Featured;
