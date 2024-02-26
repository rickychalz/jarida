import React from "react";
import HomeNav from "../../components/HomeNav";
import SideNav from "../../components/SideNav";
import DraftFeed from "./DraftFeed";
import PublishedFeed from "./PublishedFeed";
import SideFeed from "../../components/SideFeed";
import { Tabs, Tab } from "../../components/MenuTabs";
import FloatingButton from "../../components/FloatingBtn";
import {Link} from 'react-router-dom';

function myArticlesPage() {
  return (
    <div className="flex m-auto justify-center items-center">
      <HomeNav />
      <div className="flex flex-col h-screen">
        <div className="w-screen md:px-8 flex flex-row justify-center h-full m-auto md:overflow-hidden mt-14 lg:max-w-screen-2xl">
          <SideNav className="" />
          <div className="w-full  md:flex flex-row justify-center gap-8">
            <div className=" md:w-screen lg:w-8/12 mx-2 md:mx-8 flex flex-col  overflow-auto overflow-x-hidden max-w-6xl [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-row items-center justify-between m-4 md:mt-12">
                <h1 className="text-4xl md:text-5xl font-semibold">Makala</h1>
                <div className="hidden md:flex items-center">
                  <Link to ="/write">
                  <div className="px-3 py-2 bg-lime-600 text-white rounded-full">Andika Makala</div>
                  </Link>
                </div>
              </div>
              <Tabs>
              <Tab label="Rasimu">
                  <DraftFeed/>
                  </Tab>
                <Tab label="Zilizochapishwa">
                  <PublishedFeed/>
                </Tab>
                
              </Tabs>
            </div>
            <SideFeed />
          </div>
        </div>
      </div>
      <FloatingButton/>
    </div>
  );
}

export default myArticlesPage;
