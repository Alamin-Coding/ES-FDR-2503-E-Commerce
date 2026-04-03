<<<<<<< HEAD
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
=======
import React from 'react'

const Button = ({ children, onClick, variant = "red", className= "" }) => {
  const baseClasses = "px-12 py-4 rounded-md font-medium";
  const variantClasses = {
    red: "bg-[#DB4444] text-white hover:bg-[#DB4444] hover:bg-opacity-80",
    black: "bg-[#000000] text-white hover:bg-[#000000] hover:bg-opacity-80",
    white: "bg-white text-[#000000] border border-[#000000]",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
>>>>>>> 19dd905 (ProductDetailpage create)
