"use client";
import styles from "./articles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Article from "./Article";

const Articles = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Our Articles</p>
      <span className={styles.description}>Fascinating Insights into the World of Art</span>
      <main>
        <Swiper
          
  
          dir="rtl"
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper articles_slider"
          breakpoints={{
            // When screen width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            968: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // When screen width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // When screen width is < 768px
            576: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <Article />
          </SwiperSlide>
          <SwiperSlide>
            <Article />
          </SwiperSlide>
          <SwiperSlide>
            <Article />
          </SwiperSlide>
          <SwiperSlide>
            <Article />
          </SwiperSlide>
          <SwiperSlide>
            <Article />
          </SwiperSlide>
          <SwiperSlide>
            <Article />
          </SwiperSlide>
          <SwiperSlide>
            <Article />
          </SwiperSlide>
          <SwiperSlide>
            <Article />
          </SwiperSlide>
          <SwiperSlide>
            <Article />
          </SwiperSlide>
        </Swiper>
      </main>
    </div>
  );
};

export default Articles;
