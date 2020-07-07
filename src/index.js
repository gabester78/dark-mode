import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import "./styles.scss";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/charts" component={Charts} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
