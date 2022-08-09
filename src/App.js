import "./App.css";
import Main from "./components/main/main.component";
import AboutUs from "./components/aboutUs/aboutUs.component";
import Mission from "./components/mission/mission.component";
import Slider from "./components/slider/slider.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";
import RecentEvent from "./components/recentEvent/recentEvent.component";
import { useContext } from "react";
import { GalleryContext } from "./components/context/gallery.context";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    // get image to show :)
    const getImage = () => {
      axios
        .get("https://athirst-backend.herokuapp.com/get-img")
        .then((res) => {
         
          setGallery(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getImage();
    
  }, []);

  return (
    <div className="App">
      <Main></Main>
      <AboutUs></AboutUs>
      <Mission></Mission>
      <Slider gallery={gallery}></Slider>
      <RecentEvent></RecentEvent>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
