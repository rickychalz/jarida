import React from "react";
import food2 from "../assets/food2.jpg";
import AvatarHeader from "./AvatarHeader";
import { Clock } from "lucide-react";
import TopicBadge from "./TopicBadge";
import LimitWords from "./LimitWords";

function FeaturedPost() {
  return (
    <div>
      <div className="bg-gradient-to-tr from-black to-stone-400 relative h-52 w-80 rounded-xl">
        <img
          src={food2}
          alt="food"
          className="w-full h-full object-cover absolute mix-blend-overlay "
        />
        <div className="absolute left-4 bottom-4 text-white">
          <div className="flex flex-col gap-1">
          <AvatarHeader/>
          <div>
          <p className="text-md font-semibold">
            <LimitWords text ='Excepteur excepteur aliquip ex laboris laboris.Aute dolor amet
              commodo enim ea consequat' limit={30}/></p>
          </div>
          <div className="text-xs inline-flex items-center gap-2">
            <Clock size={12} />
            <div>Dk 10 Kusoma</div>
             <TopicBadge/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;
