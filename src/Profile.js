import React, { Component } from "react";
import { Link } from "react-router-dom";
import AutoResponsive from "autoresponsive-react";
import LazyLoad from "react-lazyload";

import "./Profile.css";
import Elements from "./Data";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: Elements,
      gridHeight: 90
    };
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          gridHeight: Math.floor((Math.min(window.innerWidth, 800) - 20) / 6)
        });
      },
      false
    );
  }

  render() {
    return (
      <div className="profile">
        <div className="gallery" style={{gridAutoRows: this.state.gridHeight}}>
          {this.state.elements.map(({ height, src, width }, i) => {
            var style = {}
            if (height) {
              style.gridRowEnd = "span " + parseInt(height);
            }
            if (width) {
              style.gridColumnEnd = "span " + parseInt(width);
            }
            return (
              <div key={i} className="card" style={style}>
                <Link to={"/carousel/" + parseInt(i)}>
                  <LazyLoad>
                    <img alt={src} src={src} />
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
