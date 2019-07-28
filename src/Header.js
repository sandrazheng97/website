import React, { Component } from "react";
import Icon from "react-fa";
import LazyLoad from "react-lazyload";
import { NavLink } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="header-item navigation">
            <NavLink className="link" to="/illustration">
              ILLUSTRATION
            </NavLink>
            <NavLink className="link" to="/design">
              DESIGN
            </NavLink>
          </div>
          <div className="header-item title-container">
            <LazyLoad>
              <img
                className="header-title"
                alt={"name"}
                src="/images/name.jpg"
              />
            </LazyLoad>
          </div>
          <div className="header-item social">
            <Icon className="arrow" name="fa-instagram" />
            <i className="social-item fab fa-instagram" />
            <i className="social-item fab fa-behance" />
            <i className="social-item far fa-envelope" />
            <i className="social-item fab fa-linkedin-in" />
          </div>
        </div>
        <div className="placeholder" />
      </div>
    );
  }
}

export default Header;
