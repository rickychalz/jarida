import React from "react";
import TabBar from "./TabBar";
import SideNav from "./SideNav";
import Post from "./Post";
import FeaturedList from "./FeaturedList";
import TopicList from "./TopicList";
import FollowList from "./FollowList";

function MainContent() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-row items-center">
        <SideNav />

        <div className=" relative flex flex-row  ml-48 max-w-6xl">
          <div className="border-r border-l mb-4 w-full h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden max-w-6xl">
            <TabBar />

            <div className="">
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </div>

          <div className="flex flex-col gap-8 px-4 m-5 h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden ">
            <FeaturedList />
            <TopicList />
            <FollowList />
          </div>

        </div>
      </div>
    </div>
  );
}

export default MainContent;
