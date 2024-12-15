



"use client";
import React from "react";
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


            width={500} height={500}
            src="https://cdn.kreezalid.com/kreezalid/556408/catalog/8096/99/1000x1000_1_spsmq_1279148334.jpg" alt="Slide"
          />

          </div>


        </SwiperSlide>

        <SwiperSlide>
          <Image

            style={{ height: '650px' }}
            width={500} height={500}
            src="https://cdn.kreezalid.com/kreezalid/556408/catalog/8096/108/fiordland1r_58ezz_793177359.jpg"
            alt="Slide"
          />
        </SwiperSlide>


        <SwiperSlide>
          <Image


            style={{ height: '650px' }}

            width={500} height={500}
            src="https://cdn.kreezalid.com/kreezalid/556408/catalog/8096/108/1_2tqa6_816048024.jpg"
            alt="Slide"
          />

        </SwiperSlide>





      </Swiper>



    </>
  );
}
