import React from "react";
import { useNavigate,NavLink } from "react-router-dom";
import { Home, Bell, Library, Newspaper, LogOut, Settings } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/user";

function SideNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');

  };
  return (
    <div className="hidden xl:block border-r border-zinc-100 py-6 pr-8 text-zinc-500 font-light">
      {userState.userInfo ? (
        <div className="flex flex-col h-full justify-between">
          <div>
            <ul className="flex flex-col gap-8 h-3/5">
              <li>
                <NavLink
                  to="/home"
                  className="flex flex-row items-center gap-4 hover:text-lime-600 transition-all duration-150 cursor-pointer"
                >
                  <Home size={22} strokeWidth={1} />
                  <span className="hidden lg:block  ">Nyumbani</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notifications"
                  className="flex flex-row items-center gap-4 hover:text-lime-600 transition-all duration-150 cursor-pointer"
                >
                  <Bell size={22} strokeWidth={1} />
                  <h1 className="hidden lg:block">Taarifa</h1>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/library"
                  className="flex flex-row items-center gap-4 hover:text-lime-600 transition-all duration-150 cursor-pointer"
                >
                  <Library size={22} strokeWidth={1} />
                  <h1 className="hidden lg:block">Kabati</h1>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myarticles"
                  className="flex flex-row items-center gap-4 hover:text-lime-600 transition-all duration-150 cursor-pointer"
                >
                  <Newspaper size={22} strokeWidth={1} />
                  <h1 className="hidden lg:block">Makala</h1>
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-8  h-2/5 justify-end">
              <li>
                <NavLink
                  to="/settings"
                  className="flex flex-row items-center gap-4 hover:text-lime-600 transition-all duration-150 cursor-pointer"
                >
                  <Settings size={22} strokeWidth={1} />
                  <h1 className="hidden lg:block">Mipangilio</h1>
                </NavLink>
              </li>
              <li>
                <button
                  onClick={logoutHandler}
                  type="button"
                  className="flex flex-row items-center gap-4 transition-all duration-150 cursor-pointer "
                >
                  <LogOut size={22} strokeWidth={1} className="text-red-600" />
                  <h1 className=" text-red-600 hidden lg:block">Toka</h1>
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-full justify-between">
          <div>
            <ul className="flex flex-col gap-8 h-3/5">
              <li>
                <NavLink
                  to="/home"
                  className="flex flex-row items-center gap-4 hover:text-lime-600 transition-all duration-150 cursor-pointer"
                >
                  <Home size={22} strokeWidth={1} />
                  <span className="hidden lg:block  ">Nyumbani</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notifications"
                  className="flex flex-row items-center gap-4 hover:text-lime-600 transition-all duration-150 cursor-pointer"
                >
                  <Bell size={22} strokeWidth={1} />
                  <h1 className="hidden lg:block">Taarifa</h1>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/library"
                  className="flex flex-row items-center gap-4 hover:text-lime-600 transition-all duration-150 cursor-pointer"
                >
                  <Library size={22} strokeWidth={1} />
                  <h1 className="hidden lg:block">Kabati</h1>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myarticles"
                  className="flex flex-row items-center gap-4 hover:text-lime-600 transition-all duration-150 cursor-pointer"
                >
                  <Newspaper size={22} strokeWidth={1} />
                  <h1 className="hidden lg:block">Makala</h1>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideNav;
