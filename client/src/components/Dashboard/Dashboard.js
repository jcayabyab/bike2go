import React, { Component } from "react";
import Info from "./Info";
import { Row, Col, Button } from "reactstrap";
import kelvinBike from "./kelvinbike.png";
import { connect } from "react-redux";
import { createNewRide, getRides } from "../../actions";
import { formatMoney, milliToHour } from "../../utils";
import RideList from "./RideList";

class Dashboard extends Component {
  state = { rides: false };

  componentDidUpdate() {
    if (
      this.state.rides === false &&
      this.props.user &&
      this.props.user.firstName
    ) {
      this.props.getRides(this.props.user._id);
      this.setState({ rides: true });
    }
  }

  render() {
    const { user, rides } = this.props;
    return (
      <div>
        <Row>
          <Col md={4}>
            <RideList rides={rides} />
            {/* <Button
              color="success"
              onClick={() => this.props.createNewRide(this.props.user._id)}
            >
              Create new ride
            </Button> */}
          </Col>
          <Col md={5} style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={kelvinBike}
              style={{ maxHeight: "300px", maxWidth: "300px" }}
            />
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
            <Info label="Total time">
              {milliToHour(user.totalTime) + " hr"}
            </Info>
            <Info label="Total balance">{formatMoney(user.balance)}</Info>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  state => state,
  { createNewRide, getRides }
)(Dashboard);
