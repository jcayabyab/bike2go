import React, { Component } from "react";
import Info from "./Info";
import Webcam from "../Webcam/WebcamCapture";
import { Row, Col } from "reactstrap";
import kelvinBike from "./kelvinbike.png";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={4}>Photo</Col>
          <Col md={5}>
            <img src={kelvinBike} style={{height: "100%", width: "100%"}}/>
          </Col>
          <Col
            md={3}
            style={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column"
            }}
          >
            <Info label="Total distance">20.5 km</Info>
            <Info label="Total time">22:05 hr</Info>
            <Info label="Total balance">$16.75</Info>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
