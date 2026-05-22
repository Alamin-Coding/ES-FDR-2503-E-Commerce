import { useState } from "react";

export default function ProductSearchDropdown({ searchProduct }) {
	const [activeTab, setActiveTab] = useState("products");

	return (
		<div className="w-[580px] bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden font-sans max-h-150 overflow-y-scroll">
			{/* Tabs */}
			<div className="flex border-b border-gray-200">
				<button
					onClick={() => setActiveTab("products")}
					className={`px-5 py-2.5 text-sm font-medium transition-colors ${
						activeTab === "products" ?
							"bg-red-500 text-white"
						:	"text-gray-600 hover:bg-gray-50"
					}`}
				>
					Products
				</button>
				<button
					onClick={() => setActiveTab("categories")}
					className={`px-5 py-2.5 text-sm font-medium transition-colors ${
						activeTab === "categories" ?
							"bg-red-500 text-white"
						:	"text-gray-600 hover:bg-gray-50"
					}`}
				>
					Categories
				</button>
			</div>

			{/* Product List */}
			<ul className="divide-y divide-gray-100">
				{searchProduct.length <= 0 && (
					<p className="p-10 text-xl">Product not found!</p>
				)}
				{searchProduct?.map((product) => (
					<li
						key={product.id}
						className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
					>
						{/* Thumbnail */}
						<div className="w-14 h-14 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center">
							<img src={product.thumbnail} alt="image" />
						</div>

						{/* Info */}
						<div className="flex-1 min-w-0">
							<p className="text-sm text-gray-800 leading-snug">
								{product.title}
							</p>
							{product.outOfStock ?
								<p className="mt-1 text-sm font-medium text-red-500">
									Out Of Stock
								</p>
							:	<p className="mt-1 text-sm font-medium text-red-500">
									{product.price}
								</p>
							}
						</div>
					</li>
				))}
			</ul>

			{/* Footer */}
			{searchProduct.length > 0 && (
				<div className="py-3 text-center border-t border-gray-100">
					<button className="text-sm text-red-500 hover:text-red-600 font-medium transition-colors">
						See all results
					</button>
				</div>
			)}
		</div>
	);
}
