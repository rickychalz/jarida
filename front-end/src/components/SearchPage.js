import React from "react";
import { X } from "lucide-react";

const SearchPage = ({ isSearchPageVisible, toggleSearchPage }) => {
  return (
    <div
      className={`w-screen h-screen flex flex-col bg-white  ${
        isSearchPageVisible ? "" : "hidden"
      }`}
    >
      <button onClick={toggleSearchPage} className="flex justify-end px-4 py-2">
        <X size={30} />
      </button>

      <div className="relative flex items-center justify-center mt-4">
        <input
          type="text"
          placeholder="Tafuta..."
          className="text-3xl border-b py-2  w-72 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchPage;
