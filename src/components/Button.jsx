
const Button = ({ TagName, children, className="",  ...props  }) => {
	const Component = TagName || "button";
	return (
		<Component
			{...props}
			className={`bg-secondary text-white py-4 px-12 rounded cursor-pointer  flex items-center  justify-center gap-4 ${className} `}
		>
			{children}
		</Component>
	);
};

export default Button;
