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
          <div className={styles.infoTitle}>Hi There! </div>
          <div className={styles.infoBody}>
            My name is Sandra. I am a Canadian Illustrator and Designer from Vancouver, BC. 
            I recently graduated from ArtCenter College of Design with a BFA in Illustration. 
            My art is primarily inspired by nature and 
            animals that usually depict playful interactions of whimiscal characters in their
            own colorful world.
            
            For jobs, commission enquiries, or simply to say hi: 
            sandrazhengart@gmail.com
           
          </div>
        </div>
      </div>
        );
    }
}

export default AboutPage;