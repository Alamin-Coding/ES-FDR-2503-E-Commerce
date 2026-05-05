
const Button = ({ TagName, children, className="",  ...props  }) => {
	const Component = TagName || "button";
	return (
		<Component
			{...props}
			className={`bg-secondary text-white py-4 px-12 rounded-md font-medium cursor-pointer  flex items-center  justify-center text-center
				 ${className} `}
		>
			{children}
		</Component>
	);
};

export default Button;
