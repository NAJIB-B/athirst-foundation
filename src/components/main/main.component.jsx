import "./main.style.css";
import NavBar from "../navbar/navbar.component";

const Main = () => {
  return (
    <div className="mainDiv">
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
        <a href="" className="mainButtons">
          GET IN TOUCH
        </a>
        <a href="" className=" outlineBtn">
          LEARN MORE
        </a>
      </div>
    </div>
  );
};

export default Main;
