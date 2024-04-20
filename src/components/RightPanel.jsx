import React, { useState } from "react";
import DashBoardCard from "./DashBoardCard";
import clouds from "../assets/clouds.png";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";
import { GiPlantWatering } from "react-icons/gi";
const RightPanel = () => {
  const [isStart, setIsStart] = useState(false);
  return (
    <div className="flex-1 h-screen overflow-y-auto py-9 px-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <h1 className="text-2xl text-bold ">Choose your Land</h1>
          <select className="pr-5 pl-2 py-2 rounded-sm bg-[#eddd5e]">
            <option value="land1">Land 1</option>
            <option value="land1">Land 2</option>
            <option value="land1">Land 3</option>
            <option value="land1">Land 4</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button
            className={`${
              isStart ? "bg-red-700" : " bg-green-700"
            } px-2 py-2 text-white text-bold text-2xl rounded-md `}
            onClick={() => {
              setIsStart((prev) => !prev);
            }}
          >
            {isStart ? "Stop" : "Start"}
          </button>
        </div>
      </div>
      <div className="py-9 flex flex-wrap gap-10 justify-center items-stretch">
        <DashBoardCard title={"Soil Moisture content"} />
        <DashBoardCard title={"Water Flow"} />
        <div className="w-[500px] bg-[#93e9be]  px-4 py-3 mb-2 rounded-md">
          <h1 className="text-[1.5rem] mb-4">Weather Forecast</h1>
          <div className="flex justify-between w-full">
            <div className="flex flex-col items-center relative">
              <img src={clouds} alt="clouds" className="w-[120px] mb-20" />
              <p className="mb-1 font-sans my-2  rounded-md absolute bottom-1 right-2 left-2 bg-gray-700 px-2 py-4 text-center text-white">
                Cloudy
              </p>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center w-[50%] text-[1.3rem] text-white">
              <span className="flex items-center py-1 px-4 bg-gray-700">
                <FaTemperatureHigh
                  style={{ marginInline: "10px", color: "yellow" }}
                />{" "}
                : 36`c
              </span>
              <span className="flex items-center py-1 px-4 bg-gray-700">
                <WiHumidity style={{ marginInline: "10px", color: "yellow" }} />{" "}
                : 36`c
              </span>
              <span className="flex items-center py-1 px-4 bg-gray-700">
                <FaWind style={{ marginInline: "10px", color: "yellow" }} /> :
                36`c
              </span>
            </div>
          </div>
        </div>
        <div className="w-[500px] bg-[#93e9be]  px-4 py-3 mb-2 rounded-md">
          <h1 className="text-[1.5rem] mb-4">Next Irrigation On </h1>
          <div className="flex justify-between w-full">
            <div className="flex justify-center items-center h-full">
              <GiPlantWatering
                style={{
                  fontSize: "7rem",
                  marginLeft: "30px",
                  marginTop: "40px",
                }}
              />
            </div>

            <div className="flex flex-col gap-5 justify-center items-center w-[50%] text-[1.3rem] text-white ">
              <div className="bg-gray-700 flex flex-col px-10 py-5 rounded-md">
                <span className="text-8xl">10</span>
                <span className="text-center">Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
