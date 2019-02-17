import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Info extends Component {
  componentDidMount() {
    if (!this.props.user) {
      this.props.history.push("/");
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

export default connect(({ user }) => ({ user }))(withRouter(Info));
