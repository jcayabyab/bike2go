import React, { Component } from "react";
import Webcam from "react-webcam";
import { connect } from "react-redux";
import { Button } from "reactstrap";

import { createNewFace, checkFace } from "../../actions";

class WebcamCapture extends Component {
  setRef = webcam => {
    this.webcam = webcam;
  };

  testRecog = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.checkFace(imageSrc, this.props.user._id);
  };

  testNew = () => {
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
        <Button color="success" onClick={this.testRecog}>
          Test recognition
        </Button>
        <Button color="success" onClick={this.testNew}>
          Test new
        </Button>
      </div>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { createNewFace, checkFace }
)(WebcamCapture);
