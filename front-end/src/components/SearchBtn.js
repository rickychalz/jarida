import React, { useState } from 'react';
import { Search } from "lucide-react";

const SearchBtn = ({ toggleSearchPage }) => {
  return (
    <button
      onClick={toggleSearchPage}
      className='md:hidden'   
    >
      <Search size={22} strokeWidth={1}/>
    </button>
  );
};

export default SearchBtn;
