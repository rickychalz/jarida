import React from "react";
import GuestNav from "./GuestNav";
import GuestHero from "./GuestHero";
import GuestTrending from "./GuestTrending";
import GuestPosts from "./GuestPosts";
import GuestFollowing from "./GuestFollowing";
import Footer from "../../components/Footer";

function GuestHome() {
  return (
    <div className="GuestHome transition-all ease-in-out duration-1000 text-zinc-800  ">
      <div className="flex flex-col items-center justify-center">
        <GuestNav />
        <div className="w-screen px-6 flex flex-col items-center justify-center m-auto lg:max-w-screen-xl ">
          <GuestHero />
          <GuestTrending />
          <div className="w-screen px-6 my-16 flex flex-row items-start md:justify-center lg:justify-between lg:max-w-screen-xl">
            <GuestPosts />
            <div className="hidden lg:flex flex-col sticky lg:px-4 top-0 pl-4 lg:w-1/3">
              <GuestFollowing />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestHome;
