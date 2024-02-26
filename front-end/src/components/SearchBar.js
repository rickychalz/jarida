import React from 'react'
import {Search} from 'lucide-react';

export const SearchBar = ({onChange}) => {
  return (
    <div className='hidden relative md:flex items-center'>
        <input 
            type="text"
            placeholder='Tafuta...'
            onChange = {onChange}
            className=' placeholder-zinc-500 border-0 bg-zinc-100 py-2 pl-10 pr-4 rounded-full w-72 focus:outline-none'
        />
        <div className='absolute left-3 text-zinc-500'>
            <Search size={20} strokeWidth={1} />
        </div>
    </div>
  )
}
