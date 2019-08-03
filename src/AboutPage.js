import React, { Component } from "react";
import LazyLoad from "react-lazyload";

import "./AboutPage.css";

class AboutPage extends Component {
  render() {
    const image = "/images/sleeping_village.jpg";
    return (
      <div className="about-container">
        <div className="picture-container">
          <div className="picture">
            <LazyLoad>
              <img alt={image} src={image} align="middle" />
            </LazyLoad>
          </div>
        </div>
        <div className="about-divider" />
        <div className="info">
          <div className="info-title">INFO</div>

          <div className="info-body">
            Sandra Zheng is a Canadian born illustrator and designer who
            graduated from ArtCenter College of Design. She is based in
            Vancouver, BC. Her love for nature, animals, and people influence
            the way her work is shaped.
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
