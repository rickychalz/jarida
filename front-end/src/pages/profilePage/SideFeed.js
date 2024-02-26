import React from "react";
import Avatar from "../../assets/avatar.png";
import FollowBtn from "../../components/FollowBtn";

function SideFeed() {
  return (
    <div className="hidden self-start sticky top-0 p-4 mt-8 lg:flex flex-col gap-5 bg-slate-50 rounded-2xl lg:w-3/12 flex-shrink-0 ">
      <div className="flex flex-col gap-3">
        <div>
          <img
            width={100}
            height={100}
            src={Avatar}
            alt="Avatar"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <div>John Doe</div>
          <div className="text-sm">5.5K Followers</div>
        </div>
        <div className="flex flex-col text-sm">
          <div>Writer | Reader | Architect</div>
          <div>https://www.123.co.tz</div>
        </div>
       {/*<FollowBtn/>*/}
       <p className="text-sm text-lime-600">Hariri Wasifu</p>
      </div>
      {/*<div className="flex flex-col gap-4 w-full">
        <div>Unaowafata</div>
        <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 justify-between">
          <div className="flex flex-row gap-1">
            <img
              width={20}
              height={20}
              src={Avatar}
              alt="Avatar"
              className="rounded-full"
            />
            <div className="text-sm">Jane Anne</div>
          </div>
          <div>
            <MoreHorizontal size={20}/>
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <div className="flex flex-row gap-1">
            <img
              width={20}
              height={20}
              src={Avatar}
              alt="Avatar"
              className="rounded-full"
            />
            <div className="text-sm">Jane Anne</div>
          </div>
          <div>
            <MoreHorizontal size={20}/>
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <div className="flex flex-row gap-1">
            <img
              width={20}
              height={20}
              src={Avatar}
              alt="Avatar"
              className="rounded-full"
            />
            <div className="text-sm">Jane Anne</div>
          </div>
          <div>
            <MoreHorizontal size={20}/>
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <div className="flex flex-row gap-1">
            <img
              width={20}
              height={20}
              src={Avatar}
              alt="Avatar"
              className="rounded-full"
            />
            <div className="text-sm">Jane Anne</div>
          </div>
          <div>
            <MoreHorizontal size={20}/>
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-between">
          <div className="flex flex-row gap-1">
            <img
              width={20}
              height={20}
              src={Avatar}
              alt="Avatar"
              className="rounded-full"
            />
            <div className="text-sm">Jane Anne</div>
          </div>
          <div>
            <MoreHorizontal size={20}/>
          </div>
        </div>
        </div>
        <div className="text-sm">Ona wote (200)</div>
  </div>*/}
    </div>
  );
}

export default SideFeed;
