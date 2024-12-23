"use client";
import Artwork from "@/components/modules/artwork/Artwork";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MoreArtWorks = ({ relatedArtWorks }) => {
  return (
    <div data-aos="fade-right" className="more-artworks-container">
      <section className="section-header">
        <h2>Related ArtWorks</h2>
        <div className="divider"></div>
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
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
     
       {relatedArtWorks.map((artwork) => (
          <SwiperSlide key={artwork._id}>
            <Artwork artwork={artwork}  />
          </SwiperSlide>
        ))} 
      </Swiper>
    </div>
  );
};

export default MoreArtWorks;
