import React, { Component } from "react";
import Webcam from "react-webcam";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";

import { createNewFace, checkFace } from "../../actions";

class WebcamCapture extends Component {
  state = { loading: false };

  setRef = webcam => {
    this.webcam = webcam;
  };

  testRecog = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.checkFace(imageSrc);
  };

  testNew = () => {
    this.setState({ loading: true });
    const imageSrc = this.webcam.getScreenshot();
    this.props.createNewFace(imageSrc, this.props.user._id);
    setTimeout(() => this.props.history.push("dashboard"), 4000);
  };

  renderBottom() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return (
      <Button
        color="success"
        onClick={() => this.testNew()}
        style={{ width: "100%" }}
      >
        Take photo!
      </Button>
    );
  }

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
          height="100%"
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width="100%"
          screenshotQuality={0.4}
          videoConstraints={videoConstraints}
        />
        {/* <Button color="success" onClick={this.testRecog}>
          Test recognition
        </Button> */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {this.renderBottom()}
        </div>
      </div>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { createNewFace, checkFace }
)(withRouter(WebcamCapture));
