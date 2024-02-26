import React from 'react';
import {MessageCircle} from "lucide-react";

const CommentBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} >
      <MessageCircle size={22} strokeWidth={1}/>
    </button>
  );
};

export default CommentBtn;