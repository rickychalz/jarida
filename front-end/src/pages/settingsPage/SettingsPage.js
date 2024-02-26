import React from "react";
import HomeNav from "../../components/HomeNav";
import SideNav from "../../components/SideNav";
import SideFeed from "./SideFeed";
import { Tabs, Tab } from "../../components/MenuTabs";
import Footer from "../../components/Footer";

function SettingsPage() {
  return (
    <div className="flex m-auto justify-center items-center">
      <HomeNav />
      <div className="flex flex-col h-screen">
        <div className="w-screen md:px-8 flex flex-row justify-center h-full m-auto md:overflow-hidden mt-14 lg:max-w-screen-2xl">
          <SideNav className="" />
          <div className="w-full  md:flex flex-row justify-center gap-8">
            <div className=" md:w-screen lg:w-8/12 mx-2 md:mx-8 flex flex-col  overflow-auto overflow-x-hidden max-w-6xl [&::-webkit-scrollbar]:hidden">
              <div className="m-4 md:mt-12">
                <h1 className="text-4xl md:text-5xl font-semibold">Mipangilio</h1>
              </div>
              <Tabs>
                <Tab label="Akaunti">
                
                </Tab>
                <Tab label="Uchapishaji">
                  
                </Tab>
                <Tab label="Taarifa">
                  
                </Tab>
                <Tab label="Ulinzi&Faragha">
                  
                </Tab>
              </Tabs>
            </div>
            <div className="hidden self-start sticky mt-8 top-0 p-4 lg:w-4/12 lg:flex flex-col gap-5 ">
            <SideFeed />
            <Footer/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
