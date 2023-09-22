import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import DND from "../../img/DND.png";
import Weather from "../../img/Weather.png";
import Invasion from "../../img/Invasion.png";
import Portfolo from "../../img/Portfolo.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Invasion} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Weather} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DND} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfolo} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
