import React, { Component } from "react";

import ReactCarousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Icon from "react-fa";
import { Link } from "react-router-dom";

import Thumbnail from "./Thumbnail";

import styles from "./Carousel.module.css";
import Slider from "react-slick";

import DesignElements from "./DesignData";
import IllustrationElements from "./IllustrationData.js";

import Constants from "./Constants.js";
import "./Slider.css";
import ClassNames from "classnames";

function mod(n, m) {
  return ((n % m) + m) % m;
}

const kShowThumbnailWidthThreshold = 600;
const kShowThumbnailHeightThreshold = 500;
const kMargin = 20;

class Carousel extends Component {
  constructor(props) {
    super(props);
    const source = props.match.params.source;
    var elements = source === "design" ? DesignElements : IllustrationElements;

    const selected = parseInt(props.match.params.index) || 0;
    console.log(selected);
    this.state = {
      source,
      value: selected,
      initialValue: selected,
      thumbnail: selected,
      elements,
      thumbnails: elements,
      showThumbnails: true,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };

    this.onChange = this.onChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.initialValue !== nextState.initialValue;
  }

  onChange(direction) {
    const delta = direction === "left" ? -1 : 1;
    this.setState({
      value: this.state.value + delta
    });
  }

  render() {
    const { elements, initialValue } = this.state;
    const carouselSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: initialValue,
      onSwipe: this.onChange
    };
    const thumbnailSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: initialValue
    };
    return (
      <div className={styles.container}>
        <div
          className={styles.cancelContainer}
          style={{ height: Constants.cancelContainerHeight }}
        >
          <Link to={"/" + this.state.source}>
            <Icon name="times" className={styles.cancelButton} />
          </Link>
        </div>
        <div
          className={ClassNames({ [styles.carousel]: true, carousel: true })}
        >
          <Slider {...carouselSettings}>
            {elements.map(({ primary, secondary, src }, i) => (
              <div key={i} className={styles.carouselItem}>
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
          </Slider>
        </div>
        <div
          className={ClassNames({ [styles.thumbnails]: true, thumbnail: true })}
        >
          <Slider {...thumbnailSettings}>
            {elements.map(({ primary, secondary, src }, i) => (
              <div key={i} className={styles.carouselItem}>
                <div className={styles.carouselItemImage}>
                  <img alt={src} src={"/" + src} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

class CarouselOther extends Component {
  constructor(props) {
    super(props);
    const source = props.match.params.source;
    var elements = source === "design" ? DesignElements : IllustrationElements;

    const selected = parseInt(props.match.params.index) || 0;
    console.log(selected);
    this.state = {
      source,
      value: selected,
      thumbnail: selected,
      elements,
      thumbnails: elements,
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
      windowHeight -
      Constants.headerHeight -
      Constants.cancelContainerHeight -
      Constants.copyrightHeight;
    const widthSpace = windowWidth;

    const showThumbnails =
      heightSpace >= kShowThumbnailHeightThreshold &&
      widthSpace >= kShowThumbnailWidthThreshold;
    const maxCarouselImageSize = heightSpace;

    const carouselImageHeight =
      (showThumbnails
        ? maxCarouselImageSize - Constants.thumbnailContainerHeight
        : maxCarouselImageSize - Constants.arrowsContainerHeight) - kMargin;
    return (
      <div className={styles.container}>
        <div
          className={styles.cancelContainer}
          style={{ height: Constants.cancelContainerHeight }}
        >
          <Link to={"/" + this.state.source}>
            <Icon name="times" className={styles.cancelButton} />
          </Link>
        </div>

        <div
          className={styles.carouselContainer}
          ref={this.carouselContainerElement}
        >
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
          <div
            className={styles.thumbnailsContainer}
            style={{
              marginTop: kMargin,
              height: showThumbnails
                ? Constants.thumbnailContainerHeight
                : Constants.arrowsContainerHeight
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
                itemWidth={Constants.thumbnailContainerHeight}
                slides={elements.map(({ src }, i) => (
                  <Thumbnail
                    value={i}
                    src={"/" + src}
                    width={Constants.thumbnailContainerHeight - 20}
                    height={Constants.thumbnailContainerHeight - 20}
                    onClick={this.onClickThumbnail}
                    selected={mod(value, this.state.thumbnails.length) === i}
                  />
                ))}
              />
            ) : (
              <div
                className={styles.arrowsContainer}
                style={{ height: Constants.arrowsContainerHeight }}
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
