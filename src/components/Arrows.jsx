import { ArrowLeft, ArrowRight } from "lucide-react";

import { useSwiper } from "swiper/react";

const Arrows = () => {
	const  swiper = useSwiper();
	return (
		<div className="flex items-center justify-end gap-4">
			<button onClick={() => swiper.slidePrev()} className="size-[36px] rounded-full bg-slate-50 flex items-center justify-center cursor-pointer">
				<ArrowLeft />
			</button>
			<button  onClick={() => swiper.slideNext()} className="size-[36px] rounded-full bg-slate-50 flex items-center justify-center cursor-pointer">
				<ArrowRight />
			</button>
		</div>
	);
};

export default Arrows;
