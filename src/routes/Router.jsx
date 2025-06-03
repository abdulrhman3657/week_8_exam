import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProductDetails from "../components/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ProductDetails checkout
    children: [
        { path: "/", element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "productdetails/:id", element: <ProductDetails /> },
        { path: "cart", element: <Cart /> },
        { path: "checkout", element: <Checkout /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
