import React from "react";

const Loading = () => {
	return (
		<div className="h-screen w-full flex flex-col gap-3 items-center justify-center">
			<div class="flex w-100 gap-4 justify-center">
				{/* <div class="skeleton h-4 w-full"></div>
				<span class="skeleton skeleton-text text-[60px]">Loading...</span>
				<div class="skeleton h-4 w-full"></div> */}
				<span class="loading loading-bars loading-xs"></span>
				<span class="loading loading-bars loading-sm"></span>
				<span class="loading loading-bars loading-md"></span>
				<span class="loading loading-bars loading-lg"></span>
				<span class="loading loading-bars loading-xl"></span>
			</div>
			<span class="skeleton skeleton-text text-[60px]">Loading...</span>
		</div>
	);
};

export default Loading;
