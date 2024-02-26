import React from "react";
import GuestTab from "./GuestTab";
import GuestPost from "./GuestPost";

function GuestPosts() {
  return (
    <div className="w-full lg:w-2/3 md:max-w-screen-md flex  items-center md:justify-center lg:justify-start mb-8 md:px-8  lg:pt-4">
      <div className="flex flex-col gap-4 justify-center overflow-clip">
        <div className="font-semibold text-zinc-800">
          Soma makala mbalimbali
        </div>
        <div className="lg:max-w-3xl">
          <GuestTab />

          <div className="flex flex-col gap-5">
            <GuestPost />
            <GuestPost />
            <GuestPost />
            <GuestPost />
            <GuestPost />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestPosts;
