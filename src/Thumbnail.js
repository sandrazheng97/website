import React, { Component } from "react";

import ClassNames from "classnames";

import styles from "./Thumbnail.module.css";
import LazyLoadImage from "./LazyLoadImage";

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      moveCount: 0
    };

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  handleClick() {
    if (this.props.onClick) {
      this.props.onClick(this.props.value);
    }
  }

  onMouseDown() {
    this.setState({ moveCount: 0 });
  }

  onMouseUp() {
    if (this.state.moveCount < 5) {
      this.handleClick(this.props.value);
    }
  }

  onMouseMove() {
    this.setState({ moveCount: this.state.moveCount + 1 });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.src !== nextProps.src ||
      this.props.selected !== nextProps.selected
    );
  }

  render() {
    const { src, selected } = this.props;
    return (
      <div
        className={styles.thumbnail}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseMove={this.onMouseMove}
      >
        <LazyLoadImage
          src={src}
          imageClassName={ClassNames(selected && styles.thumbnailSelected)}
        />
      </div>
    );
  }
}

export default Thumbnail;
