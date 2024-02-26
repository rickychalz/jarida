import React from "react";
import Avatar from "../assets/avatar.png";

import { Bell, } from "lucide-react";

const ArticleNav = () => {
  return (
    <header>
      <div className="bg-white flex flex-row justify-between items-center border-b  w-screen py-2 px-8 z-50 ">
        <div>
          <h1 className="text-2xl font-bold ">Jarida.</h1>
        </div>
        <div className="flex flex-row gap-8 items-center">
          <div>
            <Bell size={22} />
          </div>
          <div>
            <img
              src={Avatar}
              alt="Avatar"
              width={30}
              height={30}
              className="border rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ArticleNav;
