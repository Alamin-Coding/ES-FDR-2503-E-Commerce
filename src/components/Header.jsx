import React, { useContext } from "react";
import { Link } from "react-router";

import searchIcon from "../assets/icons/search.png";
import cartIcon from "../assets/icons/cart.png";
import wishListIcon from "../assets/icons/Wishlist.png";
import { User } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";
import { AuthContext } from "../context/authContext";
import { useSelector } from "react-redux";

const Header = () => {
	// const user = null; // Replace with actual user data or authentication logic
	const { user } = useContext(AuthContext);
	const {value } = useSelector((state) => state.cart);

	console.log(user);
	return (
		<div>
			<div className="text-white bg-black py-2">
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

			<div className="pt-10 pb-4 bg-white border-b border-b-F5F5F5">
				<div className="container">
					<div className="grid grid-cols-[118px_1fr_348px] gap-[130px]">
						<div>
							<Link to="/">
								<img src="/logo.png" alt="logo" />
							</Link>
						</div>
						<div className="flex items-center justify-center">
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

						<div className="flex justify-end gap-4">
							<form className="w-[243px] py-1.75 px-3  bg-F5F5F5 flex items-center justify-between gap-4">
								<input
									className="px-2 bg-transparent text-[12px] focus:outline-none"
									type="text"
									placeholder="What are you looking for?"
								/>
								<button type="submit" className="cursor-pointer">
									<img src={searchIcon} alt="icon" />
								</button>
							</form>
							<div className="flex items-center gap-4">
								<div className="cursor-pointer">
									<img src={cartIcon} alt="icon" />
									{value.length}
								</div>
								<div className="cursor-pointer">
									<img src={wishListIcon} alt="icon" />
								</div>

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
	);
};

export default Header;
