import React, { Component } from "react";
import Icon from "react-fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ClassNames from "classnames";

import Thumbnail from "./Thumbnail";
import styles from "./Carousel.module.css";
import "./Slider.css";
import DesignElements from "./DesignData";
import IllustrationElements from "./IllustrationData.js";
import SketchElements from "./SketchData";
import Constants from "./Constants.js";

class Carousel extends Component {
    constructor(props) {
        super(props);
        const source = props.match.params.source;
        var elements = source === "design" ? DesignElements : IllustrationElements;
        elements = source === "sketchbook" ? SketchElements : elements;

        const selected = parseInt(props.match.params.index) || 0;
        this.state = {
            source,
            value: selected,
            initialValue: selected,
            thumbnail: selected,
            elements,
            thumbnails: elements,
            showThumbnails: window.innerWidth >= Constants.showThumbnailWidthThreshold &&
                window.innerHeight >= Constants.ShowThumbnailHeightThreshold
        };

        this.carouselSlider = React.createRef();
        this.thumbnailSlider = React.createRef();
        this.onChange = this.onChange.bind(this);
        this.onClickThumbnail = this.onClickThumbnail.bind(this);
        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    onChange(direction) {
        const delta = direction === "left" ? -1 : 1;
        this.setState({
            value: this.state.value + delta
        });
    }

    onClickThumbnail(value) {
        this.carouselSlider.current.slickGoTo(value);
        this.setState({
            value
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize(event) {
        this.setState({
            showThumbnails: window.innerWidth >= Constants.showThumbnailWidthThreshold &&
                window.innerHeight >= Constants.showThumbnailHeightThreshold
        });
    }

    onNext() {
        if (this.state.showThumbnails) {
            this.thumbnailSlider.current.slickNext();
        } else {
            this.carouselSlider.current.slickNext();
        }
    }

    onPrev() {
        if (this.state.showThumbnails) {
            this.thumbnailSlider.current.slickPrev();
        } else {
            this.carouselSlider.current.slickPrev();
        }
    }

    render() {
        const { elements, initialValue, value, showThumbnails } = this.state;
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

        return (
            <div className={styles.container}>
        <div className={styles.mainContent}>
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
            className={ClassNames({
              [styles.thumbnails]: true,
              thumbnail: true
            })}
            style={{
              height: showThumbnails
                ? Constants.thumbnailFullContainerHeight
                : Constants.thumbnailSmallContainerHeight
            }}
          >
            <Icon
              className={styles.arrow}
              name="angle-left"
              onClick={this.onPrev}
            />
            {showThumbnails && (
              <Slider {...thumbnailSettings} ref={this.thumbnailSlider}>
                {elements.map(({ primary, secondary, srcMini }, i) => (
                  <div key={i} className={styles.carouselItem}>
                    <Thumbnail
                      value={i}
                      src={"/" + srcMini}
                      onClick={this.onClickThumbnail}
                      selected={value === i}
                    />
                  </div>
                ))}
              </Slider>
            )}
            <Icon
              className={styles.arrow}
              name="angle-right"
              onClick={this.onNext}
            />
          </div>
        </div>
      </div>
        );
    }
}

export default Carousel;