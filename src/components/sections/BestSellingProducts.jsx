import React from "react";
import ProductCard from "../ProductCard";
import SectionHeader from "../SectionHeader";
import { ArrowLeft, ArrowRight } from "../icons";
import Section from "../Section";
import Container from "../Container";
import Arrows from "../Arrows";
import { BestSellingProductsData } from "../../data";
import Button from "../Button";

const BestSellingProducts = () => {
	return (
		<Section>
			<Container className="pt-17.5">
				<div className="mb-10 grid grid-cols-[auto_1fr_auto] items-end gap-[87px]">
					<SectionHeader title="Best Selling Products" subtitle="This Month" />
					<div></div>
					<Button>View All</Button>
				</div>
				<div className="grid grid-cols-4 gap-6">
					{BestSellingProductsData.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</Container>
		</Section>
	);
};

export default BestSellingProducts;
