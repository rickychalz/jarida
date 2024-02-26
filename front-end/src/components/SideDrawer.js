import React from 'react';
import { NavLink } from "react-router-dom";
import {
  Home,
  Bell,
  Library,
  Newspaper,
  LogOut,
  Settings,
} from "lucide-react";

const SideDrawer = ({ isOpen, onClose }) => {
  const handleItemClick = (item) => {
    // Add logic to handle item click
    // For example, navigate to a different page
  };

  return (
    <div className={`fixed inset-y-0 border border-zinc-100 left-0 w-64 bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300`}>
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-xl">&times;</button>
      </div>
      <ul >
        
        <li>
          <NavLink to="/home" onClick={() => handleItemClick('Item 1')} className="p-4 cursor-pointer hover:bg-gray-100 flex flex-row items-center gap-4">
          <Home/> Nyumbani
          </NavLink>
          </li>
        <li>
          <NavLink to="/notifications" onClick={() => handleItemClick('Item 2')} className="p-4 cursor-pointer hover:bg-gray-100 flex flex-row items-center gap-4">
          <Bell/> Taarifa
          </NavLink>        
          </li>
        <li >
          <NavLink to="/library" onClick={() => handleItemClick('Item 3')} className="p-4 cursor-pointer hover:bg-gray-100 flex flex-row items-center gap-4">
          <Library/> Kabati
          </NavLink>       
          </li>
        <li >
          <NavLink to="/myarticles" onClick={() => handleItemClick('Item 4')} className="p-4 cursor-pointer hover:bg-gray-100 flex flex-row items-center gap-4">
          <Newspaper/> Makala
          </NavLink>  
          </li>      
        <li >
          <NavLink to="/settings" onClick={() => handleItemClick('Item 5')} className="p-4 cursor-pointer hover:bg-gray-100 flex flex-row items-center gap-4">
          <Settings/>Mipangilio
          </NavLink>    
          </li>
        <li >
          <NavLink to="/logout" onClick={() => handleItemClick('Item 6')} className="p-4 cursor-pointer hover:bg-gray-100 flex flex-row items-center gap-4 text-red-400">
          <LogOut/>Toka
          </NavLink>
          </li>
        
        
        
      </ul>
    </div>
  );
};

export default SideDrawer;