import React from "react";
import BlurText from "./BlurText";

const SectionHeader = ({ title, subtitle }) => {

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};



	return (
		<div className="space-y-6">
			<p className="flex items-center gap-2">
				<span className="h-10 w-5 bg-my_secondary rounded-sm inline-block"></span>
				<span className="text-my_secondary">{subtitle}</span>
			</p>
			<BlurText
				 text="Isn't this so cool?!"
				delay={200}
				animateBy="words"
				direction="top"
				onAnimationComplete={handleAnimationComplete}
				className="text-2xl mb-8"
			/>
			<h2 className="text-[36px] font-semibold">{title}</h2>
		</div>
	);
};

export default SectionHeader;
