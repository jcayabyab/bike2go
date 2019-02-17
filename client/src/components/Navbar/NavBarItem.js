import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavBarItem = props => {
  const classes =
    "nav-item" + (props.location.pathname === props.path ? " active" : ""); //active if path matches
  const style = {
    borderBottom: `2px solid #${
      props.location.pathname === props.path ? "35ce8d" : "f9f9f9"
    }`
  };
  return (
    <li className={classes}>
      <Link className="nav-link" to={props.path} style={style}>
        {props.name}
      </Link>
    </li>
  );
};

export default withRouter(NavBarItem); //need withRouter to access location
