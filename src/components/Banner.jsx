import React, { useContext, useEffect, useState } from "react";
import banner_1 from "../assets/hero-1.jpg";
import { Link, useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import axios from "axios";
import { activeCategory } from "../features/shop/shopSlice";
import { useDispatch } from "react-redux";
import { ThemeContext } from "../context/ThemeContext";

const Banner = () => {
	const [menus, setMenus] = useState([]);
	const dispatch = useDispatch();
	const { url, setUrl } = useContext(ThemeContext);
	useEffect(() => {
		axios.get("https://dummyjson.com/products/categories").then((data) => {
			setMenus(data.data);
		});
	}, []);
	const navigate = useNavigate();

	const handleFilter = (category) => {
		setUrl(category.url);
		dispatch(activeCategory(category.name));
		navigate("/shop");
	};
	console.log(url);
	return (
		<section className="pb-41.25">
			<div className="container">
				<div className="grid grid-cols-[233px_1fr]">
					<div className="pr-4 pt-10 max-h-100 overflow-y-scroll">
						<ul className="space-y-4">
							{menus.map((menu) => (
								<li
									key={menu.id}
									title={menu.id}
									className="text-black flex justify-between gap-2 items-center cursor-pointer"
									onClick={() => handleFilter(menu)}
								>
									{menu.name}
									{menus.submenu?.length > 0 && (
										<span>
											<ChevronRight />
										</span>
									)}
								</li>
							))}
						</ul>
					</div>
					{/* Image Slider */}
					<div className="pl-11.25 pt-10 border-l border-l-border">
						{/* <div>
							<img className="w-full" src={banner_1} alt="image" />
						</div> */}
						<div className="w-[892px]">
							<Swiper
								pagination={false}
								modules={[Pagination]}
								className="mySwiper"
							>
								<SwiperSlide>
									<Link to="/shop">
										<img className="w-full" src={banner_1} alt="image" />
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link to="/shop">
										<img className="w-full" src={banner_1} alt="image" />
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link to="/shop">
										<img className="w-full" src={banner_1} alt="image" />
									</Link>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
