


import React from "react";
import ProductCard from "../ProductCard";
import SectionHeader from "../SectionHeader";
import { ArrowLeft, ArrowRight } from "../icons";
import Section from "../Section";
import Container from "../Container";
import Arrows from "../Arrows";
import { ExploreOurProductsData } from "../../data";
import Button from "../Button";

const ExploreOurProducts = () => {
	return (
		<Section className={"pb-15 pt-18"}>
			<Container>
				<div className="mb-10 grid grid-cols-[auto_1fr_auto] items-end gap-[87px]">
					<SectionHeader title="Explore Our Products" subtitle="Our Products" />
					<div>
						
					</div>
					<Arrows />
				</div>
				<div className="grid grid-cols-4 gap-x-6 gap-y-15">
					{ExploreOurProductsData.map((product) => (
						<ProductCard key={product.id} product={product} price_with_rating={true} showPrice={false} />
					))}
				</div>
				<div className="pt-15 text-center">
					<Button TagName="a" href="/shop">View All Products</Button>
				</div>
			</Container>
		</Section>
	);
};

export default ExploreOurProducts;






