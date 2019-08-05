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
          <div className="info-title">HELLO!</div>

          <div className="info-body">
            Sandra Zheng is a Canadian born illustrator and designer who
            recently graduated from ArtCenter College of Design. She is based in
            Vancouver, BC. Her illustrations usually depict nature with playful 
            interactions of her own whimsical characters.
            
            
          </div>
        </div>
      </div>
        );
    }
}

export default AboutPage;