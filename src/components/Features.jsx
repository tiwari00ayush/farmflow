import React from "react";
import FeatureCard from "./FeatureCard";
import weather from "../assets/weather.png";
import moisture from "../assets/moisture.png";
import waterlevel from "../assets/waterlevel.png";
import alert from "../assets/alert.png";
const Features = () => {
  const featureList = [
    {
      name: "Weather forecast",
      description:
        "Get ahead of changing weather patterns with our Weather Forecast Integration. Receive real-time updates on rainfall, temperature, and humidity to optimize irrigation schedules and maximize crop yield.",
      icon: weather,
    },
    {
      name: "Moisture Content",
      description:
        "Monitor soil moisture levels in real-time with our Soil Moisture Monitoring feature. Ensure optimal hydration for your crops, leading to healthier plants and increased yields.",
      icon: moisture,
    },
    {
      name: "Water Level",
      description:
        "Track water levels with precision using our Water Level Monitoring feature. Stay informed about available water resources, ensuring efficient usage and sustainable farming practices.",
      icon: weather,
    },
    {
      name: "Alert",
      description:
        "Receive instant alerts with our Alert feature. Stay notified about critical events such as low soil moisture levels or impending rainfall, empowering proactive decision-making for optimal crop management.",
      icon: weather,
    },
  ];
  return (
    <div className="px-9 py-9">
      <div className="flex justify-center items-center">
        <h1 className=" px-7 py-1 mb-8 text-4xl bg-[#eddd5e] font-serif m-auto text-gray-600">
          Features
        </h1>
      </div>
      <div className="flex flex-wrap items-stretch justify-center">
        {featureList.map((feature, index) => (
          <FeatureCard feature={feature} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
