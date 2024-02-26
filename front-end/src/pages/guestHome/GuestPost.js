import React from "react";
import food2 from "../../assets/food2.jpg";
import { Clock } from "lucide-react";
import AvatarHeader from "../../components/AvatarHeader";

function Post() {
  return (
    <div className="py-5 flex flex-row items-center justify-between text-zinc-800">
      <div className=" flex flex-col gap-2 pr-4 lg:max-w-xl">
        <div className="flex flex-row gap-2 items-center">
          <AvatarHeader />
          <div className="text-xs">Sep 20</div>
        </div>
        <h3 className="text-sm md:text-lg py-1 font-bold">
          Jinsi ya kupata chakula bomba sana Dar es salaam
        </h3>
        <p className="hidden md:block text-sm pr-4">
          Excepteur excepteur aliquip ex laboris laboris.Aute dolor amet commodo
          enim ea consequat velit do et...
        </p>
        <div className="text-xs inline-flex items-center gap-2 ">
          <Clock size={12} />
          <div>Dk 10 Kusoma</div>
          <div className="hidden md:inline"></div>
          <span className="hidden md:inline-flex items-center rounded-xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700">
            Vyakula
          </span>
        </div>
      </div>
      <div className="">
        <img src={food2} alt="food2" className=" w-32 rounded-md" />
      </div>
    </div>
  );
}

export default Post;
