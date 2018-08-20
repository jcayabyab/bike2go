import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchExample } from "../actions";

class Example extends Component {
  componentDidMount() {
    this.props.fetchExample();
  }

  renderExample() {
    if (this.props.example.length < 1) {
      return <div>Waiting for request...</div>;
    }
    return (
      <div>
        <span style={{ fontWeight: "bold" }}>Data:</span>
        {this.props.example.map(e => (
          <div key={e._id}>{e.example}</div>
        ))}
      </div>
    );
  }

  renderAuth() {
    switch (this.props.user) {
      case null:
        return <div>Loading...</div>;
      case false:
        return <a href="/auth/google">Login</a>;
      default:
        return <div><a href="/api/logout">Logout</a> You are logged in.</div>;
    }
  }

  render() {
    return (
      <div>
        <h2>Hello!</h2>
        {this.renderAuth()}
        <div>This is what is obtained from your request.</div>
        <div>{this.renderExample()}</div>
      </div>
    );
  }
}

function mapStateToProps({ example, user }) {
  return { example, user };
}

export default connect(
  mapStateToProps,
  { fetchExample }
)(Example);
