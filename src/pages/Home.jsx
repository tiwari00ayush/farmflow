import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import flow from "../assets/flow.png";
import AboutUs from "../components/AboutUs";
const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <Features />
      <Pricing />
      <div className="flex justify-center items-center bg-[#59874f] ">
        <img
          src={flow}
          alt=""
          className="my-5 w-[800px] border-black border-2"
        />
      </div>
      <AboutUs />
      <div className="w-full py-2 bg-[#59874f]">
        <h1 className="text-center text-white">Copyright © 2024 FarmFlow</h1>
      </div>
    </div>
  );
};

export default Home;
