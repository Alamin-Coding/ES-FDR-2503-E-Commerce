import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../ProductCard";
import SectionHeader from "../SectionHeader";
import { ArrowLeft, ArrowRight } from "../icons";
import Section from "../Section";
import Container from "../Container";
import Arrows from "../Arrows";
import { FlashSellingProductsData } from "../../data";
import Button from "../Button";
import useCountdown from "../../hooks/useCountdown";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import axios from "axios";

// import 'swiper/css/navigation';
const FlashSale = () => {
	const [flashSaleData, setFlashSaleData] = useState([]);
	const { formattedTimeLeft } = useCountdown("2026-04-30T11:59:59");
	const { days, hours, minutes, seconds } = formattedTimeLeft;

	const swiperRef = useRef(null);

	useEffect(() => {
		axios
			.get("http://localhost:3000/flash-sales")
			.then((data) => setFlashSaleData(data.data));
	}, []);
	return (
		<Section className={"pb-15"}>
			<Container className={"overflow-hidden"}>
				<div className="mb-10 grid grid-cols-[auto_1fr_auto] items-end gap-[87px]">
					<SectionHeader title="Flash Sales" subtitle="Today’s" />
					<div>
						<div className="flex items-center gap-3">
							<div className="flex flex-col space-y-1">
								<span>Day's</span>
								<strong className="text-[32px]">{days}</strong>
							</div>
							<span className="text-[30px] text-my_secondary">:</span>
							<div className="flex flex-col space-y-1">
								<span>Hours</span>
								<strong className="text-[32px]">{hours}</strong>
							</div>
							<span className="text-[30px] text-my_secondary">:</span>
							<div className="flex flex-col space-y-1">
								<span>Minutes</span>
								<strong className="text-[32px]">{minutes}</strong>
							</div>
							<span className="text-[30px] text-my_secondary">:</span>
							<div className="flex flex-col space-y-1">
								<span>Seconds</span>
								<strong className="text-[32px]">{seconds}</strong>
							</div>
						</div>
					</div>

					<div className="flex items-center justify-end gap-4">
						<button
							onClick={() => swiperRef.current.slideNext()}
							className="size-[36px] rounded-full bg-slate-50 flex items-center justify-center cursor-pointer"
						>
							<ArrowLeft />
						</button>
						<button
							onClick={() => swiperRef.current.slidePrev()}
							className="size-[36px] rounded-full bg-slate-50 flex items-center justify-center cursor-pointer"
						>
							<ArrowRight />
						</button>
					</div>
				</div>

				<div className="w-full relative ">
					<Swiper
						slidesPerView={4}
						spaceBetween={24}
						loop={true}
						autoplay={{
							delay: 1500,
						}}
						modules={[Autoplay]}
						onSwiper={(swiper) => (swiperRef.current = swiper)}
					>
						{flashSaleData?.map((product) => (
							<SwiperSlide key={product.id}>
								<ProductCard product={product} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className="pt-10 text-center">
					<Button TagName="a" href="/shop">
						View All Products
					</Button>
				</div>
			</Container>
		</Section>
	);
};

export default FlashSale;
