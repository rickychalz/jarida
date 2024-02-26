import React, {useState} from "react";
import Avatar from "../../assets/avatar.png";
import { Bell, Menu } from "lucide-react";
import SideDrawer from "../../components/SideDrawer";
import { Link } from "react-router-dom";
import NotificationDropdown from "../../components/NotificationDropDown";


const WriteNav = () => {
  const [isSearchPageVisible, setIsSearchPageVisible] = useState(false);

  const toggleSearchPage = () => {
    setIsSearchPageVisible(!isSearchPageVisible);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };
  return (
    <header className="fixed bg-white z-50 top-0">
      <nav className="border-b border-gray-100 flex w-screen justify-center">
        <div className="w-screen px-4 md:px-8 bg-white flex flex-row justify-between items-center py-3 z-50 lg:max-w-screen-2xl">
          <div className="flex flex-row items-center gap-2 ">
            <button className="text-2xl lg:hidden" onClick={handleToggleDrawer}>
              <Menu />
            </button>
            <h1 className="text-2xl font-bold "><Link to='/home'>Jarida.</Link></h1>
          </div>
          <div className="hidden md:block text-gray-400 text-lg">Untitled</div>
          <div className="flex flex-row gap-8 items-center">
            <button className="cursor-pointer bg-lime-600 text-white px-2 py-1 rounded-full">
              Publish
            </button>
            <NotificationDropdown/>
            <div>
              <Link to='/profile'>
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
        </div>
      </nav>
      <SideDrawer isOpen={isSideDrawerOpen} onClose={handleToggleDrawer} />
    </header>
  );
};

export default WriteNav;
