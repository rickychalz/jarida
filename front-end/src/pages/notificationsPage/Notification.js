import React from "react";
import Avatar from "../../assets/avatar.png";
import ThreeDotMenu from "../../components/ThreeDotMenu";


function Post() {
  const options = [
    { label: "Option 1", onClick: () => alert("Option 1 clicked") },
    { label: "Option 2", onClick: () => alert("Option 2 clicked") },
    // Add more options as needed
  ];

  return (
    <div className="flex flex-col border-b border-gray-100 my-2 pb-4 max-w-6xl">
      <div className="flex flex-row gap-4">
        <div>
          <img
            width={40}
            height={40}
            src={Avatar}
            alt="Avatar"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-2">
          <div className="text-xs md:text-sm font-semibold">John Doe</div>
          <span className="text-xs md:text-sm">ameanza kukufuatilia</span>
        </div>
        <div className="text-xs md:text-sm">Jul 16</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
