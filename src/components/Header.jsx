import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";

import searchIcon from "../assets/icons/search.png";
import cartIcon from "../assets/icons/cart.png";
import wishListIcon from "../assets/icons/Wishlist.png";
import { ListFilter, Menu, User, X } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";
import { AuthContext } from "../context/authContext";
import { useSelector } from "react-redux";
import ProductSearchDropdown from "./ProductSearchDropdown";
import axios from "axios";

const Header = () => {
	// const user = null; // Replace with actual user data or authentication logic
	const { user } = useContext(AuthContext);
	const { cartList } = useSelector((state) => state.cart);
	const { wishList } = useSelector((state) => state.wishlist);
	const [showMenu, setShowMenu] = useState(false);
	const [products, setProducts] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [showSearchBox, setShowSearchBox] = useState(false);

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};

	useEffect(() => {
		axios.get("https://dummyjson.com/products").then((data) => {
			setProducts(data.data.products);
		});
	}, []);

	const handleSearch = (e) => {
		setSearchText(e.target.value);
	};
	console.log(products);
	console.log(searchText);

	const searchResult = products.filter((element) => {
		if (searchText.length == 0) {
			return;
		}

		return element.title.toLowerCase().includes(searchText.toLowerCase());
	});

	// console.log(text.toLowerCase().includes("MaNGo".toLowerCase()))

	console.log(searchResult);

	return (
		<>
			{/* Overlay  */}
			{showMenu && (
				<div
					className="bg-slate-900/90 fixed top-0 left-0 w-screen h-screen z-[5000]"
					onClick={handleShowMenu}
				></div>
			)}
			<div>
				{/* Topbar */}
				<div className="text-white bg-black py-2 hidden lg:block">
					<div className="container mx-auto">
						<div className="grid grid-cols-[1fr_180px] items-center">
							<div className="flex items-center gap-1">
								<p>
									Summer Sale For All Swim Suits And Free Express Delivery - OFF
									50%!
								</p>
								<Link to={"/shop"}>ShopNow</Link>
							</div>
							<div className="flex justify-end">
								<select name="" id="" defaultValue={"english"}>
									<option value="english">English</option>
									<option value="bangla">Bangla</option>
								</select>
							</div>
						</div>
					</div>
				</div>

				<div className="py-4 md:py-8 bg-white border-b border-b-F5F5F5">
					<div className="container">
						<div className="grid grid-cols-[90px_1fr] items-center lg:grid-cols-[118px_1fr_348px] gap-6 justify-between lg:gap-[130px]">
							<div>
								<Link to="/">
									<img src="/logo.png" alt="logo" />
								</Link>
							</div>

							{/* Main Menu */}
							<div className="lg:flex items-center justify-center hidden">
								<nav>
									<ul className="flex items-center gap-5">
										<li>
											<Link className="text-black" to="/">
												Home
											</Link>
										</li>
										<li>
											<Link className="text-black" to="/shop">
												Shop
											</Link>
										</li>
										<li>
											<Link className="text-black" to="/about">
												About
											</Link>
										</li>
										<li>
											<Link className="text-black" to="/contact">
												Contact
											</Link>
										</li>
										<li>
											<Link className="text-black" to="/signup">
												Sign up
											</Link>
										</li>
									</ul>
								</nav>
							</div>

							{/* Right side */}
							<div className="flex justify-end gap-4">
								<form className="w-[243px] py-1.75 px-3  bg-F5F5F5 flex items-center justify-between gap-4 relative">
									<input
										className="px-2 bg-transparent text-[12px] focus:outline-none"
										type="text"
										placeholder="What are you looking for?"
										onChange={(e) => handleSearch(e)}
										onFocus={() => setShowSearchBox(true)}
										onBlur={() => setShowSearchBox(false)}
									/>
									<button type="submit" className="cursor-pointer">
										<img src={searchIcon} alt="icon" />
									</button>
									{showSearchBox && searchText.length > 0 && (
										<div className="absolute top-full right-0 z-50">
											<ProductSearchDropdown searchProduct={searchResult} />
										</div>
									)}
								</form>
								<div className="flex items-center gap-4">
									<Link to="/cart" className="cursor-pointer relative">
										<img src={cartIcon} alt="icon" />
										<span className="absolute top-0 right-0 z-10 size-4 rounded-full bg-my_secondary text-white text-[10px] flex items-center justify-center">
											{cartList.length}
										</span>
									</Link>
									<Link to="/wishlist" className="cursor-pointer relative">
										<img src={wishListIcon} alt="icon" />
										<span className="absolute top-0 right-0 z-10 size-4 rounded-full bg-my_secondary text-white text-[10px] flex items-center justify-center">
											{wishList.length}
										</span>
									</Link>
									<buutton
										className="cursor-pointer lg:hidden"
										onClick={handleShowMenu}
									>
										<Menu />
									</buutton>

									{user && (
										<div className="relative">
											<div className="cursor-pointer group">
												<User />

												<ProfileDropdown
													className={
														"transition-all group-hover:visible invisible opacity-0 group-hover:opacity-100"
													}
												/>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Show only mobile menu */}
			{showMenu && (
				<div className="bg-F5F5F5 w-[60vw] h-screen py-20 px-20 fixed top-0 right-0 z-6000">
					<div className="w-full flex justify-between items-center gap-3 absolute top-0 left-0 p-2 border-b border-b-slate-300">
						<img className="w-20" src="logo.png" alt="logo" />
						<button
							className="p-2 bg-F5F5F5 text-slate-800 cursor-pointer "
							onClick={handleShowMenu}
						>
							<X />
						</button>
					</div>
					<ul className="grid gap-3">
						<li>
							<Link className="text-black" to="/">
								Home
							</Link>
						</li>
						<li>
							<Link className="text-black" to="/shop">
								Shop
							</Link>
						</li>
						<li>
							<Link className="text-black" to="/about">
								About
							</Link>
						</li>
						<li>
							<Link className="text-black" to="/contact">
								Contact
							</Link>
						</li>
						<li>
							<Link className="text-black" to="/signup">
								Sign up
							</Link>
						</li>
					</ul>
				</div>
			)}
		</>
	);
};

export default Header;
