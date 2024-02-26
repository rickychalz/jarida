import React from "react";
import TrendingPost from "../../components/TrendingPost";

function TrendingPosts() {
  return (
     
        <div className="my-16 w-full flex  flex-col gap-5">
          <div className="font-semibold text-zinc-800">Zivumazo kwenye Jarida</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <TrendingPost />
            <TrendingPost />
            <TrendingPost />
            <TrendingPost />
            <TrendingPost />
            <TrendingPost />
          </div>
        </div>      

  );
}

export default TrendingPosts;
