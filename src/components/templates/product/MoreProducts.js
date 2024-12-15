"use client";
import Product from "@/components/modules/product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MoreProducts = ({ relatedProducts }) => {
  return (
    <div data-aos="fade-right">
      <section>
        <h2>Related ArtWorks</h2>
        <div
          style={{
            height: "2px",
            width: "70px",
            background: "black",
            marginTop: "10px",
          }}
        ></div>
      </section>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        rewind={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          // When the screen width is >= 1200px
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          // When the screen width is >= 992px
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // When the screen width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // When the screen width is < 768px (mobile)
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        

        {relatedProducts.map((artwork) => (
          <SwiperSlide key={artwork._id}>
          <Product key={artwork._id} artwork={JSON.parse(JSON.stringify(artwork))} />
          </SwiperSlide>
        ))} 

      </Swiper>
    </div>
  );
};

export default MoreProducts;
