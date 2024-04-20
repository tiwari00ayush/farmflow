import React from "react";

const AboutUs = () => {
  return (
    <div className="flex h-[400px] my-10 border-black border-2">
      <div className="flex justify-center items-center flex-1 bg-gradient-to-r from-green-700 to-[#59874f] ">
        <h1 className="text-5xl text-white">About Us</h1>
      </div>
      <div className="flex-1 text-white bg-gradient-to-r from-[#59874f] to-green-700 flex justify-center items-center px-10">
        <p>
          Founded on a mission to revolutionize agriculture, FarmFlow is
          dedicated to empowering farmers with innovative water management
          solutions. Our team of experts brings together a unique blend of
          agronomic expertise, engineering prowess, and technological innovation
          to address the challenges facing modern farming.
          <br />
          <br />
          Driven by a deep commitment to sustainability and efficiency, we've
          developed a comprehensive Smart Water Management System that leverages
          state-of-the-art technologies such as IoT sensors, machine learning
          algorithms, and real-time data analytics. This powerful platform
          enables farmers to monitor soil moisture levels, predict weather
          patterns, and optimize irrigation schedules with precision and
          accuracy.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
