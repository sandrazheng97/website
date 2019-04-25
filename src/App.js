import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Profile from "./Profile";
import Carousel from "./Carousel";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <Route exact path="/" component={Profile} />
          <Route path="/carousel/:index?" component={Carousel} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
