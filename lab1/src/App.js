import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/AboutUs">
            <AboutUs />
          </Route>
          <Route exact path="/ContactUs">
            <ContactUs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
