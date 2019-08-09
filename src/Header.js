import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import { NavLink } from "react-router-dom";
import { DropdownTrigger, DropdownContent } from "react-simple-dropdown";
import Dropdown from "react-simple-dropdown";
import ClassNames from "classnames";

import styles from "./Header.module.css";
import "./Dropdown.css";

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

  handleScroll(event) {
    this.setState({ headerColor: window.scrollY > 20 ? "#ffe967" : "white" });
  }

  onClickDropdownItem(event) {
    this.dropdown.current.hide();
  }

  render() {
    const { headerColor, width, height } = this.state;

    var headerContent;
    if (width < 1000) {
      headerContent = (
        <div className={styles.miniHeader}>
          <Dropdown className={styles.dropdown} ref={this.dropdown}>
            <DropdownTrigger>
              <div className={ClassNames(styles.menuButton, styles.link)}>
                MENU
              </div>
            </DropdownTrigger>
            <DropdownContent
              className={styles.dropdownContent}
              onClick={this.onClickDropdownItem}
            >
              <div className={styles.menuItem}>
                <NavLink className={styles.link} to="/illustration">
                  ILLUSTRATION
                </NavLink>
              </div>
              <div className={styles.menuItem}>
                <NavLink className={styles.link} to="/design">
                  DESIGN
                </NavLink>
              </div>
              <div className={styles.menuItem}>
                <NavLink className={styles.link} to="/shop">
                  SHOP
                </NavLink>
              </div>
              <div className={styles.menuItem}>
                <NavLink className={styles.link} to="/about">
                  ABOUT
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
      );
    } else {
      headerContent = (
        <div className={styles.largeHeader}>
          <div className={ClassNames(styles.headerItem, styles.navigation)}>
            <NavLink className={styles.link} to="/illustration">
              ILLUSTRATION
            </NavLink>
            <NavLink className={styles.link} to="/design">
              DESIGN
            </NavLink>
            <NavLink className={styles.link} to="/shop">
              SHOP
            </NavLink>
            <NavLink className={styles.link} to="/about">
              ABOUT
            </NavLink>
          </div>
          <div className={ClassNames(styles.headerItem, styles.titleContainer)}>
            <LazyLoad>
              <img
                className={styles.headerTitle}
                alt={"name"}
                src="/images/name.png"
              />
            </LazyLoad>
          </div>
          <div className={ClassNames(styles.headerItem, styles.social)}>
            <a href={kInstagramLink} rel="noopener noreferrer" target="_blank">
              <i
                className={ClassNames(styles.socialItem, "fab", "fa-instagram")}
              />
            </a>
            <a href={kLinkedInLink} rel="noopener noreferrer" target="_blank">
              <i
                className={ClassNames(
                  styles.socialItem,
                  "fab",
                  "fa-linkedin-in"
                )}
              />
            </a>
            <a href={kBehanceLink} rel="noopener noreferrer" target="_blank">
              <i
                className={ClassNames(styles.socialItem, "fab", "fa-behance")}
              />
            </a>
            <a href={kEmailLink} rel="noopener noreferrer">
              <i
                className={ClassNames(styles.socialItem, "far", "fa-envelope")}
              />
            </a>
          </div>
        </div>
      );
    }

    return (
      <div className={styles.headerContainer}>
        <div className={styles.header} style={{ backgroundColor: headerColor }}>
          {headerContent}
        </div>
        <div className={styles.placeholder} />
      </div>
    );
  }
}

export default Header;
