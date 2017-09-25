import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class BaseLayout extends Component {
  render() {
    return (
      <div className="BaseLayout">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
              <div className="navbar-header">
                <ul className="nav navbar-nav">
                  <li >
                    {/*LINK TO SPLASH PAGE*/}
                    <NavLink activeClassName="selected" to="/"><span>Splash Page</span></NavLink>
                  </li>
                  <li>
                    {/*LINK TO HOME*/}
                    <NavLink activeClassName="selected" to="/home"><span>Home</span></NavLink>
                  </li>
                  <li>
                    {/*LINK TO ABOUT*/}
                    <NavLink activeClassName="selected" to="/about"><span>About</span></NavLink>
                  </li>
                  <li>
                    {/*LINK TO PORTFOLIO*/}
                    <NavLink activeClassName="selected" to="/portfolio"><span>Portfolio</span></NavLink>
                  </li>
                  <li>
                    {/*LINK TO CONTACT*/}
                    <NavLink activeClassName="selected" to="/contact"><span>Contact</span></NavLink>
                  </li>
                  <li>
                    {/*LINK TO REFERENCES*/}
                    <NavLink activeClassName="selected" to="/references"><span>References</span></NavLink>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
