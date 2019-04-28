import React, { Component } from "react";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="header-item navigation">
            <a className="navigation-item" href="#illustration">
              ILLUSTRATION
            </a>
            <a className="navigation-item" href="#design">
              DESIGN
            </a>
            <a className="navigation-item" href="#about">
              ABOUT
            </a>
          </div>
          {/*<div className="header-item title-container">
            <div className="title">SANDRA ZHENG</div>
            <div className="subtitle">ILLUSTRATION - DESIGN</div>
          </div>*/}
          <div className="header-item social">
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
