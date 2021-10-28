import "../App.css"
import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
function NavBar(props) {
  return (
    <Router>
      <nav>
       <li> <Link to="/"     className="mylink" >Home</Link></li>
       <li> <Link to="/contact" className="mylink" >Contact Us</Link></li>
       <li>  <Link to="/about"  className="mylink" >About Us</Link></li>
        <div class="animation start-home"></div>
      </nav>

      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default NavBar;
