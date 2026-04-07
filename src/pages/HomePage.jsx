import Banner from "../components/Banner";
<<<<<<< HEAD
import ProductDetailPage from "./ProductDetailPage";
=======
import Enhance from "../components/Enhance";
>>>>>>> main
import BestSellingProducts from "../components/sections/BestSellingProducts";
import Categories from "../components/sections/Categories";
import ExploreOurProducts from "../components/sections/ExploreOurProducts";
import FlashSale from "../components/sections/FlashSale";
import Enhance from "../components/Enhance";

const HomePage = () => {
	return (
		<div>
			<Banner />
			<FlashSale />
			<Categories />
			<BestSellingProducts />
<<<<<<< HEAD
            <Enhance />
			{/* <ProductDetailPage /> */}
		
=======
			<Enhance />
			<ExploreOurProducts />
			{/* <ContactCard /> */}
>>>>>>> main
		</div>
	);
};

export default HomePage;
