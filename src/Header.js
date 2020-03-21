import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import { NavLink } from "react-router-dom";
import { DropdownTrigger, DropdownContent } from "react-simple-dropdown";
import Dropdown from "react-simple-dropdown";
import ClassNames from "classnames";

import Constants from "./Constants.js";
import styles from "./Header.module.css";
import "./Dropdown.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerColor: "white",
      width: window.innerWidth,
      height: window.innerHeight
    };

    this.dropdown = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.onClickDropdownItem = this.onClickDropdownItem.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.handleResize);
  }

  handleResize(event) {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  sendEmail() {
    window.location = "mailto:" + Constants.email;
  }

  handleScroll(event) {
    this.setState({ headerColor: window.scrollY > 20 ? "#ffe967" : "white" });
  }

  onClickDropdownItem(event) {
    this.dropdown.current.hide();
  }

  render() {
    const { headerColor, width } = this.state;

    var headerContent;
    if (width < Constants.mobileViewMaxWidth) {
      headerContent = (
        <div
          className={styles.topHeader}
          style={{ height: Constants.headerHeight }}
        >
          <div className={styles.miniHeader}>
            <Dropdown className={styles.dropdown} ref={this.dropdown}>
              <DropdownTrigger>
                <div className={ClassNames(styles.menuButton, styles.link)}>
                  menu
                </div>
              </DropdownTrigger>
              <DropdownContent
                className={styles.dropdownContent}
                onClick={this.onClickDropdownItem}
                style={{ borderBottom: "2px solid " + Constants.peach }}
              >
                <div className={styles.menuItem}>
                  <NavLink className={styles.link} to="/illustration">
                    illustration
                  </NavLink>
                </div>
                <div className={styles.menuItem}>
                  <NavLink className={styles.link} to="/design">
                    design
                  </NavLink>
                </div>
                <div className={styles.menuItem}>
                  <NavLink className={styles.link} to="/shop">
                    shop
                  </NavLink>
                </div>
                <div className={styles.menuItem}>
                  <NavLink className={styles.link} to="/about">
                    about
                  </NavLink>
                </div>
              </DropdownContent>
            </Dropdown>
            <LazyLoad>
              <img
                className={styles.miniHeaderTitle}
                alt={"name"}
                src="/images/name.png"
              />
            </LazyLoad>
          </div>
        </div>
      );
    } else {
      headerContent = (
        <div className={styles.sideBar}>
          <div>
            <LazyLoad>
              <img
                className={styles.sideBarTitle}
                alt={"name"}
                src="/images/name.png"
              />
            </LazyLoad>
          </div>
          <div style={{ paddingTop: 10 }}>
            <span className={styles.blueText}>illustrator</span>{" "}
            <span className={styles.pinkText}>&</span>{" "}
            <span className={styles.blueText}>designer</span>
          </div>
          <div className={ClassNames(styles.navigation)}>
            <NavLink
              className={ClassNames(styles.pinkText, styles.link)}
              style={{ paddingTop: 50 }}
              to="/illustration"
            >
              illustration
            </NavLink>
            <NavLink
              className={ClassNames(styles.pinkText, styles.link)}
              to="/design"
            >
              design
            </NavLink>
            <NavLink
              className={ClassNames(styles.blueText, styles.link)}
              style={{ paddingTop: 50 }}
              to="/shop"
            >
              shop
            </NavLink>
            <NavLink
              className={ClassNames(styles.pinkText, styles.link)}
              to="/about"
            >
              about
            </NavLink>
          </div>
          <div className={ClassNames(styles.social)}>
            <div>
              <a
                href={Constants.instagramLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i
                  className={ClassNames(
                    styles.socialItem,
                    "fab",
                    "fa-instagram"
                  )}
                />
              </a>
            </div>
            <div>
              <a
                href={Constants.linkedInLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i
                  className={ClassNames(
                    styles.socialItem,
                    "fab",
                    "fa-linkedin-in"
                  )}
                />
              </a>
            </div>
            {/*<a
              href={Constants.behanceLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <i
                className={ClassNames(styles.socialItem, "fab", "fa-behance")}
              />
            </a>*/}
            <div onClick={this.sendEmail}>
              <i
                className={ClassNames(styles.socialItem, "far", "fa-envelope")}
              />
            </div>
          </div>
        </div>
      );
    }

    return headerContent;
  }
}

export default Header;
