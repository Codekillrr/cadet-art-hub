"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const SlideShow = () => {
  return (
    <div className="rounded-2xl">
      <Swiper
        effect={"coverflow"}
        loop={true}
        autoplay={{
          delay: 3500,
        }}
        direction={"vertical"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"1"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper rounded-2xl h-[350px]"
      >
        <SwiperSlide>
          <img
            className="rounded-2xl "
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-2xl "
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-2xl"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-2xl "
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideShow;
