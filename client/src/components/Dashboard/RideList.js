import React from "react";
import Ride from "./Ride";

// obtains rides prop
const RideList = props => (
  <div style={{ marginBottom: "10px" }}>
    {props.rides
      .slice(0, 8)
      .reverse()
      .map((ride, index) => (
        <Ride {...ride} key={index} num={props.rides.length - index} />
      ))}
  </div>
);

export default RideList;
