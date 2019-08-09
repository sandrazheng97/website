import React, { Component } from "react";
import { Route, HashRouter as Router } from "react-router-dom";

import styles from "./App.module.css";
import Header from "./Header";
import Profile from "./Profile";
import Carousel from "./Carousel";
import AboutPage from "./AboutPage";
import ShopPage from "./ShopPage";

import Constants from "./Constants.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.app}>
          <Header />
          <div className={styles.appBody} ref={this.profileElement}>
            <Route exact path="/" component={Profile} />
            <Route path="/illustration" component={Profile} />
            <Route path="/design" component={Profile} />
            <Route path="/about" component={AboutPage} />
            <Route path="/shop" component={AboutPage} />
            <Route
              exact
              path="/carousel/:source/:index?"
              component={Carousel}
            />
            <div
              className={styles.copyright}
              style={{ height: Constants.copyrightHeight }}
            >
              Copyright © 2019 Sandra Zheng
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
