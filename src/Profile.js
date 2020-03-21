import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "react-fa";
import ReactResizeDetector from "react-resize-detector";

import LazyLoadImage from "./LazyLoadImage";
import DesignElements from "./DesignData";
import IllustrationElements from "./IllustrationData.js";
import Constants from "./Constants.js";
import styles from "./Profile.module.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    const source =
      props.match.path !== "/" ? props.match.path : "/illustration";
    var elements =
      source === "/illustration" ? IllustrationElements : DesignElements;

    this.state = {
      source,
      elements
    };
    this.onResize = this.onResize.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.profileElement = React.createRef();
  }

  getGridHeight() {
    return Math.floor(
      (this.profileElement.current.offsetWidth - Constants.columnSpacing * 2) /
        Constants.numColumns
    );
  }

  onResize() {
    this.setState({
      gridHeight: this.getGridHeight(),
      windowWidth: window.innerWidth
    });
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    const isMobile = this.state.windowWidth <= Constants.mobileViewMaxWidth;
    const placeHolderStyle = isMobile
      ? { height: Constants.headerHeight, width: "100%" }
      : { width: Constants.sideBarWidth };
    return (
      <div
        ref={this.profileElement}
        className={styles.profile}
        style={{
          paddingTop: isMobile ? 0 : 80,
          flexDirection: isMobile ? "column" : "row"
        }}
      >
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={this.onResize}
        />
        <div className={styles.placeHolder} style={placeHolderStyle} />
        <div className={styles.mainContent}>
          <div
            className={styles.gallery}
            style={{
              gridAutoRows: this.state.gridHeight,
              gridGap: Constants.columnSpacing,
              paddingLeft: isMobile ? 100 : 0
            }}
          >
            {this.state.elements.map(
              ({ height, srcMini, width, imageStyles }, i) => {
                var style = {};
                if (height) {
                  style.gridRowEnd = "span " + parseInt(height);
                }
                if (width) {
                  style.gridColumnEnd = "span " + parseInt(width);
                }
                return (
                  <div key={i} className={styles.card} style={style}>
                    <Link
                      to={"/carousel" + this.state.source + "/" + parseInt(i)}
                    >
                      <LazyLoadImage src={srcMini} imageStyles={imageStyles} />
                    </Link>
                  </div>
                );
              }
            )}
          </div>
          <div className={styles.footer} onClick={this.scrollToTop}>
            <Icon className={styles.arrow} name="arrow-up" />
            Back to Top
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
