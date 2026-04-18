import { useDispatch, useSelector } from "react-redux";
import { StarIcon, EyeIcon, HeartIcon } from "./icons";

import { Link } from "react-router";
import { addToCart } from "../features/cart/cartSlice";

const ProductCard = ({
	product,
	showPrice = true,
	price_with_rating = false,
}) => {
	const { value } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	console.log(value);

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	};

	return (
		<div className="overflow-hidden w-[270px]">
			{/* Image */}
			<div className="bg-F5F5F5 rounded-sm flex items-center justify-center p-4 relative group min-h-[250px]">
				<span className="absolute top-4 left-4 z-10 bg-my_secondary text-white rounded-xs inline-block py-1 px-2">
					{product.discount}%
				</span>
				<img src={product.image} alt="image" />
				<div className="space-y-4 absolute top-4 right-4 z-10 flex flex-col gap-1">
					<button>
						<HeartIcon />
					</button>
					<button>
						<EyeIcon />
					</button>
				</div>
				<button
					onClick={handleAddToCart}
					className="flex justify-center text-white bg-black absolute w-full px-2 py-2 bottom-1 group-hover:bottom-0 cursor-pointer opacity-0 group-hover:opacity-100 transition-all"
				>
					Add To Cart
				</button>
			</div>
			<div className="pt-4">
				<h4 className="text-black font-medium">{product.title}</h4>
				{showPrice && (
					<p className="py-2">
						<span className="text-my_secondary">${product.price}</span>{" "}
						<del>${product.originalPrice}</del>
					</p>
				)}

				<div className="flex items-center gap-3">
					{price_with_rating && (
						<p className="py-2">
							<span className="text-my_secondary">${product.price}</span>
						</p>
					)}
					<ul className="flex gap-2 items-center">
						<li>
							<StarIcon className="text-gold" />
						</li>
						<li>
							<StarIcon className="text-gold" />
						</li>
						<li>
							<StarIcon className="text-gold" />
						</li>
						<li>
							<StarIcon className="text-gold" />
						</li>
						<li>
							<StarIcon className="text-gold" />
						</li>
					</ul>
					<span>({product.reviews})</span>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
