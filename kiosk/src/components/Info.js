import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import kelvinBike from "./kelvinbike.png";
import { createNewRide, clearUser } from "../actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 15px solid green;
  width: 500px;
  height: 700px;
  margin: 0 auto;
`;

class Info extends Component {
  componentDidMount() {
    const { user } = this.props;

    if (!user || !user.firstName) {
      this.props.history.push("/");
    } else {
      console.log(user);
      this.props.createNewRide(user._id);
      setTimeout(() => {
        this.props.history.push("/");
      }, 10000);
    }
  }

  componentWillUnmount() {
    this.props.clearUser();
  }

  render() {
    const { user } = this.props;
    return (
      <Wrapper>
        <h2>
          {`Hello, `}
          <span style={{ color: "green" }}>{user.firstName}!</span>
        </h2>
        <div>{`A bike has been unlocked for you.`}</div>
        <div>
          {`Your current rate is `}
          <span style={{ fontWeight: "bold" }}>$3/hr</span>.
        </div>
        <div>{`Enjoy your ride!`}</div>
        <img
          src={kelvinBike}
          alt="kelvin on a bike"
          style={{ height: "400px" }}
        />
      </Wrapper>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { createNewRide, clearUser }
)(withRouter(Info));
