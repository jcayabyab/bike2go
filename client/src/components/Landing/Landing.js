import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  padding: 30px;
  background-color: green;
  font-size: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
`;

const Landing = () => (
  <Wrapper>
    <div>Bike2Go</div>
    <Button to="/webcam">Start a ride</Button>
    <Button to="/info">Finish a ride</Button>
  </Wrapper>
);

export default Landing;
