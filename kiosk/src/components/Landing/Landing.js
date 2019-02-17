import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Landing = () => (
  <Wrapper>
    <div>Bike2Go</div>
    <Button to="/recognition">Start a ride</Button>
  </Wrapper>
);

export default Landing;
