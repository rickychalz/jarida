import React from "react";
import HomeNav from "../../components/HomeNav";
import SideNav from "../../components/SideNav";
import SideFeed from "./SideFeed";
import { Tabs, Tab } from "../../components/MenuTabs";
import FollowBtn from "../../components/FollowBtn";
import Avatar from "../../assets/avatar.png";
import ThreeDotMenu from "../../components/ThreeDotMenu";

function ProfilePage() {
  const options = [
    { label: "Option 1", onClick: () => alert("Option 1 clicked") },
    { label: "Option 2", onClick: () => alert("Option 2 clicked") },
    // Add more options as needed
  ];
  return (
    <div className="flex m-auto justify-center items-center">
      <HomeNav />
      <div className="flex flex-col h-screen">
        <div className="w-screen md:px-8 flex flex-row justify-center h-full m-auto md:overflow-hidden mt-14 lg:max-w-screen-2xl">
          <SideNav className="" />
          <div className="w-full  md:flex flex-row justify-center gap-8">
            <div className=" md:w-screen lg:w-9/12 mx-2 md:mx-8 flex flex-col  overflow-auto overflow-x-hidden max-w-6xl [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col m-4 md:mt-12 gap-5">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-5">
                  <div className="lg:hidden">
                    <img
                      width={60}
                      height={60}
                      src={Avatar}
                      alt="Avatar"
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="text-4xl font-semibold">John Doe</h1>
                    <div className="text-sm md:hidden">Wafuatiliaji 100</div>
                    <p className="my-1 text-xs text-lime-600 lg:hidden">Hariri Wasifu</p>
                  </div>
                </div>              
                <div className="flex flex-row gap-5 items-center">
                <div className="hidden md:block lg:hidden">
                  {/*<FollowBtn/>*/}
                </div>
                <ThreeDotMenu options={options} />
                </div>
              </div>
              <div className="md:hidden">
                {/* <FollowBtn/>*/} 
                </div>
              </div>
              <Tabs>
                <Tab label="Machapisho"></Tab>
                <Tab label="Kuhusu"></Tab>
              </Tabs>
            </div>
            <SideFeed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
