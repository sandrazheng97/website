import React, { Component } from "react";

import ReactCarousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Icon from "react-fa";
import { Link } from "react-router-dom";

import Thumbnail from "./Thumbnail";

import styles from "./Carousel.module.css";
import DesignElements from "./DesignData";
import IllustrationElements from "./IllustrationData.js";

import { SizeMe } from "react-sizeme";

function mod(n, m) {
  return ((n % m) + m) % m;
}

const kShowThumbnailWidthThreshold = 600;
const kShowThumbnailHeightThreshold = 500;
const kMargin = 20;
const kThumbnailHeight = 150;
const kArrowsContainerHeight = 40;
const kCancelContainerHeight = 25;

const kHeaderHeight = 120;
const kCopyrightHeight = 52;

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
      showThumbnails: true,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };
    this.onChangeCarousel = this.onChangeCarousel.bind(this);
    this.onChangeThumbnailsList = this.onChangeThumbnailsList.bind(this);
    this.onClickThumbnail = this.onClickThumbnail.bind(this);
    this.onClickArrow = this.onClickArrow.bind(this);

    this.onResize = this.onResize.bind(this);
    this.carouselContainerElement = React.createRef();
  }

  onResize() {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth:
        this.carouselContainerElement.current.clientWidth || window.innerWidth
    });
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
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

  onChangeThumbnailsList(thumbnail) {
    this.setState({ thumbnail });
  }

  onClickThumbnail(value) {
    this.props.history.push(
      "/carousel/" +
        this.state.source +
        "/" +
        parseInt(mod(value, this.state.thumbnails.length))
    );

    const adjustedValue = this.getCarouselIndex(
      this.state.value,
      parseInt(value)
    );
    this.setState({
      value: adjustedValue,
      thumbnail: adjustedValue
    });
  }

  onClickArrow(delta) {
    console.log("click arrow %d d", this.state.value, delta);
    this.setState({
      value: this.state.value + delta
    });
  }

  getCarouselIndex(centerThumbnailIndex, targetListIndex) {
    // Convert index in list to a thumbnail index.
    const centerListIndex = mod(
      centerThumbnailIndex,
      this.state.elements.length
    );

    var left, right;
    if (targetListIndex > centerListIndex) {
      right = targetListIndex - centerListIndex;
      left = centerListIndex + this.state.elements.length - targetListIndex;
    } else {
      left = centerListIndex - targetListIndex;
      right = targetListIndex + this.state.elements.length - centerListIndex;
    }

    if (right > left) {
      // go left
      return centerThumbnailIndex - left;
    } else {
      // go right
      return centerThumbnailIndex + right;
    }
  }

  render() {
    const {
      windowHeight,
      windowWidth,
      elements,
      thumbnail,
      value
    } = this.state;

    const heightSpace =
      windowHeight - kHeaderHeight - kCancelContainerHeight - kCopyrightHeight;
    const widthSpace = windowWidth;

    const showThumbnails =
      heightSpace >= kShowThumbnailHeightThreshold &&
      widthSpace >= kShowThumbnailWidthThreshold;
    const maxCarouselImageSize = heightSpace;

    const carouselImageHeight =
      (showThumbnails
        ? maxCarouselImageSize - kThumbnailHeight
        : maxCarouselImageSize - kArrowsContainerHeight) - kMargin;
    console.log("calcualted %d", widthSpace);
    return (
      <div className={styles.container}>
        <div
          className={styles.cancelContainer}
          style={{ height: kCancelContainerHeight }}
        >
          <Link to={"/" + this.state.source}>
            <Icon name="times" className={styles.cancelButton} />
          </Link>
        </div>

        <div
          className={styles.carouselContainer}
          ref={this.carouselContainerElement}
        >
          {/*<div
            className={styles.carousel}
            style={{ height: carouselImageHeight, width: windowWidth }}
          />*/}
          {
            <ReactCarousel
              infinite
              centered
              value={value}
              onChange={this.onChangeCarousel}
              className={styles.carousel}
              itemWidth={widthSpace}
              slides={elements.map(({ primary, secondary, src }, i) => (
                <div
                  key={i}
                  className={styles.carouselItem}
                  style={{
                    height: carouselImageHeight,
                    width: widthSpace
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
          }
          <div
            className={styles.thumbnailsContainer}
            style={{
              marginTop: kMargin,
              height: showThumbnails ? kThumbnailHeight : kArrowsContainerHeight
            }}
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
                onChange={this.onChangeThumbnailsList}
                slidesPerScroll={showThumbnails ? 3 : 1}
                itemWidth={kThumbnailHeight}
                slides={elements.map(({ src }, i) => (
                  <Thumbnail
                    value={i}
                    src={"/" + src}
                    width={kThumbnailHeight - 20}
                    height={kThumbnailHeight - 20}
                    onClick={this.onClickThumbnail}
                    selected={mod(value, this.state.thumbnails.length) === i}
                  />
                ))}
              />
            ) : (
              <div
                className={styles.arrowsContainer}
                style={{ height: kArrowsContainerHeight }}
              >
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
