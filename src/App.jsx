import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index:true,
        element: <HomePage/>
      },
      {
        path: "login",
        element: <LoginPage/>
      },
      {
        path: "signup",
        element: <SignupPage/>
      }
    ]
  },
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App