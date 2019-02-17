import React from "react";
import styled from "styled-components";
import img from "./biking.jpg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 240px;
  flex-direction: column;
  color: white;
  background-color: #14bd6c;
`;

const Img = styled.img`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 10px;
`;

const Landing = () => (
  <Wrapper>
    <div style={{ margin: "5px" }}>
      <p>
        Bike2Go is a service that lets you ride, wherever, whenever you want.
        Make an account to get access to bike racks all over the world.
      </p>
    </div>
    <Img src={img} alt="Two happy minorities ride a bike" />
    <p>
      <i>
        Created by Armaan Mohar, Avneet Gill, Jofred Cayabyab, Kelvin Tran,
        Shamin Rahman.
      </i>
    </p>
  </Wrapper>
);

export default Landing;
