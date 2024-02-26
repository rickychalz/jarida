import React, { useEffect, useRef, useState } from 'react';
import {Bell} from 'lucide-react'

const NotificationDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
 const dropdownRef = useRef(null);


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)){
            setShowDropdown(false);
        }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
        document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-flex" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
      >
        <Bell size={22} strokeWidth={1}/>
      </button>

      {showDropdown && (
        <div className="absolute top-5 right-3 mt-3 w-64 bg-white border border-zinc-200 rounded ">
          <div className="py-1">
            {/* Notifications go here */}
            <div className="px-4 py-2">Notification 1</div>
            <div className="px-4 py-2">Notification 2</div>
            <div className="px-4 py-2">Notification 3</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;