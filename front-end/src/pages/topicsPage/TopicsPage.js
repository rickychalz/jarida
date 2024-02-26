import React, {useState}from "react";
import HomeNav from "../../components/HomeNav";
import SideNav from "../../components/SideNav";
import TopicsBar from "./TopicsBar";
import PostFeed from "./PostFeed";
import SideFeed from "../../components/SideFeed";
import Featured from "./Featured";
import FloatingButton from "../../components/FloatingBtn";




function TopicsPage() {
  
  return (
    <div className="flex m-auto justify-center items-center">
      <HomeNav />
      <div className="flex flex-col h-screen">
        <div className="w-screen md:px-8 flex flex-row justify-center h-full m-auto overflow-hidden mt-14 lg:max-w-screen-2xl">
          <SideNav className="" />
          <div className="mx-4 md:mx-8  flex flex-col overflow-auto overflow-x-hidden w-full [&::-webkit-scrollbar]:hidden">
            <div className="px-2 py-4 bg-white z-40">
              <TopicsBar />
            </div>
            <div className="flex flex-col items-center justify center gap-8 my-8">
                <h1 className="text-5xl font-semibold">Teknolojia</h1>
                <p>Mada . Wafuatiliaji 550k . Makala 200</p>
                <button className="py-2 px-8 bg-lime-600 text-white rounded-full text-lg">
                  Follow
                </button>
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

export default TopicsPage;
