import React from "react";
import ProductCard from "../ProductCard";
import SectionHeader from "../SectionHeader";
import { ArrowLeft, ArrowRight } from "../icons";
import Section from "../Section";
import Container from "../Container";
import Arrows from "../Arrows";
import { FlashSellingProductsData } from "../../data";

const FlashSale = () => {
	return (
		<Section className={"pb-15"}>
			<Container>
				<div className="mb-10 grid grid-cols-[auto_1fr_auto] items-end gap-[87px]">
					<SectionHeader title="Flash Sales" subtitle="Today’s" />
					<div>
						<div className="flex items-center gap-3">
							<div className="flex flex-col space-y-1">
								<span>Day's</span>
								<strong className="text-[32px]">03</strong>
							</div>
							<span className="text-[30px] text-secondary">:</span>
							<div className="flex flex-col space-y-1">
								<span>Hours</span>
								<strong className="text-[32px]">03</strong>
							</div>
							<span className="text-[30px] text-secondary">:</span>
							<div className="flex flex-col space-y-1">
								<span>Minutes</span>
								<strong className="text-[32px]">03</strong>
							</div>
							<span className="text-[30px] text-secondary">:</span>
							<div className="flex flex-col space-y-1">
								<span>Seconds</span>
								<strong className="text-[32px]">03</strong>
							</div>
						</div>
					</div>
					<Arrows />
				</div>
				<div className="grid grid-cols-4 gap-6">
					{FlashSellingProductsData.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</Container>
		</Section>
	);
};

export default FlashSale;
