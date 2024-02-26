import React from 'react';
import { stables } from "../constants";

function Avatar() {
  return (
    <div className='flex flex-row items-center gap-x-4'>
        <div>
        <label htmlFor=''>
            {avatar ? (
                <img src = {stables.UPLOAD_FOLDER_BASE_URL + avatar} alt="" />
            )}
        </label>
        <input type='file' className='sr-only'/>
        </div>
          <button type='button' className='text-red-600'>Delete</button>
        </div>
  );
};

export default Avatar