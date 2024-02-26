import React from "react";
import HomeNav from "../../components/HomeNav";
import Avatar from "../../assets/avatar.png";
import food2 from "../../assets/food2.jpg";
import ArticleFooter from "../../components/ArticleFooter";
import {
  Heart,
  BookOpen,
  MessageCircle,
  Bookmark,
  Share,
  MoreVertical,
} from "lucide-react";


function ArticlePage() {



  return (
    <div className="flex m-auto justify-center items-center">
      <HomeNav />
      <div className="mt-16 flex flex-col items-center justify-center">
        <div className="w-screen px-4 md:px-16 lg:px-8 flex flex-col items-center justify-center gap-8 lg:max-w-screen-lg">
          <div className="flex flex-col justify-start gap-8">
            <h1 className="text-3xl text-left font-bold mt-10">
              Mambo moja mbili tatu nne tano sita saba Mambo moja mbili tatu nne
            </h1>
            <div className="flex flex-row gap-2">
              <div className="">
                <img
                  src={Avatar}
                  alt="Avatar"
                  width={50}
                  height={50}
                  className="rounded-full border"
                />
              </div>
              <div className="flex flex-col">
                <div>Thomas Smith . Fuatilia</div>
                <div>Dkk 6 Kusoma . Siku 2 zilizopita</div>
              </div>
            </div>
          </div>
          <div className="">
            <img src={food2} className="flex-shrink" alt="food2"/>
          </div>
          <div className="md:text-xl font-light leading-10 ">
            Lorem sint nisi labore proident velit deserunt enim adipisicing elit
            aute et. Id elit nisi sunt in sint aliqua. Voluptate nisi eiusmod
            Lorem labore duis nulla amet tempor nisi sunt enim excepteur. Lorem
            sint nisi labore proident velit deserunt enim adipisicing elit aute
            et. Id elit nisi sunt in sint aliqua. Voluptate nisi eiusmod Lorem
            labore duis nulla amet tempor nisi sunt enim excepteur.
            <br />
            <br />
            Lorem sint nisi labore proident velit deserunt enim adipisicing elit
            aute et. Id elit nisi sunt in sint aliqua. Voluptate nisi eiusmod
            Lorem labore duis nulla amet tempor nisi sunt enim excepteur. Lorem
            sint nisi labore proident velit deserunt enim adipisicing elit aute
            et. Id elit nisi sunt in sint aliqua. Voluptate nisi eiusmod Lorem
            labore duis nulla amet tempor nisi sunt enim excepteur.
            <br />
            <br />
            Lorem sint nisi labore proident velit deserunt enim adipisicing elit
            aute et. Id elit nisi sunt in sint aliqua. Voluptate nisi eiusmod
            Lorem labore duis nulla amet tempor nisi sunt enim excepteur. Lorem
            sint nisi labore proident velit deserunt enim adipisicing elit aute
            et. Id elit nisi sunt in sint aliqua. Voluptate nisi eiusmod Lorem
            labore duis nulla amet tempor nisi sunt enim excepteur.
          </div>
          <div className="w-screen px-4 flex flex-row items-center justify-around gap-10 py-4 mt-10 mb-20 border-t border-b lg:w-full">
            <div className="flex flex-row items-center gap-1 text-sm">
              <Heart size={20} />
              100
            </div>
            {/*<div className="flex flex-row items-center gap-1 text-sm">
              <BookOpen size={20} />
              100
            </div>*/}
            <div className="flex flex-row items-center gap-1 text-sm">
              <button><MessageCircle size={20} /></button>              
              50
            </div>
            <Bookmark size={20} />
            <Share size={20} />
            <MoreVertical size={20} />
            
          </div>
          
        </div>
   
      </div>
     
    </div>
  );
}

export default ArticlePage;
