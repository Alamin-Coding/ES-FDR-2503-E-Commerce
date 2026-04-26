import React from "react";
import Section from "./Section";
import Container from "./Container";
import jbl from "../assets/jbl.png";
import UseCountDown from "../hooks/UseCountDown";
const Enhance = () => {
  const {formattedTimeLeft}= UseCountDown("2026-04-30T18:48:59") ;
const {days, hours, minutes, seconds} = formattedTimeLeft;
  const bgImage = {
    backgroundImage: `url(${jbl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Section className="pt-35">
      <Container>
        <div style={bgImage} className="">
          <div className="text-white flex flex-col items-start justify-start gap-8 max-w-[540px] py-17.25 pl-14">
            <p className="text-[16px] leading-[1.25] text-[#00FF66] font-semibold">
              Categories
            </p>
            <h3 className="text-[48px] leading-[1.2] font-semibold  tracking-[4%]">
              Enhance Your Music Experience
            </h3>
            <div className="flex items-center justify-start gap-6 ">
              <div className="flex flex-col items-center justify-center gap-1 rounded-full text-[#000000] bg-white w-15.5 h-15.5 p-4">
                <span className="text-base font-semibold">{hours}</span>
                <span className="text-[11px] leading-[1.65] font-normal">
                  Hours
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 rounded-full text-[#000000] bg-white w-15.5 h-15.5 p-4">
                <span className="text-base font-semibold">{days}</span>
                <span className="text-[11px] leading-[1.65] font-normal">
                  Days
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 rounded-full text-[#000000] bg-white w-15.5 h-15.5 p-4">
                <span className="text-base font-semibold">{minutes}</span>
                <span className="text-[11px] leading-[1.65] font-normal">
                  Minutes
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 rounded-full text-[#000000] bg-white w-15.5 h-15.5 p-4">
                <span className="text-base font-semibold">{seconds}</span>
                <span className="text-[11px] leading-[1.65] font-normal">
                  Seconds
                </span>
              </div>
            </div>
            <button className="text-white text-base font-semibold bg-[#00FF66] rounded py-4 px-12 pt-2">
              Buy Now!
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Enhance;
