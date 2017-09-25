import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>About Page</h1>
        <p>Tell me about the lobster.</p>
          <div>
            
            <Link  className="btn" activeClassName="selected" to="/portfolio">
              Check out my portfolio
            </Link>
          </div>
      </div>
    );
  }
}
