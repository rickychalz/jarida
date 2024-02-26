import React from "react";
import TopicList from "./TopicList";
import FollowList from "./FollowList";
import FeaturedList from "./FeaturedList";

function SideFeed() {
  return (
    <div className="hidden self-start sticky top-0 p-4 lg:flex flex-col gap-5 lg:w-4/12">
      <FeaturedList />
      <TopicList />
      <FollowList />
    </div>
  );
}

export default SideFeed;
