import React, { useState } from "react";
import DashBoardCard from "./DashBoardCard";

const RightPanel = () => {
  const [isStart, setIsStart] = useState(false);
  return (
    <div className="flex-1 h-screen overflow-y-auto py-9 px-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <h1 className="text-2xl text-bold text-[#59874f]">
            Choose your Land
          </h1>
          <select className="pr-5 pl-2 py-2 rounded-sm bg-[#eddd5e]">
            <option value="land1">Land 1</option>
            <option value="land1">Land 2</option>
            <option value="land1">Land 3</option>
            <option value="land1">Land 4</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl text-bold text-[#59874f]">PUMP</h1>
          <button
            className={`${
              isStart ? "bg-red-700" : " bg-green-700"
            } px-2 py-2 text-white text-bold text-2xl `}
            onClick={() => {
              setIsStart((prev) => !prev);
            }}
          >
            {isStart ? "Stop" : "Start"}
          </button>
        </div>
      </div>
      <div>
        <DashBoardCard />
      </div>
    </div>
  );
};

export default RightPanel;
