import React, {useState}from "react";
import HomeNav from "../../components/HomeNav";
import SideNav from "../../components/SideNav";
import TabBar from "../../components/TabBar";
import PostFeed from "./PostFeed";
import SideFeed from "../../components/SideFeed";
import Featured from "./Featured";
import FloatingButton from "../../components/FloatingBtn";




function UserHome() {
  
  return (
    <div className="flex m-auto justify-center items-center">
      <HomeNav />
      <div className="flex flex-col h-screen">
        <div className="w-screen md:px-8 flex flex-row justify-center h-full m-auto overflow-hidden mt-14 lg:max-w-screen-2xl">
          <SideNav className="" />
          <div className="flex flex-col overflow-auto overflow-x-hidden mx-4 lg:ml-8 w-full [&::-webkit-scrollbar]:hidden">
            <div className="px-2 py-4 border-b border-zinc-100 sticky top-0 bg-white z-40">
              <TabBar />
            </div>
            <div className="hidden md:my-4 md:flex flex-col gap-3">
              <Featured />
            </div>
            <div className="w-full mt-4 md:flex flex-row justify-center gap-8 lg:max-w-screen-2xl">
              <PostFeed />
              <SideFeed />
            </div>
          </div>
        </div>
        
      </div>
      <FloatingButton />
      
    </div>
  );
}

export default UserHome;
