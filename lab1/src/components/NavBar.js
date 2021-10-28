import { Link } from "react-router-dom";
import "../App.css";
function NavBar() {
  return (
    <div className="navBar">
      <lu className="navBarUl">
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/AboutUs">About us</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact us</Link>
        </li>
      </lu>
    </div>
  );
}
export default NavBar;
