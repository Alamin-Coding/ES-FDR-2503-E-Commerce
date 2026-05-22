import { createContext, useState } from "react";

export const ThemeContext = createContext({
	theme: "light",
	handleThemeChange: () => {},
});

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");
	const [url, setUrl] = useState("https://dummyjson.com/products");

	const handleThemeChange = () => {
		setTheme(theme === "light" ? "dark" : "light");
		document.documentElement.classList.toggle("dark");
	};
	return (
		<ThemeContext value={{ theme, handleThemeChange, url, setUrl }}>{children}</ThemeContext>
	);
};

export default ThemeProvider;
