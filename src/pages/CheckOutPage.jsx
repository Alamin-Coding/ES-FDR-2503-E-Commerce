import remote from "../assets/remote.svg";
import tv from "../assets/tv.svg";
import bkash from "../assets/bkash.svg";
import nagad from "../assets/nogod.svg";
import visa from "../assets/visa.svg";
import mastercard from "../assets/master.svg";
const CheckoutPage = () => {
	return (
		<section className="bg-white">
			<div className="container mx-auto">
				{/* Links  */}
				<div className=" py-20 text-sm text-[#ada9a9] ">
					<span className="hover:text-black cursor-pointer">Account</span>
					<span className="mx-2">/</span>

					<span className="hover:text-black cursor-pointer">My Account</span>
					<span className="mx-2">/</span>

					<span className="hover:text-black cursor-pointer">Product</span>
					<span className="mx-2">/</span>

					<span className="hover:text-black cursor-pointer">View Cart</span>
					<span className="mx-2">/</span>

					<span className="text-black font-medium">CheckOut</span>
				</div>

				{/* Forms  */}
				<div className=" flex gap-[173px] py-10">
					<div className=" w-full max-w-md p-6 ">
						<h2 className="text-[36px] leading-[30px] tracking-[4%] font-medium mb-12">
							Billing Details
						</h2>

						{/* First Name */}
						<div className="mb-8">
							<label className=" text-sm text-black40 mb-1">
								First Name<span className="text-red-500">*</span>
							</label>

							<input
								type="text"
								className="w-full bg-F5F5F5 p-3 rounded outline-none"
							/>
						</div>

						{/* Company Name */}
						<div className="mb-8">
							<label className="block text-sm text-black40 mb-1">
								Company Name
							</label>
							<input
								type="text"
								className="w-full bg-F5F5F5 p-3 rounded outline-none"
							/>
						</div>

						{/* Street Address */}
						<div className="mb-8">
							<label className="block text-sm text-black40 mb-1">
								Street Address<span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								className="w-full bg-F5F5F5 p-3 rounded outline-none"
							/>
						</div>

						{/* Apartment */}
						<div className="mb-8">
							<label className="block text-sm text-black40 mb-1">
								Apartment, floor, etc. (optional)
							</label>
							<input
								type="text"
								className="w-full bg-F5F5F5 p-3 rounded outline-none"
							/>
						</div>

						{/* Town/City */}
						<div className="mb-8">
							<label className="block text-sm text-black40 mb-1">
								Town/City<span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								className="w-full bg-F5F5F5 p-3 rounded outline-none"
							/>
						</div>

						{/* Phone Number */}
						<div className="mb-8">
							<label className="block text-sm text-black40 mb-1">
								Phone Number<span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								className="w-full bg-F5F5F5 p-3 rounded outline-none"
							/>
						</div>

						{/* Email */}
						<div className="mb-8">
							<label className="block text-sm text-black40 mb-1">
								Email Address<span className="text-red-500">*</span>
							</label>
							<input
								type="email"
								className="w-full bg-F5F5F5 p-3 rounded outline-none"
							/>
						</div>

						{/* Checkbox */}
						<div className="flex items-center mt-4">
							<input
								type="checkbox"
								defaultChecked
								className="w-4 h-4 accent-red-500 mr-2"
							/>
							<p className="text-sm text-black40">
								Save this information for faster check-out next time
							</p>
						</div>
					</div>

					<div className="max-w-md w-full mt-16 bg-white p-6 rounded-lg ">
						{/* Products */}
						<div className=" flex flex-col gap-8 mb-8">
							{/* Item 1 */}
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-6">
									<img src={remote} alt="product" className="w-12 h-12 " />
									<p className="text-sm">LCD Monitor</p>
								</div>
								<p className="text-sm">$650</p>
							</div>

							{/* Item 2 */}
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-6">
									<img
										src={tv}
										alt="product"
										className="w-12 h-12 object-cover"
									/>
									<p className="text-sm">HI Gamepad</p>
								</div>
								<p className="text-sm">$1100</p>
							</div>
						</div>

						{/* Subtotal */}
						<div className="flex justify-between text-sm mb-4 border-b border-black40 h-[40px]">
							<p>Subtotal:</p>
							<p>$1750</p>
						</div>

						{/* Shipping */}
						<div className="flex justify-between text-sm mb-4 border-b border-black40 h-[40px]">
							<p>Shipping:</p>
							<p>Free</p>
						</div>

						{/* Total */}
						<div className="flex justify-between text-sm font-medium mb-8">
							<p>Total:</p>
							<p>$1750</p>
						</div>

						{/* Payment Method */}
						<div className="space-y-3 mb-4">
							{/* Bank */}
							<label className="flex items-center justify-between cursor-pointer">
								<div className="flex items-center gap-2">
									<input type="radio" name="payment" />
									<span className="text-sm">Bank</span>
								</div>

								{/* Payment icons */}
								<div className="flex gap-2 items-center text-xs">
									<span>
										<img src={bkash} alt="bKash" />
									</span>
									<span>
										<img src={visa} alt="Visa" />
									</span>
									<span>
										<img src={mastercard} alt="Mastercard" />
									</span>
									<span>
										<img src={nagad} alt="Nagad" />
									</span>
								</div>
							</label>

							{/* COD */}
							<label className="flex items-center gap-2 cursor-pointer">
								<input type="radio" name="payment" defaultChecked />
								<span className="text-sm">Cash on delivery</span>
							</label>
						</div>

						{/* Coupon */}
						<div className="flex gap-2 mb-4">
							<input
								type="text"
								placeholder="Coupon Code"
								className="flex-1 border rounded px-3 py-2 text-sm outline-none"
							/>
							<button className="bg-[#DB4444] text-white px-4 py-2 rounded text-sm">
								Apply Coupon
							</button>
						</div>

						{/* Place Order */}
						<button className=" bg-[#DB4444] text-white px-4 py-3 rounded text-sm font-medium">
							Place Order
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CheckoutPage;
