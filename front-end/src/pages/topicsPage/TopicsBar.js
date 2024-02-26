import React, { useEffect, useRef, useState } from "react";
import { Compass } from "lucide-react"

function TabBar() {
  const scrollableDivRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);

  const handleScroll = () => {
    const scrollableDiv = scrollableDivRef.current;
    setShowLeftButton(scrollableDiv.scrollLeft > 0);
  };

  const scrollLeft = () => {
    const scrollableDiv = scrollableDivRef.current;
    scrollableDiv.scrollBy({ left: -100, behavior: "smooth" });
  };

  const scrollRight = () => {
    const scrollableDiv = scrollableDivRef.current;
    scrollableDiv.scrollBy({ left: 100, behavior: "smooth" });
  };

  const [topics, setTopics] = useState([
   
    { id: 1, content: "Afya" },
    { id: 2, content: "Siasa" },
    { id: 3, content: "Tamaduni" },
    { id: 4, content: "Historia" },
    { id: 5, content: "Filamu" },
    { id: 6, content: "Biashara" },
    { id: 7, content: "Habari" },
    { id: 8, content: "Viatu" },
    
  ]);

  const randomColor = () => {
    const r = Math.floor(Math.random() * 150) + 100; // Red value between 100 and 250
    const g = Math.floor(Math.random() * 150) + 100; // Green value between 100 and 250
    const b = Math.floor(Math.random() * 150) + 100; // Blue value between 100 and 250

    return `rgb(${r},${g},${b})`;
  };

  useEffect(() => {
    const storedColors = localStorage.getItem("colors");

    if (storedColors) {
      setColors(JSON.parse(storedColors));
    } else {
      const newColors = topics.map(() => randomColor());
      setColors(newColors);
      localStorage.setItem("colors", JSON.stringify(newColors));
    }
  }, [topics]);

  const [colors, setColors] = useState([]);

  return (
    <div className="flex items-center relative">
     

      <div
        id="scrollableDiv"
        ref={scrollableDivRef}
        onScroll={handleScroll}
        className="bg-white flex gap-3 items-center whitespace-nowrap pr-8  w-full overflow-x-auto overflow:clip [&::-webkit-scrollbar]:hidden "
      >
        <button style={{backgroundColor:'#f5f5f5'}} className = "py-2 px-2  rounded-full">
          <Compass size={22} strokeWidth={1.5}/>
        </button>
        {topics.map((topic, index) => (
          <div
            key={topic.id}
            style={{ backgroundColor: '#f5f5f5' }}
            className="px-3 py-2 rounded-full text-sm text-black cursor-pointer"
          >
            {topic.content}
          </div>
        ))}
        
      </div>
     
    </div>
  );
}

export default TabBar;
