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
    this.props.checkFace(imageSrc, this.props.user._id);
  };

  render() {
    const videoConstraints = {
      width: 480,
      height: 360,
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          height="360"
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width="480"
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
      </div>
    );
  }
}

export default connect(
  ({user}) => ({user}),
  { checkFace }
)(WebcamCapture);
