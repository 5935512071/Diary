import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="navLeft">
        <h1 className="naver-logo">Your's Review diary</h1>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>

          <li className="navListItem">
            <Link className="link" to="/mydiary">
              MY DIARY
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/classification">
              CLASSIFICATION
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/login">
              LOGOUT
            </Link>
          </li>
        </ul>
      </div>
      <ul className="navList">
        <li className="navListItem">
          <Link className="link" to="/login">
            LOGIN
          </Link>
        </li>
        <li className="navListItem">
          <Link className="link" to="/register">
            REGISTER
          </Link>
        </li>
      </ul>
    </div>
  );
}
