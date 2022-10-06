/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import {
  UserCircle,
  House,
  GearSix,
  Wallet,
  Money,
  Newspaper,
  GridFour,
  Coin,
} from "phosphor-react";
function Sidebar() {
  const links = [
    {
      title: "Dashboard",
      icon: House /* <House  weight="fill" color= "#fff" /> */,
    },
    {
      title: "Buy/Sell",
      icon: GridFour /* <GridFour   weight="fill" color= "#fff" /> */,
    },
    {
      title: "News",
      icon: Newspaper /* <Newspaper   weight="fill" color= "#fff" /> */,
    },
    {
      title: "Send Money",
      icon: Money /* <Money weight="fill" color= "#fff" /> */,
    },
    {
      title: "Deposit",
      icon: Coin /* <Coin  weight="fill" color= "#fff" />  */,
    },
    {
      title: "Transactions",
      icon: Wallet /* <Wallet  weight="fill" color= "#fff" /> */,
    },
    {
      title: "Account",
      icon: UserCircle /* <UserCircle  weight="fill" color= "#fff" /> */,
    },
    {
      title: "Setting",
      icon: GearSix /* <GearSix  weight="fill" color= "#fff" /> */,
    },
  ];
  return (
    <div className="sidebar">
      <div className="brand">
        <h2>
          FIN<span>TECH</span>
        </h2>
      </div>

      <ul className="links">
        {links.map((link, index) => {
          return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <li key={index}>
              {" "}
              <a href="#">
                {<link.icon />}
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
