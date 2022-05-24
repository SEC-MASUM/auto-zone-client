import React from "react";
import notFound from "../../Assets/images/notFound.jpg";
const NotFound = () => {
  return (
    <div className="bg-[#FFD83B] h-screen flex justify-center items-center">
      <img className="max-h-screen" src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
