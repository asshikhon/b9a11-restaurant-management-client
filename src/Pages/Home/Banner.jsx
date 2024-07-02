/* eslint-disable react/no-unescaped-entities */
import banner1 from "../../../src/assets/images/banner1.jpg";
import banner2 from "../../../src/assets/images/banner2.jpg";
import banner3 from "../../../src/assets/images/banner3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero h-[400px] w-auto md:h-[550px] lg:h-[800px]"
            style={{
              backgroundImage: `url(${banner1})`,
              backgroundSize: "cover",
              width: "full",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
              <div>
                <h1 className="mb-5 text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">
                  Master Restaurant Management with RestaurantRealm's Expert
                  Solutions.
                </h1>
                <p className="mb-5 md:px-12 font-medium ">
                  Empower your restaurant's success with RestaurantRealm's
                  expert tools and solutions for seamless management.
                </p>
                <Link
                  to="/foods"
                  className="btn bg-orange-500 px-7 border-0 btn-primary text-white font-bold text-lg"
                >
                  All Foods
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[400px] w-auto md:h-[550px] lg:h-[800px]"
            style={{
              backgroundImage: `url(${banner2})`,
              backgroundSize: "cover",
              width: "full",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
              <div>
                <h1 className="mb-5 text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">
                  Transform Your Restaurant with RestaurantRealm's Management
                  Expertise.
                </h1>
                <p className="mb-5 md:px-12 font-medium ">
                  Elevate operations and maximize success with RestaurantRealm's
                  expert management solutions.
                </p>
                <Link
                  to="/foods"
                  className="btn bg-orange-500 px-7 border-0 btn-primary text-white font-bold text-lg"
                >
                  All Foods
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[400px] w-auto md:h-[550px] lg:h-[800px]"
            style={{
              backgroundImage: `url(${banner3})`,
              backgroundSize: "cover",
              width: "full",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
              <div>
                <h1 className="mb-5 text-3xl md:text-4xl lg:text-6xl font-bold md:leading-[40px]  lg:leading-[76px]">
                  Trust RestaurantRealm for Your Restaurant Management Needs.
                </h1>
                <p className="mb-5 md:px-12 font-medium ">
                  Streamline your operations and excel with RestaurantRealm's
                  trusted management solutions.
                </p>
                <Link
                  to="/foods"
                  className="btn bg-orange-500 px-7 border-0 btn-primary text-white font-bold text-lg"
                >
                  All Foods
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
