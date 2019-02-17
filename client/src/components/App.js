import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import { Container } from "reactstrap";
import Navbar from "./Navbar/NavBar";

import Landing from "./Landing/Landing";
import Dashboard from "./Dashboard/Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    console.log(this.props.user);

    return (
      <div>
        <BrowserRouter>
          <Container>
            <Navbar />
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
                return !this.props.user ? <Landing /> : <Redirect to="/dashboard" />;
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
