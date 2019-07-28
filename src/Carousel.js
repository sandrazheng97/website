import React, { Component } from "react";

import ReactCarousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Icon from "react-fa";
import { Link } from "react-router-dom";

import Thumbnail from "./Thumbnail";

import "./Carousel.css";
import DesignElements from "./Data";
import IllustrationElements from "./TestData.js";

function mod(n, m) {
  return ((n % m) + m) % m;
}

const kMaxCarouselImageSize = 830;

class Carousel extends Component {
  constructor(props) {
    super(props);
    const source = props.match.params.source;
    var elements = source === "design" ? DesignElements : IllustrationElements;
    console.log(source);

    const selected = props.match.params.index || 0;
    this.state = {
      source,
      value: selected,
      thumbnail: selected,
      elements,
      thumbnails: elements
    };
    this.onChangeCarousel = this.onChangeCarousel.bind(this);
    this.onChangeThumbnails = this.onChangeThumbnails.bind(this);
    this.onClickThumbnail = this.onClickThumbnail.bind(this);
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        const showThumbnails = window.innerWidth >= kMaxCarouselImageSize;
        this.setState({
          showThumbnails,
          carouselImageWidth: Math.min(kMaxCarouselImageSize, window.innerWidth)
        });
      },
      false
    );

    const showThumbnails = window.innerWidth >= kMaxCarouselImageSize;
    this.setState({
      showThumbnails,
      carouselImageWidth: Math.min(kMaxCarouselImageSize, window.innerWidth)
    });
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
      this.setState({ value: thumbnail });
    }
  }

  onClickThumbnail(value) {
    this.props.history.push(
      "/carousel/" +
        this.state.source +
        "/" +
        parseInt(mod(value, this.state.thumbnails.length))
    );
    this.setState({ value, thumbnail: value });
  }

  render() {
    const { showThumbnails, carouselImageWidth } = this.state;
    return (
      <div className="container">
        <div className="carousel-container">
          <ReactCarousel
            infinite
            centered
            className="carousel"
            value={this.state.value}
            onChange={this.onChangeCarousel}
            itemWidth={carouselImageWidth}
            slides={this.state.elements.map(
              ({ primary, secondary, src }, i) => (
                <div
                  key={i}
                  className="carousel-item"
                  style={{ width: carouselImageWidth }}
                >
                  <div className="carousel-header">
                    <div className="side" />
                    <div className="carousel-description">
                      <div className="carousel-item-primary">
                        {primary || "Primary text"}
                      </div>
                      <div className="carousel-item-secondary">
                        {secondary || "Secondary text"}
                      </div>
                    </div>
                    <div className="side">
                      <Link to="/">
                        <Icon name="times" className="cancel-button" />
                      </Link>
                    </div>
                  </div>
                  <div className="carousel-item-image">
                    <img alt={src} src={"/" + src} />
                  </div>
                </div>
              )
            )}
          />
          <ReactCarousel
            infinite
            centered
            arrowLeft={<Icon className="arrow" name="angle-left" />}
            arrowRight={<Icon className="arrow" name="angle-right" />}
            addArrowClickHandler
            className="thumbnails"
            value={showThumbnails ? this.state.thumbnail : this.state.value}
            onChange={this.onChangeThumbnails}
            slidesPerPage={0}
            slidesPerScroll={showThumbnails ? 3 : 1}
            itemWidth={200}
            slides={
              showThumbnails &&
              this.state.elements.map(({ src }, i) => (
                <Thumbnail
                  value={i}
                  src={"/" + src}
                  onClick={this.onClickThumbnail}
                  selected={
                    mod(this.state.value, this.state.thumbnails.length) === i
                  }
                />
              ))
            }
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
