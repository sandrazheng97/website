import React, { Component } from "react";
import LazyLoad from "react-lazyload";

import styles from "./AboutPage.module.css";

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleResize);
  }

  handleResize(event) {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  render() {
    const { width } = this.state;
    const image = "/images/sleeping_village.jpg";
    return (
      <div className={styles.container}>
        <div className={styles.pictureContainer}>
          <div className={styles.picture}>
            <LazyLoad>
              <img alt={image} src={image} align="middle" />
            </LazyLoad>
          </div>
        </div>
        <div className={styles.aboutDivider} />
        <div className={styles.info}>
          <div className={styles.infoTitle}>INFO</div>
          <div className={styles.infoBody}>
            Sandra Zheng is a Canadian born illustrator and designer who
            recently graduated from ArtCenter College of Design. She is based in
            Vancouver, BC. Her illustrations usually depict nature with playful
            interactions of her own whimsical characters.
          </div>
          <div className={styles.resume}>
            <a href="/images/resume.pdf" target="_blank">
              Resume
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
