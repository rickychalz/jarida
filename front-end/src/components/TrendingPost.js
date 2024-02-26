import React from "react";
import AvatarHeader from "./AvatarHeader";
import { Clock } from "lucide-react";
import TopicBadge from "./TopicBadge";

function TrendingPost() {
  return (
    <div className="flex flex-row gap-5 text-zinc-800">
      <div className="text-5xl font-extrabold text-lime-600">1</div>
      <div className="flex flex-col gap-2">
        <AvatarHeader />
        <h3 className="font-bold">
          Jinsi ya kupata chakula bomba sana Dar es salaam..
        </h3>
        <div className="text-xs inline-flex items-center gap-2">
          <Clock size={12} />
          <div>Dk 10 Kusoma</div> . <div>Sep 20</div>. <TopicBadge />
        </div>
      </div>
    </div>
  );
}

export default TrendingPost;
