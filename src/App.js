import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Movie from "./Components/Movie";
import Home from "./Components/Home";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:id" component={Movie} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
