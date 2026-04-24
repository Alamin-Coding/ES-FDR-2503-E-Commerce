import Container from "../components/Container";
import Section from "../components/Section";
import ProductCard from "../components/ProductCard";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router";
import { ExploreOurProductsData } from "../data";
import { useEffect, useState } from "react";
import ProductCardItem from "../components/ProductCard";

import axios from "axios";

// const menus = [
// 	{
// 		id: uuidv4(),
// 		title: "Woman’s Fashion",
// 		link: "/",
// 		submenu: [
// 			{
// 				id: 1,
// 				title: "Dresses",
// 				link: "/",
// 			},
// 			{
// 				id: 2,
// 				title: "Tops",
// 				link: "/",
// 			},
// 			{
// 				id: 3,
// 				title: "Sweaters",
// 				link: "/",
// 			},
// 			{
// 				id: 4,
// 				title: "Jeans",
// 				link: "/",
// 			},
// 			{
// 				id: 5,
// 				title: "Shoes",
// 				link: "/",
// 			},
// 		],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "Men’s Fashion",
// 		link: "/",
// 		submenu: [
// 			{
// 				id: uuidv4(),
// 				title: "Shirts",
// 				link: "/",
// 			},
// 			{
// 				id: uuidv4(),
// 				title: "Jeans",
// 				link: "/",
// 			},
// 			{
// 				id: uuidv4(),
// 				title: "Shoes",
// 				link: "/",
// 			},
// 		],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "Electronics",
// 		link: "/",
// 		submenu: [],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "Home & Lifestyle",
// 		link: "/",
// 		submenu: [],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "Medicine",
// 		link: "/",
// 		submenu: [],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "Sports & Outdoor",
// 		link: "/",
// 		submenu: [],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "Baby’s & Toys",
// 		link: "/",
// 		submenu: [],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "Groceries &",
// 		link: "/",
// 		submenu: [],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "Health & Beauty",
// 		link: "/",
// 		submenu: [],
// 	},
// ];

const ProductPage = () => {
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
		setUrl(category);
	};

	console.log(products);

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
							<ul className="space-y-4">
								{menus?.map((menu) => (
									<li
										key={menu.id}
										className="text-black flex justify-between gap-2 items-center cursor-pointer hover:text-my_secondary"
										onClick={() => handleFilter(menu.url)}
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
