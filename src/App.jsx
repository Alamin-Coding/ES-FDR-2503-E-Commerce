import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "login",
				element: <LoginPage />,
			},
			{
				path: "signup",
				element: <SignupPage />,
			},
			{
				path: "contact",
				element: <ContactPage />,
			},
			{
				path: "shop",
				element: <ProductPage />,
			},
			{
				path: "shop/:id",
				element: <ProductDetailPage />,
			},
			{
				path: "about",
				element: <AboutPage />,
			},
			{
path:"checkout",
element:<CheckoutPage />
			},
			{
path:"cart",
element:<CartPage />
			},

			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);
const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
