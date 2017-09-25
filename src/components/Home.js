import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Welcome Home</h1>
        <p>To the deep, blue sea.</p>
        <Link  className="btn" activeClassName="selected" to="/about">
          Learn more about me.
        </Link>
      </div>
    );
  }
}
