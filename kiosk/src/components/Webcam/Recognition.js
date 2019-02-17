import React, { Component } from "react";
import WebcamCapture from "./WebcamCapture";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`;

class Recognition extends Component {
  render() {
    return (
      <Wrapper>
        <WebcamCapture />
        <div>Detecting your face for payment...</div>
      </Wrapper>
    );
  }
}

export default Recognition;
