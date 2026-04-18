import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CheckoutPage from "./pages/CheckOutPage";
import WishlistPage from "./pages/WishlistPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import Loading from "./components/Loading";

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
				path: "about-us",
				element: <AboutPage />,
			},
			{
				path: "checkout",
				element: <CheckoutPage />,
			},
			{
				path: "wishlist",
				element: <WishlistPage />,
			},
			{
				path: "cart",
				element: <CartPage />,
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
