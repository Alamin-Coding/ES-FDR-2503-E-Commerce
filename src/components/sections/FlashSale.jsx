import React, { useRef } from "react";
import ProductCard from "../ProductCard";
import SectionHeader from "../SectionHeader";
import { ArrowLeft, ArrowRight } from "../icons";
import Section from "../Section";
import Container from "../Container";
import Arrows from "../Arrows";
import { FlashSellingProductsData } from "../../data";
import Button from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";
import UseCountDown from "../../hooks/UseCountDown";
const FlashSale = () => {
const {formattedTimeLeft}= UseCountDown("2026-04-26T18:48:59") ;
const {days, hours, minutes, seconds} = formattedTimeLeft;
  const swiperRef = useRef(null);
  return (
    <Section className={"pb-15"}>
      <Container>
        <div className="mb-10 grid grid-cols-[auto_1fr_auto] items-end gap-[87px]">
          <SectionHeader title="Flash Sales" subtitle="Today’s" />
          <div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col space-y-1">
                <span>Day's</span>
                <strong className="text-[32px]">{days}</strong>
              </div>
              <span className="text-[30px] text-secondary">:</span>
              <div className="flex flex-col space-y-1">
                <span>Hours</span>
                <strong className="text-[32px]">{hours}</strong>
              </div>
              <span className="text-[30px] text-secondary">:</span>
              <div className="flex flex-col space-y-1">
                <span>Minutes</span>
                <strong className="text-[32px]">{ minutes}</strong>
              </div>
              <span className="text-[30px] text-secondary">:</span>
              <div className="flex flex-col space-y-1">
                <span>Seconds</span>
                <strong className="text-[32px]">{seconds}</strong>
              </div>
            </div>
          </div>
          <Arrows swiperRef={swiperRef} />
        </div>
        {/* <div className="grid grid-cols-4 gap-6">
					{FlashSellingProductsData.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div> */}
        <>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
			loop={true}
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              dynamicBullets: true,
            }}
            className="mySwiper"
          >
            {FlashSellingProductsData.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>

        <div className="flex items-center justify-center pt-10 text-center">
          <Button TagName="a" href="/shop">
            View All Products
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default FlashSale;
