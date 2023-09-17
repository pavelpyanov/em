import React from "react";
import CardSceleton from "../Card/CardSceleton";

const PostsSceleton: React.FC = () => {
  return (
    <>
      <div className="flex flex-row gap-3">
        <button
          className="p-2 border rounded-xl bg-green-400 disabled:bg-gray-200 disabled:text-gray-400"
          disabled
        >
          Prev
        </button>
        <button
          className="p-2 border rounded-xl bg-green-400 disabled:bg-gray-200 disabled:text-gray-400"
          disabled
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <CardSceleton />
        <CardSceleton />
        <CardSceleton />
      </div>
    </>
  );
};

export default PostsSceleton;
