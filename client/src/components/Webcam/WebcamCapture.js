import React, { Component } from "react";
import Webcam from "react-webcam";
import { connect } from "react-redux";
import { Button } from "reactstrap";

import { createNewFace } from "../../actions";

class WebcamCapture extends Component {
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.createNewFace(imageSrc, this.props.user._id);
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
          height={480}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={720}
          videoConstraints={videoConstraints}
        />
        <Button color="success" onClick={this.capture}>
          Capture photo
        </Button>
      </div>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { createNewFace }
)(WebcamCapture);
