import "./mission.style.css";
import missionImg from "../../assets/missionImg.webp";
import vissionImg from "../../assets/vissionImg.webp";
import programsImg from "../../assets/programsImg.webp";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Mission = () => {
  return (
    <div className="missionDiv">
      <div className="missionGrid">
        <div className="missionGridCard">
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <img src={missionImg} alt="" className="missionGridCardImg" />
          </AnimationOnScroll>
        </div>
        <div className="missionGridCard">
          <div className="missionGridCardText">
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <h4>Our Mission</h4>
              <p>
                Eager to Help a talented generation in the way of Christ. Eager
                to help our community and schools{" "}
              </p>
            </AnimationOnScroll>
          </div>
        </div>

        <div className="missionGridCard ">
          <div className="missionGridCardText">
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <h4>Our Vision</h4>
              <p>
                Raising a talented generation to help impact our region and the
                world for Christ.
              </p>
            </AnimationOnScroll>
          </div>
        </div>
        <div className="missionGridCard">
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <img src={vissionImg} alt="" className="missionGridCardImg" />
          </AnimationOnScroll>
        </div>
        <div className="missionGridCard">
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <img src={programsImg} alt="" className="missionGridCardImg" />
          </AnimationOnScroll>
        </div>
        <div className="missionGridCard">
          <div className="missionGridCardText">
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <h4>Our Programs</h4>
              <p>
                Community development through outreaches and special events,
                including school competitions.
              </p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
