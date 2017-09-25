import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Contact extends Component {
  render() {
    let fontawesome = {
      "padding": "10px",
      "color": "#444"
    }
    return (
      <div className="Contact">
        <h1>Contact Me</h1>
        <p>K.C. Downing</p>
        <p>New York City, NY</p>
        <p>Associate Producer, Comedy Cavalcade with King Kaiser</p>
        <Link  activeClassName="selected" to="">
          <i style={fontawesome} className="fa fa-facebook-square fa-4x" aria-hidden="true"></i>
        </Link>
        <Link  activeClassName="selected" to="">
          <i  style={fontawesome} className="fa fa-github-square fa-4x" aria-hidden="true"></i>
        </Link>
        <Link  activeClassName="selected" to="">
          <i  style={fontawesome} className="fa fa-phone-square fa-4x" aria-hidden="true"></i>
        </Link>
        <Link  activeClassName="selected" to="">
          <i  style={fontawesome} className="fa fa-envelope-square fa-4x" aria-hidden="true"></i>
        </Link>
      </div>
    );
  }
}
