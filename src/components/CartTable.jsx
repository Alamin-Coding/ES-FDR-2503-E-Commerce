import React from "react";
import Section from "./Section";
import Container from "./Container";
import Cart_1 from "./../assets/cart-1.png";
import Cart_2 from "./../assets/cart-2.png";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router";

const cartItems = [
	{
		id: 1,
		name: "LCD Monitor",
		price: 650,
		quantity: 1,
		image: Cart_1,
	},
	{ id: 2, name: "H1 Gamepad", price: 550, quantity: 2, image: Cart_2 },
];

const CartTable = () => {
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
					<div className="grid grid-cols-4 justify-items-center gap-45 items-center text-black text-[16px] pl-10 pr-15 py-6 shadow-sm rounded-md">
						<span>Product</span>
						<span>Price</span>
						<span>Quantity</span>
						<span>Subtotal</span>
					</div>
					{cartItems.map((item) => (
						<div
							key={item.id}
							className="grid grid-cols-4 justify-items-center gap-45 items-center text-black text-[16px] pl-10 pr-15 py-6 shadow-sm rounded-md "
						>
							<div className="flex items-center gap-3">
								<img
									src={item.image}
									alt={item.name}
									className="w-14 h-14 object-contain"
								/>
								<span className="text-gray-700 whitespace-nowrap">
									{item.name}
								</span>
							</div>
							<span className="text-gray-700">${item.price}</span>
							<div className="w-16 border border-gray-300 rounded-md px-2 py-1 text-center flex items-center justify-between">
								<span>{item.quantity}</span>
								<span>
									<ChevronUp className="w-4 h-4 cursor-pointer" />
									<ChevronDown className="w-4 h-4 cursor-pointer" />
								</span>
							</div>
							<span className="text-right text-gray-700">
								${item.price * item.quantity}
							</span>
						</div>
					))}
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
