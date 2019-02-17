import React, { Component } from "react";
import Webcam from "react-webcam";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";

import { createNewFace, checkFace } from "../../actions";

class WebcamCapture extends Component {
  state = { seconds: 0 };

  tick() {
    if (this.state.seconds % 6 === 0) {
      // call action to take snapshot then do more shit
      console.log("checking for face...");
      this.testRecog();
      if (this.props.user && this.props.user.firstName) {
        this.props.history.push("info");
      }
    }

    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  testRecog = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.checkFace(imageSrc);
  };

  testNew = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.createNewFace(imageSrc, this.props.user._id);
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
)(withRouter(WebcamCapture));
