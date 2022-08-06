import "./aboutUs.style.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const AboutUs = () => {
  return (
    <div className="aboutUsDiv" id="aboutUs">
      <h2> ABOUT US</h2>

      <p>
        The Athirst foundation is a Christian organization started by a lover
        and follower of Jesus Christ. Helping helpless children and adults in
        our rural community in Nigeria, Africa and the world at large by
        providing food, education, shelter/accommodation, health care,
        technology, talent, discovery and helping a talent grow.
      </p>

      <AnimationOnScroll animateIn="animate__tada">
        <h5>
          The Athirst foundation is a proud sponsor of football club Beecroft
          football academy
        </h5>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <p>
          We seek to connect with others to see things happen and change. As we
          help them to learn, to achieve their dreams in life. We want to be a
          part of their support as they succeed in life.
        </p>
      </AnimationOnScroll>

      <h5>We were inspired by God's word in Revelation 21:6:</h5>
      <p>
        "And he said unto me. It is done, I am the Alpha and Omega. the
        beginning and the end. I will give unto him that is ATHIRST of the
        fountain of the water of life freely."
      </p>
    </div>
  );
};

export default AboutUs;
