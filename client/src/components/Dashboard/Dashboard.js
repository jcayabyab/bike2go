import React, { Component } from "react";
import Info from "./Info";
import Webcam from "../Webcam/WebcamCapture";
import { Row, Col, Button } from "reactstrap";
import kelvinBike from "./kelvinbike.png";
import { connect } from "react-redux";
import { createNewRide } from "../../actions";

class Dashboard extends Component {
  render() {
    const { user } = this.props;

    console.log(this.props.user);

    return (
      <div>
        <Row>
          <Col md={4}>
            <div>Rides</div>
            <Button
              color="success"
              onClick={() => this.props.createNewRide(this.props.user._id)}
            >
              Create new ride
            </Button>
          </Col>
          <Col md={5}>
            <img src={kelvinBike} style={{ height: "100%", width: "100%" }} />
          </Col>
          <Col
            md={3}
            style={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column"
            }}
          >
            <Info label="Total distance">{user.totalDistance + " km"}</Info>
            <Info label="Total time">{user.totalTime + " hr"}</Info>
            <Info label="Total balance">{user.balance}</Info>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { createNewRide }
)(Dashboard);
