import { ArrowLeft, ArrowRight } from "lucide-react";

const Arrows = ({swiperRef}) => {
  return (
    <div className="flex items-center justify-end gap-4">
      <button
        onClick={() => swiperRef.current.slidePrev()}
        className="size-[36px] rounded-full bg-slate-50 flex items-center justify-center cursor-pointer"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={() => swiperRef.current.slideNext()}
        className="size-[36px] rounded-full bg-slate-50 flex items-center justify-center cursor-pointer"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Arrows;
