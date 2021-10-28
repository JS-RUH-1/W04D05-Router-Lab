import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function Navbar() {
  return (
    <Router>
        <ReactBootStrap.Navbar bg="dark" variant="dark">
                <ReactBootStrap.Container>
                  <ReactBootStrap.Nav className="me-auto">
                    <ReactBootStrap.Nav.Link ><Link to="/home">Home</Link></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link ><Link to="/about">About</Link></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link ><Link to="/contact">Contact</Link></ReactBootStrap.Nav.Link>
                  </ReactBootStrap.Nav>
                </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>

        <Switch>
                <Route exact path="/home">
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

export default Navbar;
