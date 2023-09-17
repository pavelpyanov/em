import React from "react";

const CardSceleton: React.FC = () => {
  return (
    <div className="flex flex-col rounded-xl shadow-md h-[400px] overflow-hidden hover:-translate-y-2 transition animate-pulse">
      <div className="h-1/3 w-full overflow-hidden rounded-t-xl relative bg-slate-200"></div>
      <div className="p-4 flex flex-col gap-5">
        <div className="w-1/2 h-5 bg-slate-200 rounded-md"></div>
        <div className="w-1/2 h-5 bg-slate-200 rounded-md"></div>
        <div className="w-full h-5 bg-slate-200 rounded-md"></div>
        <div className="w-full h-5 bg-slate-200 rounded-md"></div>
        <div className="w-1/4 h-5 bg-slate-200 rounded-md"></div>
      </div>
    </div>
  );
};

export default CardSceleton;
