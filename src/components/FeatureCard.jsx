import React from "react";
const FeatureCard = ({ feature }) => {
  return (
    <div className="py-4 px-2 w-[250px] border-solid border-2 border-black mx-3 shadow-lg shadow-[#59874f]">
      <div className="flex gap-2 items-center mb-3">
        <img
          style={{
            fontSize: "3rem",
            borderRadius: "50%",
            width: "40px",
          }}
          src={feature.icon}
        />
        <h3 className="font-bold text-[1.2rem]">{feature.name}</h3>
      </div>
      <p className="text-left text-gray-500">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
