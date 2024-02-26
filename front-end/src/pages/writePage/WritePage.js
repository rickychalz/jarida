import React from 'react';
import WriteNav from './WriteNav';
import { Editor } from 'novel';
import EditorComponent from '../../components/EditorComponent';

function WritePage() {
  return (
    <div className="flex m-auto justify-center items-center">
    <WriteNav />
    <div className="w-screen  px-8 flex h-full  md:overflow-hidden mt-14 md:max-w-screen-md lg:max-w-screen-lg">
    <EditorComponent/>
   </div>
  </div>
  )
}

export default WritePage