import React, { Component } from "react";
import NavBarItem from "./NavBarItem";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Nav = styled.nav`
  border-bottom: 3px solid #35ce8d;
  height: 60px;

  .navbar-brand:hover {
    color: #6ba292;
    transition: color 0.15s;
  }

  .nav-link {
    color: #35ce8d !important;
  }

  .nav-link:hover {
    color: #6ba292 !important;
    transition: color 0.15s;
  }
`;

const Brand = styled(Link)`
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  color: #6ba292;
`;

class NavBar extends Component {
  renderLinks() {
    if (!this.props.user) {
      return null;
    }

    if (!this.props.user._id) {
      return (
        <li className="nav-item" style={{ marginRight: "40px" }}>
          <a>...</a>
        </li>
      );
    }

    const LINKS = this.props.user
      ? [
          { name: "Dashboard", path: "/dashboard" }
          // { name: "Profile", path: "/profile" }
        ]
      : [];

    return LINKS.map(link => (
      <NavBarItem key={link.name} name={link.name} path={link.path} />
    ));
  }

  renderAuth() {
    if (!this.props.user) {
      return (
        <li className="nav-item">
          <a className="nav-link" href="/auth/google">
            Login
          </a>
        </li>
      );
    }

    if (!this.props.user._id) {
      return (
        <li className="nav-item" style={{ marginRight: "40px" }}>
          ...
        </li>
      );
    }

    return (
      <li
        className="nav-item"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center"
        }}
      >
        <div style={{ padding: "0px 20px" }} className="text-muted">{`Hello, ${
          this.props.user.firstName
        }`}</div>
        <a className="nav-link" href="/api/logout">
          Logout
        </a>
      </li>
    );
  }

  render() {
    // Bootstrap code
    return (
      <Nav className="navbar navbar-expand-md navbar-light bg-light">
        <Brand to="/" className="navbar-brand">
          Bike2Go
        </Brand>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">{this.renderLinks()}</ul>
          <ul className="navbar-nav">{this.renderAuth()}</ul>
        </div>
      </Nav>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default withRouter(connect(mapStateToProps)(NavBar));
