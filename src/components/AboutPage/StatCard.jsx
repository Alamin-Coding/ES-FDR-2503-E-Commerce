import React, { useState } from "react";

const StatCard = ({ Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group bg-white rounded-sm text-center text-black w-[270px] border border-[#C1C0C1] transition-all duration-300 ease-in-out hover:bg-secondary hover:text-white hover:border-secondary hover:cursor-pointer hover:scale-100 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="py-7.5 ">
        <div className="size-20 rounded-full mx-auto bg-[#C1C0C1] flex items-center justify-center z-2 group-hover:bg-[#E67C7C]">
          <div className="size-13.5 rounded-full bg-black z-5 flex items-center justify-center group-hover:bg-[#ede3e3]">
            <Icon width={40} height={40} fill="none" stroke={isHovered ? "black" : "white"} />
          </div>
        </div>
        <h3 className="text-[32px] font-bold pt-6 pb-2">{title}</h3>
        <p className=" text-[16px] leading-5.25">{description}</p>
      </div>
    </div>
  );
};

export default StatCard;
