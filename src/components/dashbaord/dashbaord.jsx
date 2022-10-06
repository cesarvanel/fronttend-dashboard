import React from "react";
import Navbar from "../navbar/navbar";
import Wallets from "../wallets/wallets";

import "./dashbaord.scss";

const DashBaord = () => {
  return (
    <div className="dashbaord">
      <Navbar />

      <div className="dashboard__grid">
        
        <div className="dasboard__grid__1">
          <Wallets/>
        </div>
        <div className="dashboard__grid__2">
          
        </div>
      </div>
    </div>
  );
};

export default DashBaord;
