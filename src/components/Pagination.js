import React from "react";

function Pagination(props) {
  let { pageNumProp, onNextProp, onPrevProp } = props;

  return (
    <div className="flex justify-center my-4">
      <div
        onClick={onPrevProp}
        className="border-2 p2 rounded-l-xl border-white-400 border-r-0 bg-zinc-600 w-20 text-center text-white hover:scale-110 duration-300 cursor-pointer"
      >
        Previous
      </div>
      <div className="border-2 p2 border-white-400 border-r-0 bg-zinc-600 w-20 text-center text-white hover:scale-110 duration-300 cursor-pointer">
        {pageNumProp}
      </div>
      <div
        onClick={onNextProp}
        className="border-2 p2 rounded-r-xl border-white-400 border-r-0 bg-zinc-600 w-20 text-center text-white hover:scale-110 duration-300 cursor-pointer"
      >
        Next
      </div>
    </div>
  );
}

export default Pagination;
