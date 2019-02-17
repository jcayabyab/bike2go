import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import { Container } from "reactstrap";
import Recognition from "./Webcam/Recognition";
import Landing from "./Landing/Landing";
import Info from "./Info";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Container>
            <Route exact path="/recognition" component={Recognition} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/" component={Landing} />
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
