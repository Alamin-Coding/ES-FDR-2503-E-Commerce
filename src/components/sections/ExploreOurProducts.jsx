


import React from "react";
import ProductCard from "../ProductCard";
import SectionHeader from "../SectionHeader";
import { ArrowLeft, ArrowRight } from "../icons";
import Section from "../Section";
import Container from "../Container";
import Arrows from "../Arrows";
import { ExploreOurProductsData } from "../../data";
import Button from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/grid';
// import {Grid} from "swiper/react/modules"
import { useRef } from "react";
import { Grid } from "swiper/modules";

const ExploreOurProducts = () => {
	  const swiperRef = useRef(null);
	

	return (
		<Section className={"pb-42 pt-18"}>
			<Container>
				<div className="mb-10 grid grid-cols-[auto_1fr_auto] items-end gap-[87px]">
					<SectionHeader title="Explore Our Products" subtitle="Our Products" />
					<div>
						
					</div>
					<Arrows swiperRef={swiperRef} />
				</div>
				{/* <div className="grid grid-cols-4 gap-x-6 gap-y-15">
					{ExploreOurProductsData.map((product) => (
						<ProductCard key={product.id} product={product} price_with_rating={true} showPrice={false} />
					))}
				</div> */}

     <>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
			modules={[Grid]}
            grid={{
				rows:2,
				fill:"row"
			}}
			loop={true}
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              dynamicBullets: true,
            }}
            className="mySwiper"
          >
            {ExploreOurProductsData.map((product) => (
              <SwiperSlide key={product.id}>
           						<ProductCard  product={product} price_with_rating={true} showPrice={false} />

              </SwiperSlide>
            ))}
          </Swiper>
        </>


				<div className="flex items-center justify-center pt-15 text-center">
					<Button TagName="a" href="/shop">
						View All Products
					</Button>
				</div>
			</Container>
		</Section>
	);
};

export default ExploreOurProducts;






