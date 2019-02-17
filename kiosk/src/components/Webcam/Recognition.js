import React, { Component } from "react";
import WebcamCapture from "./WebcamCapture";
import styled from 'styled-components';

class Recognition extends Component {
  render() {
    return (
      <div>
        <WebcamCapture />
      </div>
    );
  }
}

export default Recognition;
