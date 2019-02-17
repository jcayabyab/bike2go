import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { createNewRide } from "../actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Info extends Component {
  componentDidMount() {
    const { user } = this.props;

    if (!user || !user.firstName) {
      this.props.history.push("/");
    } else {
      createNewRide(user.id);
    }
  }

  render() {
    const user = this.props;
    return (
      <Wrapper>
        <div>{`Hello, ${user.name}!`}</div>
        <div>{`A bike has been unlocked for you.`}</div>
        <div>{`Your current rate is $3/hr.`}</div>
        <div>{`Enjoy your ride!`}</div>
      </Wrapper>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  createNewRide
)(withRouter(Info));
