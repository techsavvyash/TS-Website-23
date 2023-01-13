import "./App.css";
import image from "/assets/Main-background.svg";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import Homecontainer from "./Components/Homecontainer/Homecontainer";
import Footer from "./Components/Footer/Footer";
import Sponsors from "./Components/Sponsors/Sponsors";
import TestimonialCarousel from "./Components/Testimonial/Carousel/TestimonialCarousel";
import Popup from "./Components/Popup/Popup";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: "#000000",
        height: "100vh",
        margin: "0px",
        overflowY: "scroll",
        overflowX: "hidden",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div
        style={{
          paddingLeft: "3rem",
        }}
      >
        <Navbar />
      </div>
      <div
        style={{
          paddingLeft: "3rem",
        }}
      >
        <HomePage />
        <Popup />
        <Homecontainer heading={"Meet Our Sponsors"} element={<Sponsors />} />
        <Homecontainer
          heading={"Testimonials"}
          element={<TestimonialCarousel />}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
