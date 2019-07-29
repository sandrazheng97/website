import React, { Component } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

import "./Profile.css";
import DesignElements from "./Data";
import IllustrationElements from "./TestData.js";

const kNumColumns = 6;
const kColumnSpacing = 10;
const kMaxGridWidth = 800;

class Profile extends Component {
  constructor(props) {
    super(props);
    const source =
      props.match.path !== "/" ? props.match.path : "/illustration";
    var elements =
      source === "/illustration" ? IllustrationElements : DesignElements;
    console.log(source, props.match.path, props.match.path === "/");

    this.state = {
      source,
      elements,
      gridHeight: this.getGridHeight()
    };
  }

  getGridHeight() {
    return Math.floor(
      (Math.min(window.innerWidth, kMaxGridWidth) - kColumnSpacing * 2) /
        kNumColumns
    );
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          gridHeight: this.getGridHeight()
        });
      },
      false
    );
  }

  render() {
    return (
      <div className="profile">
        <div
          className="gallery"
          style={{ gridAutoRows: this.state.gridHeight }}
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
              <div key={i} className="card" style={style}>
                <Link to={"/carousel" + this.state.source + "/" + parseInt(i)}>
                  <LazyLoad>
                    <img alt={src} src={src} style={imageStyles} />
                  </LazyLoad>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Profile;
