import Banner from "../components/Banner";
import Enhance from "../components/Enhance";
import BestSellingProducts from "../components/sections/BestSellingProducts";
import Categories from "../components/sections/Categories";
import ExploreOurProducts from "../components/sections/ExploreOurProducts";
import FlashSale from "../components/sections/FlashSale";

const HomePage = () => {
	return (
		<div>
			<Banner />
			<FlashSale />
			<Categories />
			<BestSellingProducts />
			<Enhance />
			<ExploreOurProducts />
			{/* <ContactCard /> */}
		</div>
	);
};

export default HomePage;
