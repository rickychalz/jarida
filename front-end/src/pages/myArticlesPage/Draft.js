import React from "react";
import ThreeDotMenu from "../../components/ThreeDotMenu";
import LimitWords from "../../components/LimitWords";

function Draft() {
  const options = [
    { label: "Hariri Rasimu", onClick: () => alert("Option 1 clicked") },
    { label: "Futa Rasimu", onClick: () => alert("Option 2 clicked"),},
    // Add more options as needed
  ];

  return (
    <div className="flex flex-col border-b border-gray-100 my-2 pt-2 pb-4 max-w-6xl gap-2">
      <div className="flex flex-col gap-2">
        <h3 className=" text-sm sm:text-base md:text-xl font-bold">
          Jinsi ya kupata chakula bomba sana Dar es salaam
        </h3>
        <p className="hidden md:block text-sm  max-w-xl">
          <LimitWords
            text="Excepteur excepteur aliquip ex laboris laboris.Aute dolor amet
              commodo enim ea consequat Excepteur excepteur aliquip ex laboris laboris.Aute dolor amet
              commodo enim ea consequat Excepteur excepteur aliquip ex laboris laboris.Aute dolor amet
              commodo enim ea consequat"
            limit={50}
          />
        </p>
      </div>
      <div className="flex flex-row items-center w-full justify-between">
        <div className="text-xs md:text-sm">Mara ya mwisho kuhaririwa siku 20 zilizopita</div>
          <ThreeDotMenu options={options} />        
      </div>
    </div>
  );
}

export default Draft;
