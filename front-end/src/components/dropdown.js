// DropdownMenu.js
import React, { useState, useEffect, useRef } from 'react';

const DropdownMenu = () => {

  const [isFlipped, setIsFlipped] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const dropdownElement = dropdownRef.current;

    // Function to check if the dropdown is offscreen
    const checkDropdownPosition = () => {
      const dropdownRect = dropdownElement.getBoundingClientRect();
      setIsFlipped(dropdownRect.right > window.innerWidth);
    };

    // Check dropdown position on mount and resize
    checkDropdownPosition();
    window.addEventListener('resize', checkDropdownPosition);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkDropdownPosition);
    };
  }, []);


  return (
    <div
    ref={dropdownRef}
    className={`relative ${isFlipped ? 'left-auto right-0' : ''}`}
     >
      <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
        <span>Options</span>
        <svg
          className="fill-current w-4 h-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Action 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Action 2
          </a>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;


