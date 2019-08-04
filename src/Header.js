import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import { NavLink } from "react-router-dom";

import "./Header.css";

const kLinkedInLink =
  "https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsandra-zheng-8909aa187%2F&h=AT2fmjskgEUTPRRZwuUyEWGzcFrfILiFSlzPvZcdYcefzA2dzlbVLpyE17cyy0vgz1EX4nKHvu36hsKRLJ_kbxFiHBQZqvI9NzSCHLsuYpAabTat0w0PZTKpfjt0QvMcb0q1pBvOduGFgyDm9wza8XxT";
const kInstagramLink =
  "https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fszheng__%2F&h=AT2fmjskgEUTPRRZwuUyEWGzcFrfILiFSlzPvZcdYcefzA2dzlbVLpyE17cyy0vgz1EX4nKHvu36hsKRLJ_kbxFiHBQZqvI9NzSCHLsuYpAabTat0w0PZTKpfjt0QvMcb0q1pBvOduGFgyDm9wza8XxT";
const kBehanceLink =
  "https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.behance.net%2Fsandrazheng&h=AT2fmjskgEUTPRRZwuUyEWGzcFrfILiFSlzPvZcdYcefzA2dzlbVLpyE17cyy0vgz1EX4nKHvu36hsKRLJ_kbxFiHBQZqvI9NzSCHLsuYpAabTat0w0PZTKpfjt0QvMcb0q1pBvOduGFgyDm9wza8XxT";
const kEmailLink = "mailto:sandrazhengart@gmail.com";

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
            <NavLink className="link" to="/shop">
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
            <a href={kInstagramLink} rel="noopener noreferrer" target="_blank">
              <i className="social-item fab fa-instagram" />
            </a>
            <a href={kLinkedInLink} rel="noopener noreferrer" target="_blank">
              <i className="social-item fab fa-linkedin-in" />
            </a>
            <a href={kBehanceLink} rel="noopener noreferrer" target="_blank">
              <i className="social-item fab fa-behance" />
            </a>
            <a href={kEmailLink} rel="noopener noreferrer">
              <i className="social-item far fa-envelope" />
            </a>
          </div>
        </div>
        <div className="placeholder" />
      </div>
    );
  }
}

export default Header;
