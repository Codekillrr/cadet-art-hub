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
  const slides = [
    {
      id: 1,
      image: "/slides/slide.jpeg",
      alt: "imgslide",
    },
    {
      id: 2,
      image: "/slides/slide2.jpeg",
      alt: "imgslide",
    },
    {
      id: 3,
      image: "/slides/slide3.jpeg",
      alt: "imgslide",
    },
    {
      id: 4,
      image: "/slides/slide4.jpeg",
      alt: "imgslide",
    },
    {
      id: 5,
      image: "/slides/slide5.jpeg",
      alt: "imgslide",
    },
    {
      id: 6,
      image: "/slides/slide6.jpeg",
      alt: "imgslide",
    },
  ];

  return (
    // <div className=" border-2 mx-auto border-black max-w-[1070px] bg-neutral-800 rounded-[32px] mt-15 relative p-4">
    // <div className="rounded-2xl mx-auto max-w-[1000px] h-full">
    <Swiper
      effect={"coverflow"}
      loop={true}
      autoplay={{
        delay: 3500,
      }}
      // direction={"vertical"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"1.5"}
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 360,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper rounded-2xl h-[200px] relative z-15"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img className="rounded-xl " src={slide.image} />
        </SwiperSlide>
      ))}

      <div className="absolute blur flex items-end z-10 w-full inset-x-0 -bottom-5 h-10 bg-gradient-to-b from-transparent via-black/80 to-black scale-[1.1] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_top_left,rgba(0,0,0,0.8),transparent)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_top_right,rgba(0,0,0,0.8),transparent)]"></div>
    </Swiper>
    // </div>
    // </div>
  );
};

export default SlideShow;
