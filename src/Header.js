import React, { Component } from "react";
import Icon from "react-fa";
import LazyLoad from "react-lazyload";
import { NavLink } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerColor: "white"
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll(event) {
    this.setState({ headerColor: window.scrollY > 20 ? "#ffe967" : "white" });
  }

  render() {
    const { headerColor } = this.state;
    return (
      <div className="header-container">
        <div className="header" style={{ backgroundColor: headerColor }}>
          <div className="header-item navigation">
            <NavLink className="link" to="/illustration">
              ILLUSTRATION
            </NavLink>
            <NavLink className="link" to="/design">
              DESIGN
            </NavLink>
            <NavLink className="link" to="">
              SHOP
            </NavLink>
            <NavLink className="link" to="/about">
              ABOUT
            </NavLink>
          </div>
          <div className="header-item title-container">
            <LazyLoad>
              <img
                className="header-title"
                alt={"name"}
                src="/images/name.png"
              />
            </LazyLoad>
          </div>
          <div className="header-item social">
            <i className="social-item fab fa-instagram" />
            <i className="social-item fab fa-linkedin-in" />
            <i className="social-item fab fa-behance" />
            <i className="social-item far fa-envelope" />
          </div>
        </div>
        <div className="placeholder" />
      </div>
    );
  }
}

export default Header;
