import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function TypeEffect() {
  const [text] = useTypewriter({
    words: ['Andika', 'Fundisha', 'Soma', 'Jifunze', 'Burudika'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    
      <div>
        <span className=" text-green-600 font-bold text-5xl">{text}</span>
        <span className="text-green-600 text-5xl">
          <Cursor cursorStyle="|" />
        </span>
      </div>
    
  );
}

export default TypeEffect;
