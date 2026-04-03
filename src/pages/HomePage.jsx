import Banner from "../components/Banner";
import BestSellingProducts from "../components/sections/BestSellingProducts";
import Categories from "../components/sections/Categories";
import FlashSale from "../components/sections/FlashSale";

const HomePage = () => {
	return (
		<div>
			<Banner />
			<FlashSale />
			<Categories />
			<BestSellingProducts />
		</div>
	);
};

export default HomePage;
