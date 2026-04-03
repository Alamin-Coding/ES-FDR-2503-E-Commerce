
const ArrowLeft = ({width = 18, height = 16, stroke = "black"}) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 18 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8 1L1 8L8 15M1 8H17"
				stroke={stroke}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default ArrowLeft;
