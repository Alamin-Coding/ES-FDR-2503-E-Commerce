
import React from "react";
import Section from "../components/Section";
import Container from "../components/Container";
import { HeartIcon, StarIcon } from "../components/icons";
import Button from "../components/Button";

// import Image for product veiw
import Image1 from "../assets/image-1.png";
import Image2 from "../assets/image-2.png";
import Image3 from "../assets/image-3.png";
import Image from "../assets/pimage.png";

import ProductCard from "../components/ProductCard";
import delivery from "../assets/icons/icon-delivery.png";
import preturn from "../assets/icons/icon-return.png";
import { FlashSellingProductsData } from "../data";
import SectionHeader from "../components/SectionHeader";

const ProductDetailPage = () => {
	return (
		<Section className="pb-35 pt-20">
			<Container>
				<div className="flex items-center gap-2 justify-start pb-20">
					<span className="text-slate-300">Home</span>
					<span className="text-slate-300">/</span>
					<span className="text-slate-300">Gaming</span>
					<span className="text-slate-300">/</span>
					<span className="text-slate-800">Havic HV G-92 Gamepad</span>
				</div>
				<div className="grid grid-cols-[170px_500px_auto]  pb-35">
					<div className="flex flex-col gap-4 w-[170px]">
						<div className="w-[170px] h-[138px] rounded bg-F5F5F5 flex items-center justify-center">
							<img src={Image1} alt="Product1" />
						</div>
						<div className="w-[170px] h-[138px] rounded bg-f5f5f5 flex items-center justify-center">
							<img src={Image2} alt="Product1" />
						</div>
						<div className="w-[170px] h-[138px] rounded bg-F5F5F5 flex items-center justify-center">
							<img src={Image3} alt="Product1" />
						</div>
						<div className="w-[170px] h-[138px] rounded bg-F5F5F5 flex items-center justify-center">
							<img src={Image} alt="Product1" />
						</div>
					</div>
					<div className="w-full w-[500px]  pr-18.5 pl-8.5 ">
						<img src={Image} alt="Product" />
					</div>
					<div>
						<div>
							<h2 className="text-[24px] font-bold text-[#000000] pb-4">
								Havic HV G-92 Gamepad
							</h2>
							<div className="flex items-center">
								<div className="flex items-center gap-1">
									{[...Array(5)].map(() => (
										<StarIcon />
									))}
								</div>
								<span className="text-sm font-normal pl-2 pr-4 border-r border-[#000000]/50 text-[#000000]/50">
									(150 Reviews)
								</span>
								<span className="text-sm font-normal text-[#00FF66]/60 pl-4">
									In Stock
								</span>
							</div>
							<strong className="text-[24px] font-normal pt-4 text-[#000000]">
								$192.00
							</strong>
							<p className="text-[14px] leading-[1.5] font-normal text-[#000000] max-w-[373px] py-6">
								PlayStation 5 Controller Skin High quality vinyl with air
								channel adhesive for easy bubble free install & mess free
								removal Pressure sensitive.
							</p>
							<hr className="pb-10 text-[#000000]/50" />
						</div>
						<div className="flex flex-col gap-6">
							<div className="flex items-center gap-6">
								<strong className="text-[20px] font-regular text-[#000000] tracking-[3%]">
									{" "}
									Colours:
								</strong>
								<div className="flex items-center gap-2">
									<div className="w-6 h-6 rounded-full bg-[#000000] cursor-pointer"></div>
									<div className="w-6 h-6 rounded-full bg-[#FF0000] cursor-pointer"></div>
									<div className="w-6 h-6 rounded-full bg-[#00FF66] cursor-pointer"></div>
								</div>
							</div>
							<div className="flex items-center gap-6">
								<strong className="text-[20px] font-regular text-[#000000] tracking-[3%]">
									Size:
								</strong>
								<div className="flex items-center gap-4">
									<div className=" w-8 h-8 border border-[#000000]/50 rounded flex items-center justify-center hover:bg-secondary hover:text-white">
										XS
									</div>
									<div className=" w-8 h-8 border border-[#000000]/50 rounded flex items-center justify-center hover:bg-secondary hover:text-white">
										S
									</div>
									<div className=" w-8 h-8 border border-[#000000]/50 rounded flex items-center justify-center hover:bg-secondary hover:text-white">
										M
									</div>
									<div className=" w-8 h-8 border border-[#000000]/50 rounded flex items-center justify-center hover:bg-secondary hover:text-white">
										L
									</div>
									<div className=" w-8 h-8 border border-[#000000]/50 rounded flex items-center justify-center hover:bg-secondary hover:text-white">
										G
									</div>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="flex border rounded">
									<div className=" w-10 h-11 border-r border-[#000000]/50  flex items-center justify-center">
										-
									</div>
									<span className="w-20 h-11 flex items-center justify-center">
										2
									</span>
									<div className=" w-10 h-11 border-l border-[#000000]/50  flex items-center justify-center bg-secondary text-white">
										+
									</div>
								</div>
								<button className="bg-primary text-white  py-2.5 px-12 rounded bg-secondary transition duration-300">
									Buy Now
								</button>
								<div className="w-11 h-11 border border-[#000000]/50 rounded flex items-center justify-center p-2 cursor-pointer">
									<HeartIcon />
								</div>
							</div>
							<div className="border border-[#000000]/50 pt-6 rounded ">
								<div className="flex items-center gap-4 pb-4 border-b border-[#000000]/50 pl-4">
									<img src={delivery} alt="Delivery Icon" />
									<div className="flex flex-col gap-2">
										<h4 className=" text-base font-medium">Free Delivery</h4>
										<p className="text-[12px] leading-[1.5] font-medium">
											Enter your postal code for Delivery Availability
										</p>
									</div>
								</div>
								<div className="flex items-center gap-4 pt-4 pb-6 pl-4">
									<img src={preturn} alt="Return Icon" />
									<div className="flex flex-col gap-2">
										<h4 className=" text-base font-medium">Return Delivery</h4>
										<p className="text-[12px] leading-[1.5] font-medium">
											Free 30 Days Delivery Returns. Details
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="pb-17.5">
					<SectionHeader subtitle="Related Item" />
				</div>
				<div className="grid grid-cols-4 gap-6">
					{FlashSellingProductsData.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</Container>
		</Section>
	);

};

export default ProductDetailPage;
