import React from "react";
import Vector5 from "../../assets/vector5.png";
import { Search } from "lucide-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function HomeMain() {
  const [text] = useTypewriter({
    words: ["zinazovutia", "zinazofundisha", "zinazoelimisha"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className="flex w-full py-2 my-16 justify-center ">
      <div className="flex flex-row items-center justify-center lg:justify-between w-full">
        <div className="text-center lg:text-start flex flex-col lg:w-1/2 ">
          <h3 className="font-bold text-4xl lg:text-6xl my-4">
            Pata kusoma makala <span className="hidden md:inline">nyingi</span>
            <br className="xl:hidden" />{" "}
            <span className="inline-flex text-lime-600 text-4xl lg:text-6xl">
              {text}
            </span>
            <span className="inline-flex text-lime-600 text-4xl lg:text-6xl">
              <Cursor cursorStyle="|" />
            </span>
          </h3>
          <div className="text-sm lg:text-lg max-w-xl text-zinc-500 font-light">
            Jiunge na jumuiya yetu ya waandishi na wasomaji uweze kusoma mada na
            makala mbalimbali.......
          </div>
          <div className="flex flex-col gap-y-2.5 mt-10 relative max-w-xl items-center ">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6" />
              <input
                className="placeholder:font-normal rounded-lg pl-12 pr-3 w-full py-4 focus:outline-none shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
                placeholder="Tafuta makala..."
                type="text"
              />
            </div>
            <button className="w-32 bg-lime-600 text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
              {" "}
              Search
            </button>
          </div>
        </div>
        <div className="hidden w-1/2 lg:flex justify-end">
			<img src={Vector5} alt="Using computer" width={600}/>
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
