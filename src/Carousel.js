import React, { Component } from "react";

import ReactCarousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Icon from "react-fa";
import { Link } from "react-router-dom";

import Thumbnail from "./Thumbnail";

import "./Carousel.css";
import Elements from "./Data";

function mod(n, m) {
  return ((n % m) + m) % m;
}

class Carousel extends Component {
  constructor(props) {
    super(props);
    var elements = Elements;

    const selected = props.match.params.index || 0;
    this.state = {
      value: selected,
      thumbnail: selected,
      elements,
      thumbnails: elements,
      showThumbnails: window.innerWidth >= 830
    };
    this.onChangeCarousel = this.onChangeCarousel.bind(this);
    this.onChangeThumbnails = this.onChangeThumbnails.bind(this);
    this.onClickThumbnail = this.onClickThumbnail.bind(this);
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          showThumbnails: window.innerWidth >= 830
        });
      },
      false
    );
  }

  onChangeCarousel(value) {
    this.props.history.push(
      "/carousel/" + parseInt(mod(value, this.state.thumbnails.length))
    );
    this.setState({ value, thumbnail: value });
  }

  onChangeThumbnails(thumbnail) {
    this.setState({ thumbnail });
  }

  onClickThumbnail(value) {
    this.props.history.push(
      "/carousel/" + parseInt(mod(value, this.state.thumbnails.length))
    );
    this.setState({ value, thumbnail: value });
  }

  render() {
    const { showThumbnails } = this.state;
    return (
      <div className="container">
          <div className="side" />
          <div className="carousel-container">
            <ReactCarousel
              infinite
              centered
              arrowLeft={!showThumbnails && <Icon className="arrow" name="angle-left" />}
              arrowRight={!showThumbnails && <Icon className="arrow" name="angle-right" />}
              addArrowClickHandler
              className="carousel"
              value={this.state.value}
              onChange={this.onChangeCarousel}
              slides={this.state.elements.map(({ src }, i) => (
                <div key={i} className="carousel-item">
                  <div className="carousel-item-primary">Primary Text</div>
                  <div className="carousel-item-secondary">Secondary Text</div>
                  <div className="carousel-item-image">
                    <img alt={src} src={src} />
                  </div>
                </div>
              ))}
            />
            <ReactCarousel
              infinite
              centered
              arrowLeft={<Icon className="arrow" name="angle-left" />}
              arrowRight={<Icon className="arrow" name="angle-right" />}
              addArrowClickHandler
              className="thumbnails"
              value={this.state.thumbnail}
              onChange={this.onChangeThumbnails}
              slidesPerPage={0}
              slidesPerScroll={3}
              itemWidth={200}
              slides={this.state.elements.map(({ src }, i) => (
                <Thumbnail
                  value={i}
                  src={src}
                  onClick={this.onClickThumbnail}
                  selected={
                    mod(this.state.value, this.state.thumbnails.length) === i
                  }
                />
              ))}
            />
          </div>
          <div className="side">
            <Link to="/">
              <Icon name="times" className="cancel-button" />
            </Link>
          </div>
      </div>
    );
  }
}

export default Carousel;
