import React from "react";
import ProductCard from "../ProductCard";
import SectionHeader from "../SectionHeader";

const FlashSale = () => {
	return (
		<section>
			<div className="container">
				<div className="mb-10">
					<SectionHeader title="Flash Sale" subtitle="Today's" />
				</div>
				<div className="grid grid-cols-4 gap-6">
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
		</section>
	);
};

export default FlashSale;
