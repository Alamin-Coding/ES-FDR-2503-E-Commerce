const SecondaryButton = ({ TagName, children,className="", ...props }) => {
	const Component = TagName || "button";
	return (
		<Component
			{...props}
			className={`${className} bg-transparent border border-black text-black py-4 px-12 rounded cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors duration-300`}
		>
			{children}
		</Component>
	);
};

export default SecondaryButton;
