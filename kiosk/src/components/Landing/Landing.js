import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import qr from "./qr.png";

const Title = styled.div`
  font-size: 70px;
  font-weight: bold;
`;

const Button = styled(Link)`
  padding: 30px;
  background-color: green;
  font-size: 30px;
  text-decoration: none;
  color: white;
  transition: 0.5s linear background-color;
  border-radius: 8px;
  border: 5px forestgreen solid;

  &:hover {
    background-color: darkgreen;
    text-decoration: none;
    color: white;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 600px;
`;

const Qr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Landing = () => (
  <Wrapper>
    <Title>
      Bike2<span style={{ color: "green" }}>Go</span>
    </Title>
    <Button to="/recognition">Start a ride</Button>
    <Qr>
      <div>Make an account here!</div>
      <img alt="qr code" src={qr} height="120px" />
    </Qr>
  </Wrapper>
);

export default Landing;
