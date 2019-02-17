import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import { Container } from "reactstrap";
import Recognition from "./Webcam/Recognition";
import Info from "react-webcam"

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
            <Route exact path="/recognition" component={Recognition} />
            <Route exact path="/info" component={Info} />
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
