import "./recentEvent.style.css";
import missionImg from "../../assets/missionImg.webp";
import vissionImg from "../../assets/vissionImg.webp";

const RecentEvent = () => {
  return (
    <div className="recentEventDiv">
      <h3>Recent Event</h3>
      <p>
        The Athirst Foundation visited Harfard Model School at Aina Street in
        Lagos and provided Bibles. books and pens to students in Primary 6. What
        a great and amazing time with the students.{" "}
      </p>

      <div className="recentEventDivGrid">
        <div>
          <img src={missionImg} alt="" className="recentEventDivGridImg" />
        </div>
        <div>
          <img src={vissionImg} alt="" className="recentEventDivGridImg" />
        </div>
      </div>
    </div>
  );
};

export default RecentEvent;
