import React from "react";
import Section from "./Section";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import ArrivalCard from "../components/ArrivalCard";
import Arrive_1 from "../assets/arive-1.png";
import Arrive_2 from "../assets/arive-2.png";
import Arrive_3 from "../assets/arive-3.png";
import Arrive_4 from "../assets/arive-4.png";
const Arrival = () => {
  return (
    <Section className="pb-35">
      <Container>
        <div>
          <div className="flex items-center justify-center pb-15">
            <SectionHeader title="New Arrival" subtitle="Featured" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            {/* left side */}
            <ArrivalCard bgImage={Arrive_1} />

            {/* right side */}
            <div className="grid grid-rows-2 gap-6">
              <ArrivalCard
                bgImage={Arrive_2}
                heading="heading"
                description="Featured woman collections that give you another vibe."
              />

              {/* Bottom 2 cards */}
              <div className="grid grid-cols-2 gap-6">
                <ArrivalCard
                  bgImage={Arrive_3}
                  heading="Speakers"
                  description="Amazon wireless speakers"
                />
                <ArrivalCard
                  bgImage={Arrive_4}
                  heading="Perfume"
                  description="GUCCI INTENSE OUD EDP"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Arrival;
