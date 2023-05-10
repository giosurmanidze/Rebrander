import React from "react";
import Banner from "../components/Banner";
import Statistics from "../components/Statistics";
import Services from "../components/Services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUsSection from "../components/AboutUsSection";
import Slider from "../components/Slider";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Banner />
      <AboutUsSection />
      <Slider />
      <Statistics />
      <Services />
    </div>
  );
};

export default Home;
