import React from "react";
import AVTR1 from "../assets/avatar1.jpg";
import AVTR2 from "../assets/avatar2.jpg";
import AVTR3 from "../assets/avatar3.jpg";
import AVTR4 from "../assets/avatar4.jpg";
import AVTR5 from "../assets/avatar5.jpg";

// import Swiper core and required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Arthur Morgan",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    avatar: AVTR2,
    name: "Gunther Biscuits",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    avatar: AVTR3,
    name: "Biggus Chingus",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    avatar: AVTR4,
    name: "LT. Smash",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    avatar: AVTR5,
    name: "Carmine Vasquez",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Reviews = () => {
  return (
    <>
      <div name="reviews">
        <h5 className="text-4xl text-center pb-5">Reviews From Clients</h5>
        <Swiper
          className=""
          spaceBetween={35}
          centeredSlides={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="p-24 w-[50%] bg-green-700">
                <div className="">
                  <img
                    src={avatar}
                    alt="avatar image"
                    style={{
                      width: "4rem",
                      aspectRatio: 1 / 1,
                      overflow: "hidden",
                      borderRadius: "50%",
                      margin: "0 auto 1rem",
                      border: "0.4rem solid",
                      color: "#D5D8B5",
                    }}
                  />
                </div>
                <h5 className="w-[80%] block m-3 font-bold text-white">
                  {name}
                </h5>
                <small className="w-[80%] block m-3 font-bold text-xl text-white">
                  {review}
                </small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Reviews;
