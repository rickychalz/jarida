import React from "react";
import food2 from "../assets/food2.jpg";
import Avatarheader from "./AvatarHeader";
import TopicBadge from "./TopicBadge";
import { Heart, BookOpen, Bookmark, Share, Clock } from "lucide-react";
import ThreeDotMenu from "./ThreeDotMenu";
import LimitWords from "./LimitWords";

function Post() {
  const options = [
    { label: "Option 1", onClick: () => alert("Option 1 clicked") },
    { label: "Option 2", onClick: () => alert("Option 2 clicked") },
    // Add more options as needed
  ];

  return (
    <div className="flex flex-col border-b border-gray-100 gap-2 py-6 max-w-6xl">
      <div className="text-primary flex flex-row items-center justify-between max-w-3xl">
        <div className="flex flex-col mr-8 ">
          <div className="flex flex-row gap-2 items-center">
            <Avatarheader />
            <div className="text-xs">Sep 20</div>
          </div>

          <div className="pr-2 flex flex-col gap-2">
            <h3 className=" text-sm sm:text-base md:text-lg py-1 font-bold">
              Jinsi ya kupata chakula bomba sana Dar es salaam
            </h3>
            <p className="hidden md:block text-sm pr-4 max-w-xl">
              <LimitWords
                text="Excepteur excepteur aliquip ex laboris laboris.Aute dolor amet
              commodo enim ea consequat Excepteur excepteur aliquip ex laboris laboris.Aute dolor amet
              commodo enim ea consequat Excepteur excepteur aliquip ex laboris laboris.Aute dolor amet
              commodo enim ea consequat"
                limit={120}
              />
            </p>
          </div>
          {/*<div className="mt-4 text-xs inline-flex items-center gap-3 md:text-sm">
            <div className="flex items-center gap-1">
              <Clock size={12} />
              Dk 10 Kusoma
            </div>
            <TopicBadge />
            <div className="text-xs flex flex-row items-center gap-1 md:text-sm">
              <BookOpen size={20} strokeWidth={1} />
              100
            </div>
          </div>*/}
          <div className="mt-6 flex flex-row items-center justify-between">
            <div className="md:flex flex-row items-center justify-center gap-3 text-xs md:text-sm ">
            <TopicBadge />
              <div className="text-xs hidden md:flex items-center gap-1">
                <Clock size={15} strokeWidth={1} />
                Dk 10 Kusoma
              </div>              
            </div>

            <div className="flex flex-row items-center gap-5 md:gap-10 ">
              <Bookmark size={20} strokeWidth={1} />
              <Share size={20} strokeWidth={1} />
              <ThreeDotMenu options={options} />
            </div>
          </div>
        </div>
        <div className="flex-shrink">
          <img src={food2} alt="food2" className="rounded-md w-32" />
        </div>
      </div>
    </div>
  );
}

export default Post;
