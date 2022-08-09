import "./slider.style.css";
import missionImg from "../../assets/missionImg.webp";
import vissionImg from "../../assets/vissionImg.webp";
import programsImg from "../../assets/programsImg.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useContext } from "react";
import { GalleryContext } from "../context/gallery.context";
import { Pagination, Navigation } from "swiper";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Slider = ({ gallery }) => {

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
        {gallery.map((item) => {
          console.log(item.img);
          return (
            <SwiperSlide>
              <img src={item.img} alt="" />
            </SwiperSlide>
          );
        })}
       
      </Swiper>
    </div>
  );
};

export default Slider;
