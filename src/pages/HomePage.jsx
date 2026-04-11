import Banner from "../components/Banner";
import Enhance from "../components/Enhance";
import BestSellingProducts from "../components/sections/BestSellingProducts";
import Categories from "../components/sections/Categories";
import ExploreOurProducts from "../components/sections/ExploreOurProducts";
import FlashSale from "../components/sections/FlashSale";
import Service from "../components/sections/Service";

const HomePage = () => {
	// const pad = "2".padStart(3, "0"); //112

	// console.log(pad)
	return (
		<div>
			<Banner />
			<FlashSale />
			<Categories />
			<BestSellingProducts />
			<Enhance />
			<ExploreOurProducts />
			<Service />
		</div>
	);
};

export default HomePage;
