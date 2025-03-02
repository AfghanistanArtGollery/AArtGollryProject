"use client"; 
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import styles from './bunner.module.css';
import Image from "next/image";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function SwiperArtWorkPics({ artwork }) {
  // We use state to track if we are on the client side
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set to true once we are on the client side
    setIsClient(true);
  }, []);

  // If not on the client side yet, return null to avoid rendering during SSR
  if (!isClient) return null;

  return (
    <>
      <Swiper
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`
        }}
        rewind={true}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Autoplay]}
        className={styles.swiper_mobile_img}
      >
        {/* Custom Navigation Buttons */}
        <div className={styles.swiperButtonNext} />
        <div className={styles.swiperButtonPrev} />

        <SwiperSlide>
          <div className={styles.swiper_mobile_img}>
            <Image
              objectFit="cover"
              style={{ height: '650px' }}
              width={500}
              height={500}
              src='/images/bunner.jpg'
              alt="Slide"
            />
          </div>
        </SwiperSlide>

        {/* Uncomment more slides as needed */}
        {/* <SwiperSlide>
          <Image
            style={{ height: '650px' }}
            width={500}
            height={500}
            src="https://cdn.kreezalid.com/kreezalid/556408/catalog/8096/108/fiordland1r_58ezz_793177359.jpg"
            alt="Slide"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            style={{ height: '650px' }}
            width={500}
            height={500}
            src="https://cdn.kreezalid.com/kreezalid/556408/catalog/8096/108/1_2tqa6_816048024.jpg"
            alt="Slide"
          />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
