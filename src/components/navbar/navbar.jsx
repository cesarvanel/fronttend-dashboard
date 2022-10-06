import React from "react";

import {
  Bell,
  MagnifyingGlass,
  Envelope,
  ArrowsLeftRight,
} from "phosphor-react";
import avatar from "../assets/avatar.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="avatar">
        <img src={avatar} alt="" />
        <div className="info">
          <h4 className="title">César Vanel </h4>
          <h6 className="status">Online</h6>
        </div>
      </div>

      <div className="quick">
        <button>
          {" "}
          <ArrowsLeftRight weight="fill" />
          Quick Transitions
        </button>
      </div>
      <div className="navbar__info">
        <Bell weight="light" />
        <Envelope weight="light" />
        <div className="search__bar">
          <input type="text" placeholder="Search" />
          <MagnifyingGlass weight="fill" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
