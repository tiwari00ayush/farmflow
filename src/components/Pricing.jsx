import React from "react";
import PriceCard from "./PriceCard";
const Pricing = () => {
  const priceList = [
    { title: "", cost: "", benefits: ["1.", "2.", "3."] },
    { title: "", cost: "", benefits: ["1.", "2.", "3."] },
    { title: "", cost: "", benefits: ["1.", "2.", "3."] },
  ];
  return (
    <div className="px-9 py-9">
      <div className="flex justify-center items-center">
        <h1 className=" px-7 py-1 mb-8 text-4xl bg-[#eddd5e] font-serif m-auto text-gray-600">
          Pricing
        </h1>
      </div>
      <div className="flex flex-wrap items-stretch justify-center ">
        {priceList.map((price, index) => (
          <PriceCard />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
