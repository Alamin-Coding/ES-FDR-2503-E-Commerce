import { Link } from "react-router";
import Button from "../components/Button";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import BestSellingProducts from "../components/sections/BestSellingProducts";
import WishlistProductCard from "../components/WishlistProductCard";

import { BestSellingProductsData, ExploreOurProductsData } from "../data";
import SecondaryButton from "../components/SecondaryButton";

const WishlistPage = () => {
	return (
		<Section className={"pt-20 pb-35 bg-white"}>
			<Container>
				<div className="grid gap-6">
					<div className="flex justify-between gap-4 items-center">
						<p>Wishlist (4)</p>
						<SecondaryButton>Move All To Bag</SecondaryButton>
					</div>

					<div className="grid grid-cols-4 gap-6">
						{ExploreOurProductsData.map((product) => (
							<div key={product.id}>
								<WishlistProductCard product={product} />
							</div>
						))}
					</div>

					<div className="space-y-6 pt-20">
						<div className="flex justify-between items-end gap-6">
							<p className="flex items-center gap-2">
								<span className="h-10 w-5 bg-secondary rounded-sm inline-block"></span>
								<span className="text-black font-semibold">Just For You</span>
							</p>
							<SecondaryButton TagName={Link} to="/shop">
								View All
							</SecondaryButton>
						</div>
						<div className="grid grid-cols-4 gap-6">
							{BestSellingProductsData.map((product) => (
								<div key={product.id}>
									<ProductCard product={product} />
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
};

export default WishlistPage;
