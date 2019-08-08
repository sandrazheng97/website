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

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

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

    this.carouselSlider = React.createRef();
    this.thumbnailSlider = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.onClickThumbnail = this.onClickThumbnail.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onPrev = this.onPrev.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.initialValue !== nextState.initialValue;
  // }

  onChange(direction) {
    const delta = direction === "left" ? -1 : 1;
    this.setState({
      value: this.state.value + delta
    });
  }

  onClickThumbnail(value) {
    console.log(value);
    console.log(this.carouselSlider);
    this.carouselSlider.current.slickGoTo(value);
    this.setState({
      value
    });
  }

  onNext() {
    this.thumbnailSlider.current.slickNext();
  }

  onPrev() {
    this.thumbnailSlider.current.slickPrev();
  }

  render() {
    const { elements, initialValue, value } = this.state;
    const carouselSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: initialValue,
      onSwipe: this.onChange,
      arrows: false
    };
    const thumbnailSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: initialValue,
      arrows: false
    };
    console.log("value %d", value);
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
          <Slider {...carouselSettings} ref={this.carouselSlider}>
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
          style={{ height: Constants.thumbnailContainerHeight }}
        >
          <Icon
            className={styles.arrow}
            name="angle-left"
            onClick={this.onPrev}
          />
          <Slider {...thumbnailSettings} ref={this.thumbnailSlider}>
            {elements.map(({ primary, secondary, src }, i) => (
              <div key={i} className={styles.carouselItem}>
                <Thumbnail
                  value={i}
                  src={"/" + src}
                  onClick={this.onClickThumbnail}
                  selected={value === i}
                />
              </div>
            ))}
          </Slider>
          <Icon
            className={styles.arrow}
            name="angle-right"
            onClick={this.onNext}
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
