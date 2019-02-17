import React, { Component } from "react";
import Webcam from "react-webcam";
import { connect } from "react-redux";

import { checkFace } from "../../actions";

class WebcamCapture extends Component {
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.checkFace(imageSrc);
  };

  render() {
    const videoConstraints = {
      width: 720,
      height: 480,
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          height="100%"
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width="100%"
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
      </div>
    );
  }
}

export default connect(
  null,
  { checkFace }
)(WebcamCapture);
