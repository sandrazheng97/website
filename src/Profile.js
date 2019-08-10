import React, { Component } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Icon from "react-fa";

import DesignElements from "./DesignData";
import IllustrationElements from "./IllustrationData.js";

import ReactResizeDetector from "react-resize-detector";
import LazyLoadImage from "./LazyLoadImage";

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
    this.onScroll = this.onScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.profileElement = React.createRef();
  }

  getGridHeight() {
    return Math.floor(
      (this.profileElement.current.offsetWidth - Constants.columnSpacing * 2) /
        Constants.numColumns
    );
  }

  onScroll() {
    this.setState({
      gridHeight: this.getGridHeight()
    });
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div ref={this.profileElement} className={styles.profile}>
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={this.onScroll}
        />
        <div
          className={styles.gallery}
          style={{
            gridAutoRows: this.state.gridHeight,
            gridGap: Constants.columnSpacing
          }}
        >
          {this.state.elements.map(({ height, src, width, imageStyles }, i) => {
            var style = {};
            if (height) {
              style.gridRowEnd = "span " + parseInt(height);
            }
            if (width) {
              style.gridColumnEnd = "span " + parseInt(width);
            }
            return (
              <div key={i} className={styles.card} style={style}>
                <Link to={"/carousel" + this.state.source + "/" + parseInt(i)}>
                  <LazyLoadImage src={src} imageStyles={imageStyles} />
                  {/*<LazyLoad offsetVertical={500}>
                    <div class="lds-default">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <img alt={src} src={src} style={imageStyles} />
                  </LazyLoad>*/}
                </Link>
              </div>
            );
          })}
        </div>
        <div className={styles.footer} onClick={this.scrollToTop}>
          <Icon className={styles.arrow} name="arrow-up" />
          Back to Top
        </div>
      </div>
    );
  }
}

export default Profile;
