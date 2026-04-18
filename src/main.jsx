import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/css";
import App from "./App.jsx";
import ThemeProvider from "./context/ThemeContext.jsx";
import AuthProvider from "./context/authContext.jsx";

import { store } from "./store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<ThemeProvider>
				<AuthProvider>
					<App />
				</AuthProvider>
			</ThemeProvider>
		</Provider>
	</StrictMode>,
);
