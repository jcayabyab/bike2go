import React from "react";
import Ride from "./Ride";

// obtains rides prop
const RideList = props => (
  <div style={{ marginBottom: "10px" }}>
    {props.rides.map((ride, index) => (
      <Ride {...ride} key={ride.id} num={props.rides.length - index} />
    ))}
  </div>
);

export default RideList;
