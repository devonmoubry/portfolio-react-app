import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class References extends Component {
  render() {
    return (
      <div className="References">
        <h1>References</h1>
        <div>
          <h3>Benji Stone</h3>
          <p>Brooklyn, NY</p>
          <p>Junior Writer, Comedy Cavalcade with King Kaiser</p>
        </div>
        <div>
          <h3>Stan Kaiser</h3>
          <p>New York City, NY</p>
          <p>Actor, Comedy Cavalcade with King Kaiser</p>
        </div>
        <div>
          <h3>Alan Swann</h3>
          <p>New York City, NY</p>
          <p>Actor, guest star on Comedy Cavalcade</p>
        </div>
        <Link  className="btn" activeClassName="selected" to="/about">
          Learn more about me.
        </Link>
      </div>
    );
  }
}
