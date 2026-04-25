import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Root = () => {
	const { theme,handleThemeChange } = useContext(ThemeContext);

	return (
		<main className="bg-slate-100 dark:bg-black dark:text-white">
			<div onClick={handleThemeChange} className="bg-gray-500 w-20 mx-auto mt-10 cursor-pointer rounded-3xl toggler dark:bg-green-500 fixed top-5 right-5 z-30">
				<div
					className={`bg-white w-10 h-10 scale-75 rounded-3xl transition-transform dark:bg-black ${theme == "light" ? "translate-x-0" : "translate-x-full"}`}
				></div>
			</div>
			<Header />
			<Outlet />
			<Footer />
		</main>
	);
};

export default Root;
