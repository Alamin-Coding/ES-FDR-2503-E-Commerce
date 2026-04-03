import { ArrowLeft, ArrowRight } from "lucide-react";

const Arrows = () => {
	return (
		<div className="flex items-center justify-end gap-4">
			<button className="size-[36px] rounded-full bg-slate-50 flex items-center justify-center cursor-pointer">
				<ArrowLeft />
			</button>
			<button className="size-[36px] rounded-full bg-slate-50 flex items-center justify-center cursor-pointer">
				<ArrowRight />
			</button>
		</div>
	);
};

export default Arrows;
