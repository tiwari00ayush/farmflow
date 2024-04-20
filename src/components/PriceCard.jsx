import React from "react";

const PriceCard = () => {
  return (
    <div className="px-2 py-4 border-black border-2 shadow-lg shadow-green-600 mx-5 w-[300px]">
      <h1 className="text-2xl text-center font-bold">Basic model</h1>
      <h2 className="text-center">Rs 200</h2>
      <ul
        type="bullet"
        className="flex flex-col gap-2 py-2 text-[0.9rem] text-gray-500"
      >
        <li>
          1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          dicta ullam enim exercita
        </li>
        <li>
          2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          dicta ullam enim exercita
        </li>
        <li>
          3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          dicta ullam enim exercita
        </li>
        <li>
          4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          dicta ullam enim exercita
        </li>
      </ul>
    </div>
  );
};

export default PriceCard;
