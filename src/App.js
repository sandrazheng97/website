import React, { Component } from "react";
import { Route, HashRouter as Router } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Profile from "./Profile";
import Carousel from "./Carousel";
import AboutPage from "./AboutPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="app-body" ref={this.profileElement}>
            <Route exact path="/" component={Profile} />
            <Route path="/illustration" component={Profile} />
            <Route path="/design" component={Profile} />
            <Route path="/about" component={AboutPage} />
            <Route
              exact
              path="/carousel/:source/:index?"
              component={Carousel}
            />
            <div className="copyright">Copyright © 2019 Sandra Zheng</div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
