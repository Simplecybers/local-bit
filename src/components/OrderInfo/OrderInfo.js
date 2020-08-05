import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

import "./OrderInfo.scss";

const OrderInfo = ({ order, username, isUserBuying }) => {
  console.log("order", order);
  const {
    bchAmount,
    cancelled,
    complete,
    fiatAmount,
    priceBCH,
    userMaker,
    userTaker,
  } = order;

  const formatValue = parseInt(priceBCH).toFixed(2);

  return (
    <div className="order-info-main">
      {/* <div className="instruction-ctn">Next Steps</div> */}
      <div className="action-ctn">
        <div className="amount-info">
          <p>{isUserBuying ? "Buying" : "Selling"}</p>
          <p>{`${bchAmount} BCH`}</p>
          <p>for</p>
          <p>{`$${fiatAmount} USD`}</p>
          <p>1 BCH ~ ${formatValue} incl. fees</p>
        </div>
        <div className="action-buttons">
          <Button>COMPLETE TRADE</Button>
          <Button>CANCEL TRADE</Button>
          <Button disabled>REPORT USER</Button>
        </div>
      </div>
      <div className="details-ctn">
        <div className="counterparty-info">
          <h3>{!isUserBuying ? "Buyer" : "Seller"}</h3>
          <Link to={`/user-profile/${username}`}>{username}</Link>
          <p>No feedback yet</p>
          <p>First trade with you</p>
          <p>Registered 2020</p>
          <p>0 trades</p>
        </div>
        <div className="terms-info">
          <h3>Offer</h3>
          <p>
            <span>Payment Method:</span> Cash in person
          </p>
          <p>
            <span>Trade Terms:</span> Message me to arrange a meetup
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
