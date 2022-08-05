import "./slider.style.css";
import missionImg from "../../assets/missionImg.webp";
import vissionImg from "../../assets/vissionImg.webp";
import programsImg from "../../assets/programsImg.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <>
      <h3 className="photoGalleryText">PHOTO GALLERY</h3>
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
    </>
  );
};

export default Slider;
