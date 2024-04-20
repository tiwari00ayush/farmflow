import React from "react";
import Header from "../components/Header";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
const DashBoard = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
};

export default DashBoard;
