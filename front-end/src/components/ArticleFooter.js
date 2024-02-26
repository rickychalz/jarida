import React from "react";
import Avatar from "../assets/avatar.png";
import food2 from "../assets/food2.jpg";

import { Heart, BookOpen, MessageCircle, Bookmark, Clock } from "lucide-react";

function ArticleFooter() {
  return (
    <div className=" bg-neutral-100 ">
      <div className="flex  flex-col justify-center items-center py-20 ">
        <div className="flex flex-col gap-2 w-full justify-between max-w-2xl">
          <div>
            <img
              src={Avatar}
              alt="Avatar"
              width={70}
              height={70}
              className="rounded-full border"
            />
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <div>Imeandikwa na John Doe</div>
            <button class="bg-lime-300 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded-full">
              Fuatilia
            </button>
          </div>
          <div>Wafuatiliaji 36k</div>
          <div>CEO of Gado Images | Content Consultant </div>
          <div>http://bayareatelegraph.com & http://lifetechshorts.com |</div>
        </div>
        <div className="my-20 flex flex-col">
          <div className="flex justify-between">
            <span>More from John Doe</span>
            <span>See all...</span>
          </div>

          <div className="mt-10 flex flex-row gap-5 max-w-2xl overflow-x-auto  [&::-webkit-scrollbar]:hidden">
            <div className="flex flex-col gap-4 flex-shrink-0 max-w-xs">
              <div>
                <img src={food2} alt="food2" width={300} height={100} />
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <img
                    src={Avatar}
                    alt="Avatar"
                    width={30}
                    height={30}
                    className="rounded-full border"
                  />
                </div>
                <div className="flex flex-col text-sm">
                  <div>Thomas Smith</div>
                </div>
              </div>
              <h1 className="font-bold">
                Jinsi ya kupata chakula bomba sana Dar es salaam..
              </h1>
              <p className="hidden md:block text-sm pr-4 max-w-xl">
                Excepteur excepteur aliquip ex laboris laboris.Aute dolor amet
                commodo enim ea consequat velit do et adipisicing irure
                culpa.Cillum exercitation
              </p>
              <div className="text-sm flex gap-1 items-center">
                <Clock size={12} />
                10 min read
              </div>
              <div className="my-2 pt-2 flex flex-row items-center  gap-8">
                <div className="flex flex-row items-center gap-1 text-sm">
                  <Heart size={20} />
                  100
                </div>
                <div className="flex flex-row items-center gap-1 text-sm">
                  <BookOpen size={20} />
                  100
                </div>
                <div className="flex flex-row items-center gap-1 text-sm">
                  <MessageCircle size={20} />
                  50
                </div>
                <Bookmark size={20} />
              </div>
            </div>
            <div className="flex flex-col gap-4 flex-shrink-0 max-w-xs">
              <div>
                <img src={food2} alt="food2" width={300} height={100} />
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <img
                    src={Avatar}
                    alt="Avatar"
                    width={30}
                    height={30}
                    className="rounded-full border"
                  />
                </div>
                <div className="flex flex-col text-sm">
                  <div>Thomas Smith</div>
                </div>
              </div>
              <h1 className="font-bold">
                Jinsi ya kupata chakula bomba sana Dar es salaam..
              </h1>
              <p className="hidden md:block text-sm pr-4 max-w-xl">
                Excepteur excepteur aliquip ex laboris laboris.Aute dolor amet
                commodo enim ea consequat velit do et adipisicing irure
                culpa.Cillum exercitation
              </p>
              <div className="text-sm flex gap-1 items-center">
                <Clock size={12} />
                10 min read
              </div>
            </div>
            <div className="flex flex-col gap-4 flex-shrink-0 max-w-xs">
              <div>
                <img src={food2} alt="food2" width={300} height={100} />
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <img
                    src={Avatar}
                    alt="Avatar"
                    width={30}
                    height={30}
                    className="rounded-full border"
                  />
                </div>
                <div className="flex flex-col text-sm">
                  <div>Thomas Smith</div>
                </div>
              </div>
              <h1 className="font-bold">
                Jinsi ya kupata chakula bomba sana Dar es salaam..
              </h1>
              <p className="hidden md:block text-sm pr-4 max-w-xl">
                Excepteur excepteur aliquip ex laboris laboris.Aute dolor amet
                commodo enim ea consequat velit do et adipisicing irure
                culpa.Cillum exercitation
              </p>
              <div className="text-sm flex gap-1 items-center">
                <Clock size={12} />
                10 min read
              </div>
            </div>
            <div className="flex flex-col gap-4 flex-shrink-0 max-w-xs">
              <div>
                <img src={food2} alt="food2" width={300} height={100} />
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <img
                    src={Avatar}
                    alt="Avatar"
                    width={30}
                    height={30}
                    className="rounded-full border"
                  />
                </div>
                <div className="flex flex-col text-sm">
                  <div>Thomas Smith</div>
                </div>
              </div>
              <h1 className="font-bold">
                Jinsi ya kupata chakula bomba sana Dar es salaam..
              </h1>
              <p className="hidden md:block text-sm pr-4 max-w-xl">
                Excepteur excepteur aliquip ex laboris laboris.Aute dolor amet
                commodo enim ea consequat velit do et adipisicing irure
                culpa.Cillum exercitation
              </p>
              <div className="text-sm flex gap-1 items-center">
                <Clock size={12} />
                10 min read
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <span>Recommended for you</span>
            <span>See all...</span>
          </div>

          <div className="mt-10 flex flex-row gap-5 max-w-2xl overflow-x-auto  [&::-webkit-scrollbar]:hidden">
            <div className="flex flex-col gap-4 flex-shrink-0 max-w-xs">
              <div>
                <img src={food2} alt="food2" width={300} height={100} />
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <img
                    src={Avatar}
                    alt="Avatar"
                    width={30}
                    height={30}
                    className="rounded-full border"
                  />
                </div>
                <div className="flex flex-col text-sm">
                  <div>Thomas Smith</div>
                </div>
              </div>
              <h1 className="font-bold">
                Jinsi ya kupata chakula bomba sana Dar es salaam..
              </h1>
              <p className="hidden md:block text-sm pr-4 max-w-xl">
                Excepteur excepteur aliquip ex laboris laboris.Aute dolor amet
                commodo enim ea consequat velit do et adipisicing irure
                culpa.Cillum exercitation
              </p>
              <div className="text-sm flex gap-1 items-center">
                <Clock size={12} />
                10 min read
              </div>
            </div>
            <div className="flex flex-col gap-4 flex-shrink-0 max-w-xs">
              <div>
                <img src={food2} alt="food2" width={300} height={100} />
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <img
                    src={Avatar}
                    alt="Avatar"
                    width={30}
                    height={30}
                    className="rounded-full border"
                  />
                </div>
                <div className="flex flex-col text-sm">
                  <div>Thomas Smith</div>
                </div>

                <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700">
                  Vyakula
                </span>
              </div>
              <h1 className="font-bold">
                Jinsi ya kupata chakula bomba sana Dar es salaam..
              </h1>
              <p className="hidden md:block text-sm pr-4 max-w-xl">
                Excepteur excepteur aliquip ex laboris laboris.Aute dolor amet
                commodo enim ea consequat velit do et adipisicing irure
                culpa.Cillum exercitation
              </p>
              <div className="text-sm flex gap-1 items-center">
                <Clock size={12} />
                10 min read .<span>Jan 23</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 flex-shrink-0 max-w-xs">
              <div>
                <img src={food2} alt="food2" width={300} height={100} />
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <img
                    src={Avatar}
                    alt="Avatar"
                    width={30}
                    height={30}
                    className="rounded-full border"
                  />
                </div>
                <div className="flex flex-col text-sm">
                  <div>Thomas Smith</div>
                </div>
              </div>
              <h1 className="font-bold">
                Jinsi ya kupata chakula bomba sana Dar es salaam..
              </h1>
              <p className="hidden md:block text-sm pr-4 max-w-xl">
                Excepteur excepteur aliquip ex laboris laboris.Aute dolor amet
                commodo enim ea consequat velit do et adipisicing irure
                culpa.Cillum exercitation
              </p>
              <div className="text-sm flex gap-1 items-center">
                <Clock size={12} />
                10 min read
              </div>
            </div>
            <div className="flex flex-col gap-4 flex-shrink-0 max-w-xs">
              <div>
                <img src={food2} alt="food2" width={300} height={100} />
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <img
                    src={Avatar}
                    alt="Avatar"
                    width={30}
                    height={30}
                    className="rounded-full border"
                  />
                </div>
                <div className="flex flex-col text-sm">
                  <div>Thomas Smith</div>
                </div>
              </div>
              <h1 className="font-bold">
                Jinsi ya kupata chakula bomba sana Dar es salaam..
              </h1>
              <p className="hidden md:block text-sm pr-4 max-w-xl">
                Excepteur excepteur aliquip ex laboris laboris.Aute dolor amet
                commodo enim ea consequat velit do et adipisicing irure
                culpa.Cillum exercitation
              </p>
              <div className="text-sm flex gap-1 items-center">
                <Clock size={12} />
                10 min read
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-4 flex justify-center items-center">
        <div>
            Footer
        </div>
      </div>
    </div>
  );
}

export default ArticleFooter;
