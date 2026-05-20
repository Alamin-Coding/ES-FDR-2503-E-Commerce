import { useDispatch, useSelector } from "react-redux";
import { StarIcon, EyeIcon, HeartIcon } from "./icons";

import { Link } from "react-router";
import { addToCart } from "../features/cart/cartSlice";
import { addTowishlist } from "../features/wishlist/wishlistSlice";
import { Heart } from "lucide-react";
import { Bounce, toast } from "react-toastify";

// interface Product {
// 	id: 1;
// 	title?: string;
// }
// interface ProductCardProps {
// 	product: Product[];
// 	showPrice?: boolean;
// 	price_with_rating?: boolean;
// }

const ProductCardItem = ({
	product,
	showPrice = true,
	price_with_rating = false,
}) => {
	const { cartList } = useSelector((state) => state.cart);
	const { wishList } = useSelector((state) => state.wishlist);

	const dispatch = useDispatch();

	const isCartItem = cartList.find((item) => item.id === product.id);
	const handleAddToCart = () => {
		if (!isCartItem) {
			dispatch(
				addToCart({
					...product,
					quantity: 1,
					subtotal: product.price,
				}),
			);
		}
	};

	const checkItemAddedInWishlist = (id) =>
		wishList.find((item) => item.id == id);

	const warnNotify = () =>
		toast.warn("Already added!", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
			transition: Bounce,
		});
	const succesNotify = () =>
		toast.success("Successfully added!", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
			transition: Bounce,
		});

	const handleAddToWishlist = (id) => {
		const isWishlistItem = checkItemAddedInWishlist(id);
		if (!isWishlistItem) {
			dispatch(addTowishlist(product));
			succesNotify();
		} else {
			warnNotify();
		}
	};

	return (
		<div className="overflow-hidden">
			{/* Image */}
			<div className="bg-F5F5F5 rounded-sm flex items-center justify-center p-4 relative group min-h-[250px]">
				{product.discount && (
					<span className="absolute top-4 left-4 z-10 bg-my_secondary text-white rounded-xs inline-block py-1 px-2">
						{product.discount}%
					</span>
				)}
				<img src={product.thumbnail} alt="image" />
				<div className="space-y-4 absolute top-4 right-4 z-10 flex flex-col gap-1">
					<button
						onClick={() => handleAddToWishlist(product.id)}
						className={`group/{abc} cursor-pointer ${checkItemAddedInWishlist(product.id) && "bg-red-500 text-white"} hover:bg-my_secondary hover:text-white size-6 rounded-full flex items-center justify-center`}
					>
						<Heart className="text-[10px]" size={18} />
					</button>
					<button className="cursor-pointer">
						<EyeIcon />
					</button>
				</div>
				<button
					onClick={handleAddToCart}
					className={`flex justify-center text-white bg-black absolute w-full px-2 py-2 bottom-1 group-hover:bottom-0 ${isCartItem ? "cursor-not-allowed" : "cursor-pointer"} opacity-0 group-hover:opacity-100 transition-all`}
				>
					{isCartItem ? "Already in cart" : "Add to cart"}
				</button>
			</div>
			<div className="pt-4">
				<h4 className="text-black font-medium">{product.title}</h4>
				{showPrice && (
					<p className="py-2">
						<span className="text-my_secondary">${product.price}</span>{" "}
						<del>${}</del>
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
					<span>({product.reviews.length})</span>
				</div>
			</div>
		</div>
	);
};

export default ProductCardItem;
