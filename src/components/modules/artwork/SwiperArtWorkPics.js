"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import styles from './swiperArt.module.css';
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
>
  {/* Custom Navigation Buttons */}
  <div className={styles.swiperButtonNext} />
  <div className={styles.swiperButtonPrev} />

  {artwork.images.map((img, index) => (
    <SwiperSlide key={img}> {/* Use img as a key if it's unique */}
      <div style={{ height: '300px' }}>
        <Link href={img}>
        <Image width={700} height={700} src={img} alt="Slide" />
        
        </Link>
      </div>
    </SwiperSlide>
  ))}
</Swiper>



    </>
  );
}
