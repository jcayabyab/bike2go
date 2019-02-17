import React from "react";
import styled from "styled-components";
import Webcam from "../Webcam/WebcamCapture";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`;

const Landing = () => (
  <Wrapper>
    <Webcam />
    <div>Make an account to use our bikes!</div>
  </Wrapper>
);

export default Landing;
