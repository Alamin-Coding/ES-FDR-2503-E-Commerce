import React, { use, useEffect, useState } from "react";
import Section from "../Section";
import Container from "../Container";
import Cart_1 from "../../assets/remote.svg";
import Cart_2 from "../../assets/tv.svg";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router";
// import { useSelector } from "react-redux";

const CartTable = () => {
	const [totalItem, setTotalItem] = useState(1);
	const { cartList } = useSelector((state) => state.cart);
	console.log(cartList);

	const handleQuantity = (value, id) => {
		console.log(value, id);
	};
	const handleIncrement = (id) => {
		const totalCartItem = cartList.map((item) => item.id === id);
		console.log(totalCartItem);
	};
	const handleDecrement = () => {
		setTotalItem(totalItem - 1);
	};

	return (
		<Section>
			<Container>
				<div className="flex items-center gap-2 justify-start">
					<Link to="/" className="text-slate-300">
						Home
					</Link>
					<span className="text-slate-300">/</span>
					<Link to="/cart" className="text-800">
						Cart
					</Link>
				</div>
				<div className="w-full space-y-10 mt-10.5">
					<table className="w-full">
						<tr className="text-black text-[16px] pl-10 pr-15 py-6 shadow-sm rounded-md">
							<td className="px-5 h-[72px]">Product</td>
							<td className="px-5 h-[72px]">Price</td>
							<td className="px-5 h-[72px] text-center">Quantity</td>
							<td className="px-5 h-[72px] text-right">Subtotal</td>
						</tr>
						{cartList.map((item) => (
							<tr className="text-black text-[16px] pl-10 pr-15 py-6 shadow-sm rounded-md">
								<td className="px-5 h-[72px]">
									<div className="flex items-center gap-2">
										<div className="size-[54px] overflow-hidden">
											<img
												src={item.thumbnail}
												alt="image"
												className="h-full"
											/>
										</div>
										<p>{item.title}</p>
									</div>
								</td>
								<td className="px-5 h-[72px]">${item.price}</td>
								<td className="px-5 h-[72px] text-center">
									<div className="border p-1 w-[72px] h-12 rounded flex items-center gap-1 justify-between">
										<span className="mx-2">{item.quantity}</span>
										<div className="flex flex-col">
											<button
												className="cursor-pointer"
												onClick={() => handleIncrement(item.id)}
											>
												<ChevronUp size={16} />
											</button>
											<button
												className="cursor-pointer"
												onClick={() => handleDecrement(item.quantity, item.id)}
											>
												<ChevronDown size={16} />
											</button>
										</div>
									</div>
								</td>
								<td className="px-5 h-[72px] text-right">
									{item.price * item.quantity}
								</td>
							</tr>
						))}
					</table>
				</div>
				<div className="flex justify-between items-center mt-6 pb-10">
					<button className=" text-black py-4 px-12 rounded-md border border-gray-500 cursor-pointer">
						Return To Shop
					</button>
					<button className=" text-black py-4 px-12 rounded-md border border-gray-500 cursor-pointer">
						Update Cart
					</button>
				</div>
			</Container>
		</Section>
	);
};

export default CartTable;
