import React, { Component } from "react";

import LazyLoad from "react-lazyload";
import ClassNames from "classnames";

import styles from "./Thumbnail.module.css";

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
    const { src, height, width } = this.props;
    return (
      <div
        className={styles.thumbnail}
        onClick={this.handleClick}
        style={{ width, height }}
      >
        <LazyLoad>
          <img
            alt={src}
            src={src}
            align="middle"
            className={ClassNames(
              this.props.selected && styles.thumbnailSelected
            )}
          />
        </LazyLoad>
      </div>
    );
  }
}

export default Thumbnail;
