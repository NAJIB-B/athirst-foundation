import "./App.css";
import Main from "./components/main/main.component";
import AboutUs from "./components/aboutUs/aboutUs.component";
import Mission from "./components/mission/mission.component";
import Slider from "./components/slider/slider.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";
import RecentEvent from "./components/recentEvent/recentEvent.component";

function App() {
  return (
    <div className="App">
      <Main></Main>
      <AboutUs></AboutUs>
      <Mission></Mission>
      <Slider></Slider>
      <RecentEvent></RecentEvent>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
