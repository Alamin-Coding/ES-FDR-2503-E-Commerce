const Button = ({ TagName, children, ...props }) => {
	const Component = TagName || "button";
	return (
		<Component
			{...props}
			className="bg-secondary text-white py-4 px-12 rounded cursor-pointer"
		>
			{children}
		</Component>
	);
};

export default Button;
