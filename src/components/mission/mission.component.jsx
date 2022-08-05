import "./mission.style.css";
import missionImg from "../../assets/missionImg.webp";
import vissionImg from "../../assets/vissionImg.webp";
import programsImg from "../../assets/programsImg.webp";

const Mission = () => {
  return (
    <div className="missionDiv">
      <div className="missionGrid">
        <div className="missionGridCard">
          <img src={missionImg} alt="" className="missionGridCardImg" />
        </div>
        <div className="missionGridCard">
          <div className="missionGridCardText">
            <h4>Our Mission</h4>
            <p>
              Eager to Help a talented generation in the way of Christ. Eager to
              help our community and schools{" "}
            </p>
          </div>
        </div>

        <div className="missionGridCard ">
          <div className="missionGridCardText">
            <h4>Our Vision</h4>
            <p>
              Raising a talented generation to help impact our region and the
              world for Christ.
            </p>
          </div>
        </div>
        <div className="missionGridCard">
          <img src={vissionImg} alt="" className="missionGridCardImg" />
        </div>
        <div className="missionGridCard">
          <img src={programsImg} alt="" className="missionGridCardImg" />
        </div>
        <div className="missionGridCard">
          <div className="missionGridCardText">
            <h4>Our Programs</h4>
            <p>
              Community development through outreaches and special events,
              including school competitions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
