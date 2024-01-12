import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[46vh] bg-center bg-no-repeat flex items-end bg-gray-950"
      style={{
        backgroundImage: `url(https://assets-in.bmscdn.com/discovery-catalog/events/et00311714-ewdhvajezf-landscape.jpg)`,
      }}
    >
      <div className="text-xl md:text-3xl text-white text-center w-full bg-gray-900 bg-opacity-60 p-4">
        John Wick
      </div>
    </div>
  );
}

export default Banner;
