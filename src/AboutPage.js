import React, { Component } from "react";
import LazyLoad from "react-lazyload";

import styles from "./AboutPage.module.css";

class AboutPage extends Component {
  render() {
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
