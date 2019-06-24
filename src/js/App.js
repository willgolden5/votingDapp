/* eslint-disable handle-callback-err */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import Vote from "./VotingPage";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    console.log("STATE", this.state);
    return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/vote' component={Vote} />
      </Router>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
