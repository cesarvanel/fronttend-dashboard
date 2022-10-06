import React from "react";
import { DotsThreeOutline } from "phosphor-react";
import bitcoin from '../assets/bitcoin.jpg' 
import ether from '../assets/ether.png'

function Wallets() {
  const wallets = [
    {
      name: "BTC bitcoin",
      balance: "1,777.10",
      USD: "9,241,123.31",
      image: bitcoin,
    },

    {
      name: "ETH (Ether)",
      balance: "4.251.21",
      USD: "21,112,67",
      image: ether,
    },
  ];
  return (
    <div>
      <div className="wallets">
        <div className="wallets__info">
          <h4>Wallets</h4>
          <DotsThreeOutline weight="fill" />
        </div>

        <div className="wallets__conainer">
          {wallets.map((wallet, index) => {
            return (
              <div className="wallet" key={index}>
                <img src= {wallet.image} alt="" />
                <div className="wallet__info">
                  <h3 className="wallet__info__title">{wallet.name}</h3>
                  <div className="wallet__info__balance">
                    <h4>Balances</h4>
                    <h3>{wallet.balance}</h3>  
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Wallets;
