import React, { useEffect } from "react";
import { useState } from "react";

const DashBoardCard = ({ title }) => {
  const moistureContent = Math.ceil(Math.random() * 100);
  const [barColor, setBarColor] = useState("red");
  const [condition, setCondition] = useState("");

  useEffect(() => {
    if (moistureContent >= 30 && moistureContent <= 60) setBarColor("green");
    else setBarColor("#ff4d52");
  }, [moistureContent]);
  useEffect(() => {
    if (moistureContent < 30) setCondition("Require more Water");
    else if (moistureContent >= 30 && moistureContent <= 60)
      setCondition("Sufficient Content");
    else setCondition("Overflow, require immediate attention");
  }, [moistureContent]);

  return (
    <div className="w-[500px] bg-[#93e9be]  px-4 py-7 mb-2 rounded-md relative">
      <h1 className="text-[1.5rem] mb-4 font-serif">{title}</h1>
      <p className="mb-1 font-sans">Percentage : {moistureContent}</p>
      <div className="w-full h-[40px]  relative mb-12">
        <span
          style={{
            width: `${moistureContent}%`,
            backgroundColor: `${barColor}`,
          }}
          className={`absolute left-0 top-0 bottom-0`}
        ></span>
      </div>
      <p className="mb-1 font-sans my-2  rounded-md absolute bottom-1 right-2 left-2 bg-gray-700 px-2 py-4 text-center text-white">
        {condition}
      </p>
    </div>
  );
};

export default DashBoardCard;
