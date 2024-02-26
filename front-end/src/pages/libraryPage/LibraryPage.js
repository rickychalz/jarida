import React from "react";
import HomeNav from "../../components/HomeNav";
import SideNav from "../../components/SideNav";
import PostFeed from "./PostFeed";
import SideFeed from "../../components/SideFeed";
import { Tabs, Tab } from "../../components/MenuTabs";
import FloatingButton from "../../components/FloatingBtn";


function LibraryPage() {
  return (
    <div className="flex m-auto justify-center items-center">
      <HomeNav />
      <div className="flex flex-col h-screen ">
        <div className="w-screen  md:px-8 flex flex-row justify-center h-full m-auto md:overflow-hidden mt-14 lg:max-w-screen-2xl">
          <SideNav className="" />
          <div className="w-full  md:flex flex-row justify-center gap-8">
            <div className=" md:w-screen lg:w-8/12 mx-2 md:mx-8 flex flex-col  overflow-auto overflow-x-hidden max-w-6xl [&::-webkit-scrollbar]:hidden">
              <div className="m-4 md:mt-12">
                <h1 className="text-4xl md:text-5xl font-semibold">Kabati</h1>
              </div>
              <Tabs>
                <Tab label="Ulizotunza">
                <PostFeed/>
                </Tab>
                
                <Tab label="Historia">
                 
                </Tab>
              </Tabs>
            </div>
            <SideFeed />
          </div>
        </div>
      </div>
      <FloatingButton />
    </div>
  );
}

export default LibraryPage;
