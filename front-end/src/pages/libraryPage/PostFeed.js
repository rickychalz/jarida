import React from "react";
import Post from "../../components/Post";

function PostFeed() {
  return (
    <div className="mx-0 md:mx-4 flex flex-col gap-5 pb-8 ">
      <Post />
    </div>
  );
}

export default PostFeed;
