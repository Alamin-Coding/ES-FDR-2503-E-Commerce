// reuseable component declear
import Section from "../Section";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import Arrows from "../Arrows";
import CetagoriesCard from "../CetagoriesCard";
import { useRef } from "react";


const Cetagories = () => {
  const swiperRef = useRef();
  return (
    <Section className="">
      <Container className="pt-20 pb-17.5 border-b border-border">
        <div>
          <div className="flex items-center justify-between mb-15">
            <SectionHeader title="Browse By Category" subtitle="Categories" />
            <Arrows  swiperRef={swiperRef}/>
          </div>
          <div>
            <CetagoriesCard swiperRef={swiperRef} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Cetagories;
