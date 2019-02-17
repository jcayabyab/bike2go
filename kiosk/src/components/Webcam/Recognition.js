import React, { Component } from "react";
import WebcamCapture from "./WebcamCapture";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

class Recognition extends Component {
  render() {
    return (
      <Wrapper>
        <WebcamCapture />
      </Wrapper>
    );
  }
}

export default Recognition;
