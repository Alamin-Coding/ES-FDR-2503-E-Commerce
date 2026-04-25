import Container from "../components/Container";
import Section from "../components/Section";
import ProductCard from "../components/ProductCard";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router";
import { ExploreOurProductsData } from "../data";
import { useEffect, useState } from "react";
import ProductCardItem from "../components/ProductCard";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { activeCategory } from "../features/shop/shopSlice";


const ProductPage = () => {
	const { activeMenu } = useSelector((state) => state.shop);
	const dispatch = useDispatch();
	console.log(activeMenu);
	const [endCount, setEndCount] = useState(6);
	const [startCount, setStartCount] = useState(0);
	const [menus, setMenus] = useState([]);

	const [url, setUrl] = useState("https://dummyjson.com/products");

	const [products, setProducts] = useState([]);
	const [showCount, setShowCount] = useState(6);
	const handleShowMore = (value) => {
		setShowCount(value);
	};

	useEffect(() => {
		axios
			.get("https://dummyjson.com/products/categories")
			.then((data) => setMenus(data.data));
	}, []);

	useEffect(() => {
		axios.get(url).then((data) => setProducts(data.data.products));
	}, [url]);

	const handleCount = (value) => {
		setEndCount(value);
	};
	const handleFilter = (category) => {
		setUrl(category.url);
		dispatch(activeCategory(category.name));
	};



	console.log(activeMenu)

	return (
		<Section className={"pb-40"}>
			<Container>
				<div className="flex items-center gap-3 pt-20 pb-12.5 text-black/50">
					<Link to="/">Home</Link>
					<span>/</span>
					<span>Shop</span>
				</div>
				<div className="grid grid-cols-[280px_1fr]">
					<div>
						<div className="pr-4 pt-10">
							<p className="text-xl pb-4">Shop by Category</p>
							<li
								className={`text-black flex justify-between gap-2 items-center cursor-pointer hover:text-my_secondary mb-4 ${activeMenu === "All" && "text-my_secondary"}`}
								onClick={() => {
									setUrl("https://dummyjson.com/products");
									dispatch(activeCategory("All"));
								}}
							>
								<span>All</span>
							</li>
							<ul className="space-y-4">
								{menus?.map((menu) => (
									<li
										key={menu.id}
										className={`text-black flex justify-between gap-2 items-center cursor-pointer hover:text-my_secondary ${activeMenu === menu.name && "text-my_secondary"}`}
										onClick={() => handleFilter(menu)}
									>
										<span>{menu.name}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="pr-4 pt-10">
							<p className="text-xl pb-4">Shop by Color</p>
							<ul className="grid grid-cols-1 gap-3">
								<li className="flex items-center gap-3">
									<div className="size-3 rounded-full bg-black"></div>
									<p className="leading-[30px] text-[#767676]">Color 1</p>
								</li>
								<li className="flex items-center gap-3">
									<div className="size-3 rounded-full bg-[#FF0000]"></div>
									<p className="leading-[30px] text-[#767676]">Color 2</p>
								</li>
								<li className="flex items-center gap-3">
									<div className="size-3 rounded-full bg-[#00FF38]"></div>
									<p className="leading-[30px] text-[#767676]">Color 3</p>
								</li>
							</ul>
						</div>
					</div>
					<div className="space-y-7.5">
						<div className="flex justify-end">
							<p>
								<span>Show :</span>{" "}
								<input
									className="w-[97px] border border-border text-center"
									type="text"
									onChange={(e) => handleCount(e.target.value)}
									value={endCount}
								/>
								{/* <select name="" id="" onChange={(e) => handleCount(e.target.value)} defaultValue={6}>
									<option value="6">6</option>
									<option value="9">9</option>
									<option value="12">12</option>
								</select> */}
							</p>
						</div>
						<div className="grid grid-cols-3 gap-x-6 gap-y-10">
							{products?.slice(startCount, endCount)?.map((item) => (
								<ProductCardItem key={item.id} product={item} />
								// <p>{item.title}</p>
							))}
						</div>
						{/* Pagination */}
						<div className="flex pt-10 gap-2">
							<div className="w-[57px] h-[27px] bg-black text-white flex items-center justify-center cursor-pointer">
								1
							</div>
							<div className="w-[57px] h-[27px] bg-black text-white flex items-center justify-center cursor-pointer">
								2
							</div>
							<div className="w-[57px] h-[27px] bg-black text-white flex items-center justify-center cursor-pointer">
								3
							</div>
							<div className="w-[57px] h-[27px] bg-black text-white flex items-center justify-center cursor-pointer">
								4
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
};

export default ProductPage;
