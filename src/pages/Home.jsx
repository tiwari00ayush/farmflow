import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <Features />
    </div>
  );
};

export default Home;
