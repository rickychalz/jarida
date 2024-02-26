import React from "react";
import { Edit } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingButton = () => {
  return (
    <div className="fixed bottom-8 right-6 md:hidden">
      <button className="bg-lime-600  text-white font-bold py-4 px-4 rounded-full shadow-lg">
        <Link to="/write">
          <Edit size={25} strokeWidth={1} />
        </Link>
      </button>
    </div>
  );
};

export default FloatingButton;
