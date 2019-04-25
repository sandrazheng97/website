import React, { Component } from "react";
import { Link } from "react-router-dom";
import AutoResponsive from "autoresponsive-react";
import LazyLoad from "react-lazyload";

import "./Profile.css";
import Elements from './Data';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: Elements,
      containerWidth: 600
    };
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          containerWidth: 700
        });
      },
      false
    );
  }

  getAutoResponsiveProps() {
    return {
      itemMargin: 10,
      containerWidth: this.state.containerWidth,
      itemClassName: "card",
      gridWidth: 100,
      transitionDuration: ".5"
    };
  }

  render() {
    return (
      <div className="profile">
        <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
          {this.state.elements.map(({ height, src, width }, i) => (
            <div
              key={i}
              className="card"
              style={{ height: height || 190, width: width || 190 }}
            >
              <Link to={"/carousel/" + parseInt(i)}>
                <LazyLoad height={height || 190}>
                  <img alt={src} src={src} />
                </LazyLoad>
              </Link>
            </div>
          ))}
        </AutoResponsive>
      </div>
    );
  }
}

export default Profile;
