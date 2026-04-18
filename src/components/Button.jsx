
const Button = ({ TagName, children, className="", ...props }) => {
	const Component = TagName || "button";
	return (
		<Component
			{...props}
			className={`${className} bg-secondary text-white py-4 px-12 rounded cursor-pointer`}
		>
			{children}
		</Component>
	);
};

export default Button;
