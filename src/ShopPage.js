import React, { Component } from "react";
import LazyLoad from "react-lazyload";

import styles from "./ShopPage.module.css";

class ShopPage extends Component {
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
          <div className={styles.infoBody}>
            <div>We’re working on our site at the moment.</div>
            <p>Please check back soon.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopPage;
