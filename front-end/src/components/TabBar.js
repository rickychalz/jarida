import React, { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react"

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
    { id: 1, content: "Zote" },
    { id: 2, content: "Kwa ajili yako" },
    { id: 3, content: "Unaowafuatilia" },
    { id: 4, content: "Afya" },
    { id: 5, content: "Siasa" },
    { id: 6, content: "Tamaduni" },
    { id: 7, content: "Historia" },
    { id: 8, content: "Filamu" },
    { id: 9, content: "Biashara" },
    { id: 10, content: "Habari" },
    { id: 11, content: "Viatu" },
    { id: 12, content: "Misitu" },
    { id: 13, content: "Utalii" },
    { id: 14, content: "Safari" },
    { id: 15, content: "Kilimo" },
    { id: 16, content: "Ufugaji" },
    { id: 17, content: "Misitu" },
    { id: 18, content: "Utalii" },
    { id: 19, content: "Safari" },
    { id: 20, content: "Kilimo" },
    { id: 21, content: "Ufugaji" },
    { id: 22, content: "Uvuvi" },
    { id: 23, content: "Viwanda" },
    { id: 24, content: "Udereva" },
    { id: 25, content: "Hadithi" },
    { id: 26, content: "Vyakula" },
    { id: 27, content: "Michezo" },
    { id: 28, content: "Muziki" },
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
      {showLeftButton && (
        <button
        style={{backgroundColor:'#f5f5f5'}}
          onClick={scrollLeft}
          class="px-3 py-1  text-black mr-2 rounded-full absolute top-0.5 -left-2"
        >
          &lt;
        </button>
      )}

      <div
        id="scrollableDiv"
        ref={scrollableDivRef}
        onScroll={handleScroll}
        className="bg-white flex gap-3 items-center whitespace-nowrap pr-8  w-full overflow-x-auto overflow:clip [&::-webkit-scrollbar]:hidden "
      >
        <button style={{backgroundColor:'#f5f5f5'}} className = "py-1 px-1 rounded-full">
          <Plus size={20}/>
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
      <button
      style={{backgroundColor:'#f5f5f5'}}
        onClick={scrollRight}
        class="px-3 py-1  text-black mr-2 rounded-full absolute top-0.5 -right-4"
      >
        &gt;
      </button>
    </div>
  );
}

export default TabBar;
