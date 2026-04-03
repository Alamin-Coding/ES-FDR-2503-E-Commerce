import React from "react";
import Section from "../Section";
import Container from "../Container";
import TeamCard from "./TeamCard";
import team1 from "../../assets/team-1.png";
import team2 from "../../assets/team-2.png";
import team3 from "../../assets/team-3.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Team = () => {
  return (
    <Section>
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <TeamCard
              img={team1}
              name="John Doe"
              role="CEO"
              twitter="https://twitter.com/johndoe"
              instagram="https://instagram.com/johndoe"
              linkedin="https://linkedin.com/in/johndoe"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              img={team2}
              name="Jane Smith"
              role="Designer"
              twitter="https://twitter.com/janesmith"
              instagram="https://instagram.com/janesmith"
              linkedin="https://linkedin.com/in/janesmith"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              img={team3}
              name="Mike Johnson"
              role="Developer"
              twitter="https://twitter.com/mikejohnson"
              instagram="https://instagram.com/mikejohnson"
              linkedin="https://linkedin.com/in/mikejohnson"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              img={team1}
              name="John Doe"
              role="CEO"
              twitter="https://twitter.com/johndoe"
              instagram="https://instagram.com/johndoe"
              linkedin="https://linkedin.com/in/johndoe"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              img={team2}
              name="Jane Smith"
              role="Designer"
              twitter="https://twitter.com/janesmith"
              instagram="https://instagram.com/janesmith"
              linkedin="https://linkedin.com/in/janesmith"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              img={team3}
              name="Mike Johnson"
              role="Developer"
              twitter="https://twitter.com/mikejohnson"
              instagram="https://instagram.com/mikejohnson"
              linkedin="https://linkedin.com/in/mikejohnson"
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Section>
  );
};

export default Team;
