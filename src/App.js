import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Profile from "./Profile";
import Carousel from "./Carousel";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Profile} />
          <Route path="/illustration" component={Profile} />
          <Route path="/design" component={Profile} />
          <Route exact path="/carousel/:source/:index?" component={Carousel} />
        </div>
      </Router>
    );
  }
}

export default App;
