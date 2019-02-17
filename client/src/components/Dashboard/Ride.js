import React from "react";
import styled from "styled-components";
import { RATE, milliToHour, formatMoney } from "../../utils";

const Body = styled.div`
  border-bottom: 3px solid #5cb85c;
  padding: 10px 20px;
`;

const Title = styled.h4``;

// gets ride
const Ride = props => (
  <Body>
    <Title>{`Ride #${props.num}`}</Title>
    <div>{`Distance: ${props.distance} km`}</div>
    <div>{`Time: ${milliToHour(props.time)} hr`}</div>
    <div>{`Cost: ${formatMoney(props.time * RATE)}`}</div>
  </Body>
);

export default Ride;
