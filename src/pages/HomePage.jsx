import Banner from "../components/Banner";
import ProductDetailPage from "../components/ProductDetailPage";
import BestSellingProducts from "../components/sections/BestSellingProducts";
import Categories from "../components/sections/Categories";
import FlashSale from "../components/sections/FlashSale";


const HomePage = () => {
	return (
		<div>
			{/* <Banner />
			<FlashSale />
			<Categories />
			<BestSellingProducts /> */}

			<ProductDetailPage />
		
		</div>
	);
};

export default HomePage;
