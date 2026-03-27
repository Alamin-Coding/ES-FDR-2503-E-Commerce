import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
	return (
		<section className="pt-20 pb-35 bg-white">
			<div className="container">
				<div className="flex items-center gap-2 justify-start">
					<span className="text-slate-300">Home</span>
                    <span className="text-slate-300">/</span>
					<span className="text-slate-800">404 Error</span>
				</div>
				<div className="text-center">
					<h1 className="text-[110px] font-medium pb-2 text-black">
						404 Not Found
					</h1>
					<p className="text-base font-normal text-black leading-normal pb-[96px]">
						Your visited page not found. You may go home page.
					</p>
					<Link
						to={"/"}
						className="inline-block py-4 px-12 bg-secondary text-white rounded-sm"
					>
						Back to home page
					</Link>
				</div>
			</div>
		</section>
	);
};

export default NotFoundPage;
