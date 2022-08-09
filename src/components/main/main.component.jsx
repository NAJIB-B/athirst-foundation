import "./main.style.css";
import NavBar from "../navbar/navbar.component";
import { HashLink as Link } from "react-router-hash-link";
const Main = () => {
  return (
    <div className="mainDiv" id="home">
      <NavBar></NavBar>
      <div className="mainTextDiv">
        <h1>HELPING THE HELPLESS</h1>
        <p>
          Our non-profit organization seeks to help children be successful by
          providing food, education, healthcare, access to technology, talent
          discovery and shelter.
        </p>
      </div>
      <div className="mainButttonDiv">
        <Link smooth to="/#contact" className="mainButtons">
          GET IN TOUCH
        </Link>

        <Link smooth to="/#aboutUs" className=" outlineBtn">
          LEARN MORE
        </Link>
      </div>
    </div>
  );
};

export default Main;
