import React from "react";

const LoadingImage = () => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full p-4">
        <div className="skeleton h-48 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </>
  );
};

export default LoadingImage;
