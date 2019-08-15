import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import ClassNames from "classnames";

import "./LoadingAnimation.css";

class LazyLoadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingIconHidden: false
    };
    this.onLoadedImage = this.onLoadedImage.bind(this);
  }

  onLoadedImage() {
    this.setState({
      loadingIconHidden: true
    });
  }

  render() {
    const { src, imageStyles, imageClassName } = this.props;
    const { loadingIconHidden } = this.state;
    return (
      <LazyLoad offsetVertical={1500} debouce={false}>
        <div
          className={ClassNames("lds-default", {
            "lds-default-hidden": loadingIconHidden
          })}
          styles={loadingIconHidden ? { display: "none !important" } : {}}
        >
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
        <img
          alt={src}
          src={src}
          className={imageClassName}
          style={imageStyles}
          onLoad={this.onLoadedImage}
        />
      </LazyLoad>
    );
  }
}

export default LazyLoadImage;
