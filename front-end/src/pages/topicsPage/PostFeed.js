import React from 'react';
import Post from '../../components/Post';

function PostFeed() {
  return (
<div className="md:w-screen mx-0 md:mx-8 flex flex-col gap-10 pb-8 lg:w-8/12 ">
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
  )
}

export default PostFeed;