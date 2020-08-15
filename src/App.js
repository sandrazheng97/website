import React, { Component } from "react";
import { Route, HashRouter as Router } from "react-router-dom";
import ReactResizeDetector from "react-resize-detector";

import styles from "./App.module.css";
import Header from "./Header";
import Profile from "./Profile";
import Carousel from "./Carousel";
import AboutPage from "./AboutPage";
import Constants from "./Constants.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: window.innerWidth <= Constants.mobileViewMaxWidth
        };

        this.onResize = this.onResize.bind(this);
    }

    onResize() {
        this.setState({
            isMobile: window.innerWidth <= Constants.mobileViewMaxWidth
        });
    }

    render() {
        const { isMobile } = this.state;
        const placeHolderStyle = isMobile ? { height: Constants.headerHeight, width: "100%" } : { width: Constants.sideBarWidth };
        return (
            <Router>
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={this.onResize}
        />
        <div
          className={styles.app}
          style={{ flexDirection: isMobile ? "column" : "row" }}
        >
          <Header />
          <div style={placeHolderStyle} />
          <div
            className={styles.appBody}
            ref={this.profileElement}
            style={{ marginTop: isMobile ? 0 : 100 }}
          >
            <Route exact path="/" component={Profile} />
            <Route path="/illustration" component={Profile} />
            <Route path="/design" component={Profile} />
            <Route path="/sketchbook" component={Profile} />
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
              Copyright © 2019-2020 Sandra Zheng
            </div>
          </div>
        </div>
      </Router>
        );
    }
}

export default App;