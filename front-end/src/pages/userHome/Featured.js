import React,{useRef, useState} from "react";
import FeaturedPost from "../../components/FeaturedPost";


function Featured() {
  const scrollableDivRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);

  const handleScroll = () => {
    const scrollableDiv = scrollableDivRef.current;
    setShowLeftButton(scrollableDiv.scrollLeft > 0);
  };

  const scrollLeft = () => {
    const scrollableDiv = scrollableDivRef.current;
    scrollableDiv.scrollBy({ left: -100, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const scrollableDiv = scrollableDivRef.current;
    scrollableDiv.scrollBy({ left: 100, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center relative">
      {showLeftButton && (
      <button
        onClick={scrollLeft}
        class="px-3 py-1 bg-slate-100 text-black  mr-2 rounded-full absolute  top-20 left-6 z-10"
      >
        &lt;
      </button>
      )}
      
      <div id="scrollableDiv" ref={scrollableDivRef} onScroll={handleScroll} className="mx-4 bg-white flex gap-3 items-center whitespace-nowrap w-full overflow-x-auto overflow-y-hidden overflow:clip [&::-webkit-scrollbar]:hidden">
        <FeaturedPost />
        <FeaturedPost />
        <FeaturedPost />
        <FeaturedPost />
        <FeaturedPost />
        <FeaturedPost />
      </div>  

      <button
        onClick={scrollRight}
        class="px-3 py-1 bg-slate-100 text-black  mr-2 rounded-full absolute top-20 right-4"
      >
        &gt;
      </button>    
    </div>
  );
}

export default Featured;
