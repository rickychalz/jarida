import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/avatar.png";
import { Edit, Menu } from "lucide-react";
import { SearchBar } from "./SearchBar";
import SideDrawer from "./SideDrawer";
import SearchBtn from "./SearchBtn";
import SearchPage from "./SearchPage";
import NotificationDropdown from "./NotificationDropDown";
import { useSelector } from "react-redux";
import GetStartedBtn from "./GetStartedBtn";
import Login from "./Login";



const HomeNav = () => {


  const userState = useSelector((state) => state.user);

  const [isSearchPageVisible, setIsSearchPageVisible] = useState(false);

  const toggleSearchPage = () => {
    setIsSearchPageVisible(!isSearchPageVisible);
  };


  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };

 
  return (
    <header className="fixed bg-white z-50 top-0">
      <nav className="border-b border-zinc-100 flex w-screen justify-center">
        <div className="w-screen px-4 md:px-8 bg-white flex flex-row justify-between items-center py-2 z-50 lg:max-w-screen-2xl">
          <div className="flex flex-row items-center gap-2 ">
            <button className="text-2xl xl:hidden" onClick={handleToggleDrawer}>
              <Menu />
            </button>
            <h1 className="text-2xl font-bold text-zinc-800 ">
              <Link to="/home">Jarida.</Link>
            </h1>
          </div>
          <SearchBar  />
          <div className="flex flex-row gap-4 lg:gap-8 items-center text-zinc-500">
            <SearchBtn toggleSearchPage={toggleSearchPage} />

            <button className="hidden md:block cursor-pointer">
              <Link to="/write">
                <Edit size={22} strokeWidth={1} />
              </Link>
            </button>
            {userState.userInfo ? (
              <div className="flex flex-row gap-8 items-center">
                <NotificationDropdown />
                <div>
                  <Link to="/profile">
                    <img
                      src={Avatar}
                      alt="Avatar"
                      width={30}
                      height={30}
                      className="border rounded-full"
                    />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-row gap-4 lg:gap-8 items-center">
                {" "}
                <Login/>
                <GetStartedBtn/>
              </div>
            )}
          </div>
        </div>
      </nav>
      <SearchPage
        isSearchPageVisible={isSearchPageVisible}
        toggleSearchPage={toggleSearchPage}
      />
      <SideDrawer isOpen={isSideDrawerOpen} onClose={handleToggleDrawer} />
      
    </header>
  );
};

export default HomeNav;
