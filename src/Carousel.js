import React, { Component } from "react";

import ReactCarousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Icon from "react-fa";
import { Link } from "react-router-dom";

import Thumbnail from "./Thumbnail";

import styles from "./Carousel.module.css";
import DesignElements from "./DesignData";
import IllustrationElements from "./IllustrationData.js";

import ReactResizeDetector from "react-resize-detector";

function mod(n, m) {
  return ((n % m) + m) % m;
}

const kShowThumbnailWidthThreshold = 600;
const kShowThumbnailHeightThreshold = 500;
const kMargin = 20;
const kThumbnailHeight = 200;

class Carousel extends Component {
  constructor(props) {
    super(props);
    const source = props.match.params.source;
    var elements = source === "design" ? DesignElements : IllustrationElements;
    console.log(source);

    const selected = parseInt(props.match.params.index) || 0;
    console.log(selected);
    this.state = {
      source,
      value: selected,
      thumbnail: selected,
      elements,
      thumbnails: elements,
      thumbnailsContainerWidth: 1,
      showThumbnails: true
    };
    this.onChangeCarousel = this.onChangeCarousel.bind(this);
    this.onChangeThumbnails = this.onChangeThumbnails.bind(this);
    this.onClickThumbnail = this.onClickThumbnail.bind(this);
    this.onClickArrow = this.onClickArrow.bind(this);

    this.onResize = this.onResize.bind(this);
    this.carouselContainerElement = React.createRef();
  }

  componentDidMount() {
    this.onResize();
  }

  onResize() {
    const maxHeight = this.carouselContainerElement.current.clientHeight;
    const maxWidth = this.carouselContainerElement.current.clientWidth;
    const carouselImageHeight = Math.min(maxHeight, maxWidth);
    const showThumbnails =
      maxHeight >= kShowThumbnailHeightThreshold &&
      maxWidth >= kShowThumbnailWidthThreshold;
    console.log(
      "resize %d %d %s",
      maxHeight,
      maxWidth,
      showThumbnails.toString()
    );

    if (showThumbnails) {
      this.setState({
        showThumbnails,
        carouselWidth: maxWidth,
        carouselImageHeight: carouselImageHeight - kThumbnailHeight - kMargin,
        thumbnailsContainerWidth: Math.min(maxWidth, 5 * kThumbnailHeight)
      });
    } else {
      const thumbnailsContainerWidth = kThumbnailHeight - kMargin;
      this.setState({
        showThumbnails,
        carouselWidth: maxWidth,
        carouselImageHeight: carouselImageHeight - thumbnailsContainerWidth,
        thumbnailsContainerWidth
      });
    }
  }

  onChangeCarousel(value) {
    this.props.history.push(
      "/carousel/" +
        this.state.source +
        "/" +
        parseInt(mod(value, this.state.thumbnails.length))
    );
    this.setState({ value, thumbnail: value });
  }

  onChangeThumbnails(thumbnail) {
    if (this.state.showThumbnails) {
      this.setState({ thumbnail });
    } else {
      this.onClickThumbnail(thumbnail);
    }
  }

  onClickThumbnail(value) {
    this.props.history.push(
      "/carousel/" +
        this.state.source +
        "/" +
        parseInt(mod(value, this.state.thumbnails.length))
    );

    const adjustedValue = this.getThumbnailIndex(
      this.state.thumbnail,
      parseInt(value)
    );
    this.setState({
      value: adjustedValue,
      thumbnail: adjustedValue
    });
  }

  onClickArrow(delta) {
    this.onChangeThumbnails(this.state.thumbnail + delta);
  }

  getThumbnailIndex(centerThumbnailIndex, targetListIndex) {
    // Convert index in list to a thumbnail index.
    const centerListIndex = mod(
      centerThumbnailIndex,
      this.state.elements.length
    );
    var delta;
    if (Math.abs(targetListIndex - centerListIndex) > 2) {
      if (targetListIndex > centerListIndex) {
        delta =
          targetListIndex - (centerListIndex + this.state.elements.length);
      } else {
        delta = targetListIndex + this.state.elements.length - centerListIndex;
      }
      return centerThumbnailIndex + delta;
    }
    delta = targetListIndex - centerListIndex;
    return centerThumbnailIndex + delta;
  }

  render() {
    const {
      showThumbnails,
      carouselWidth,
      carouselImageHeight,
      thumbnail,
      elements,
      value
    } = this.state;
    return (
      <div className={styles.container} ref={this.carouselContainerElement}>
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={this.onResize}
        />
        <div className={styles.cancelContainer}>
          <Link to={"/" + this.state.source}>
            <Icon name="times" className={styles.cancelButton} />
          </Link>
        </div>
        <div className={styles.carouselContainer}>
          <ReactCarousel
            infinite
            centered
            value={value}
            onChange={this.onChangeCarousel}
            itemWidth={carouselWidth}
            slides={elements.map(({ primary, secondary, src }, i) => (
              <div
                key={i}
                className={styles.carouselItem}
                style={{
                  height: carouselImageHeight,
                  width: carouselWidth
                }}
              >
                <div className={styles.carouselHeader}>
                  <div className={styles.carouselDescription}>
                    <div className={styles.carouselItemPrimary}>
                      {primary || "Primary text"}
                    </div>
                    <div className={styles.carouselItemSecondary}>
                      {secondary || "Secondary text"}
                    </div>
                  </div>
                </div>
                <div className={styles.carouselItemImage}>
                  <img alt={src} src={"/" + src} />
                </div>
              </div>
            ))}
          />
          <div
            className={styles.thumbnailsContainer}
            style={{ marginTop: kMargin }}
          >
            {showThumbnails ? (
              <ReactCarousel
                infinite
                centered
                arrowLeft={<Icon className={styles.arrow} name="angle-left" />}
                arrowRight={
                  <Icon className={styles.arrow} name="angle-right" />
                }
                addArrowClickHandler
                className={styles.thumbnails}
                value={showThumbnails ? thumbnail : value}
                onChange={this.onChangeThumbnails}
                slidesPerScroll={showThumbnails ? 3 : 1}
                itemWidth={kThumbnailHeight}
                slides={elements.map(({ src }, i) => (
                  <Thumbnail
                    value={i}
                    src={"/" + src}
                    onClick={this.onClickThumbnail}
                    selected={mod(value, this.state.thumbnails.length) === i}
                  />
                ))}
              />
            ) : (
              <div className={styles.arrowsContainer}>
                <Icon
                  className={styles.arrow}
                  name="angle-left"
                  onClick={() => {
                    this.onClickArrow(-1);
                  }}
                />
                <Icon
                  className={styles.arrow}
                  name="angle-right"
                  onClick={() => {
                    this.onClickArrow(1);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
