import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import { Container } from "reactstrap";
import Navbar from "./Navbar/NavBar";

import Landing from "./Landing/Landing";
import Dashboard from "./Dashboard/Dashboard";
import WebcamCapture from "./Webcam/WebcamCapture";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Container>
            <Navbar />
            <Route exact path="/webcam" component={WebcamCapture} />
            <Route
              exact
              path="/dashboard"
              render={() => {
                return !this.props.user ? <Redirect to="/" /> : <Dashboard />;
              }}
            />
            <Route
              exact
              path="/"
              render={() => {
                //return !this.props.user ? <Landing /> : <Redirect to="/dashboard" />;

                if (this.props.user) {
                  if (this.props.user.personId === "uninitialized") {
                    return <Redirect to="/WebcamCapture" />;
                  } else {
                    return <Redirect to="/Dashboard" />;
                  }
                } else {
                  return <Landing />;
                }
              }}
            />
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  ({ user }) => ({ user }),
  { fetchUser }
)(App);
