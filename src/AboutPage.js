import React, { Component } from "react";
import ClassNames from "classnames";

import styles from "./AboutPage.module.css";

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      isAboutPage: props.match.path === "/about"
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
    const { width, isAboutPage } = this.state;
    const image = "/images/sleeping_village.jpg";
    const showHorizontal = width >= 600;
    var infoContent;
    if (isAboutPage) {
      infoContent = (
        <div
          className={ClassNames({
            [styles.info]: true,
            [styles.infoHorizontal]: showHorizontal
          })}
        >
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
      );
    } else {
      infoContent = (
        <div
          className={ClassNames({
            [styles.info]: true,
            [styles.infoHorizontal]: showHorizontal
          })}
        >
          <div className={styles.infoTitle}>SHOP</div>
          <div className={styles.infoBody}>
            <div>We’re working on our site at the moment.</div>
            <p>Please check back soon.</p>
          </div>
        </div>
      );
    }

    return (
      <div
        className={ClassNames({
          [styles.container]: true,
          [styles.containerVertical]: !showHorizontal
        })}
      >
        <div
          className={ClassNames({
            [styles.pictureContainer]: true,
            [styles.pictureContainerHorizontal]: showHorizontal
          })}
          style={{ backgroundImage: "url(" + image + ")" }}
        />
        {infoContent}
      </div>
    );
  }
}

export default AboutPage;
