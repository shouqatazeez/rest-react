import React from "react";

const ShimmerCard = () => {
  return (
    <div className="w-[200px] p-4 m-2 rounded-lg shadow bg-white animate-pulse">
      <div className="h-38 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2 mb-1"></div>
      <div className="h-3 bg-gray-300 rounded w-2/3"></div>
    </div>
  );
};

export default ShimmerCard;
