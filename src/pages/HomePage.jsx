import Banner from "../components/Banner";
import ProductDetailPage from "./ProductDetailPage";
import BestSellingProducts from "../components/sections/BestSellingProducts";
import Categories from "../components/sections/Categories";
import FlashSale from "../components/sections/FlashSale";
import Enhance from "../components/Enhance";

const HomePage = () => {
	return (
		<div>
			<Banner />
			<FlashSale />
			<Categories />
			<BestSellingProducts />
            <Enhance />
			{/* <ProductDetailPage /> */}
		
		</div>
	);
};

export default HomePage;
