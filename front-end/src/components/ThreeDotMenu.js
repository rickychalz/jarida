import React, { useState, useEffect, useRef } from 'react';
import { MoreVertical } from 'lucide-react';
import {Link} from 'react-router-dom';

const ThreeDotMenu = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

 
  return (
    <div className="relative inline-flex" ref={menuRef}>
      <button
        onClick={toggleMenu}
      >
        <MoreVertical size={22} strokeWidth={1}/>
      </button>
      {isOpen && (
        <div className="absolute top-4 right-2 mt-4 w-40 bg-white border  border-zinc-200 rounded text-sm">
          {options.map((option, index) => (
            <Link
              key={index}
              onClick={option.onClick}
              className="block w-full px-4 py-2 text-gray-800"
            >
              {option.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThreeDotMenu;
