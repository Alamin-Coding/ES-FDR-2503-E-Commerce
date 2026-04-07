import Banner from "../components/Banner";
import BestSellingProducts from "../components/sections/BestSellingProducts";
import Categories from "../components/sections/Categories";
import ExploreOurProducts from "../components/sections/ExploreOurProducts";
import FlashSale from "../components/sections/FlashSale";
import Enhance from "../components/Enhance";
import Arrival from "../components/Arrival"

const HomePage = () => {
	return (
		<div>
			<Banner />
			<FlashSale />
			<Categories />
			<BestSellingProducts />
			<Enhance />
			<ExploreOurProducts />
			<Arrival />
			{/* <ContactCard /> */}
		</div>
	);
};

export default HomePage;
