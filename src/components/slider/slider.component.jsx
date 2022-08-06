import "./slider.style.css";
import missionImg from "../../assets/missionImg.webp";
import vissionImg from "../../assets/vissionImg.webp";
import programsImg from "../../assets/programsImg.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Slider = () => {
  return (
    <div id="gallery">
      <AnimationOnScroll animateIn="animate__tada">
        <h3 className="photoGalleryText">PHOTO GALLERY</h3>
      </AnimationOnScroll>

      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={missionImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vissionImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={programsImg} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
