import React, { Component } from "react";

import LazyLoad from "react-lazyload";
import ClassNames from "classnames";

import "./Thumbnail.css";

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.onClick) {
      this.props.onClick(this.props.value);
    }
  }

  render() {
    const { src } = this.props;
    return (
      <div
        className={ClassNames("thumbnail", {
          "thumbnail-selected": this.props.selected
        })}
        onClick={this.handleClick}
      >
        <LazyLoad>
          <img alt={src} src={src} align="middle" />
        </LazyLoad>
      </div>
    );
  }
}

export default Thumbnail;
