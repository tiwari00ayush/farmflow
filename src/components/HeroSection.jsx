import React from "react";
import herosection from "../assets/herosection.mp4";
import { FaArrowAltCircleDown } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div className="py-1 min-h-screen">
      <div className="relative h-full">
        <video
          src={herosection}
          autoPlay
          muted
          loop={true}
          height={"100%"}
          className="object-cover h-[100%]"
        ></video>
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#59874f] opacity-60"></div>
        <div className="text-center translate-y-[-80px] absolute top-1/2 bottom-1/2 left-1/2 right-1/2 ">
          <h1 className="font-mono text-4xl w-[600px] font-bold text-white text-center mb-1 -translate-x-1/2 -translate-y-1/2 animate-[dropup_4s_ease-in-out]">
            Maximize Your Crop Yields with Intelligent Water Management
          </h1>
          <p className="font-serif text-white w-[600px] mb-5 -translate-x-1/2 -translate-y-1/2 animate-[dropup_4s_ease-in-out]">
            Transform Your Agricultural Practices with Cutting-Edge Water
            Management Solutions Tailored to Your Farm's Unique Needs
          </p>
          <p className="w-[150px] mb-3 -translate-x-1/2 -translate-y-1/2 px-3 py-2 rounded-md bg-[#eddd5e] hover:bg-[#59874f] ease-in-out  hover:text-white duration-500 animate-[dropup_4s_ease-in-out]">
            Get Started
          </p>
        </div>
        <FaArrowAltCircleDown
          style={{
            color: "#eddd5e",
            position: "absolute",
            bottom: "100px",
            right: "100px",
            fontSize: "3rem",
          }}
          className=" animate-bounce"
        />
      </div>
    </div>
  );
};

export default HeroSection;
