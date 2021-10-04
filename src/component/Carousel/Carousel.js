import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";
import "swiper/swiper-bundle.css";

import pic1 from "../Images/img/1.jpg";
import pic2 from "../Images/img/2.jpg";
import pic3 from "../Images/img/3.jpg";
import pic4 from "../Images/img/4.jpg";
import pic5 from "../Images/img/5.jpg";
import pic6 from "../Images/img/6.jpg";
import pic7 from "../Images/img/7.jpg";
import pic8 from "../Images/img/8.jpg";

import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

SwiperCore.use([Pagination, Navigation, Autoplay]);
export default function Carousel() {
  return (
    <Swiper
      navigation={{ clickable: true }}
      Pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className="mySwiper swiper-img"
    >
      <SwiperSlide>
        <img src={pic1}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={pic2}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={pic3}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={pic4}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={pic5}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={pic6}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={pic7}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={pic8}></img>
      </SwiperSlide>
    </Swiper>
  );
}
