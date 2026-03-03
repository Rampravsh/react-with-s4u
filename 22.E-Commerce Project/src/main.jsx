import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Product from "./components/Product.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { fetchData, fetchProductById } from "./lib/api.js";
import ProductDetail from "./components/ProductDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: fetchData,
      },
      {
        path: "product",
        element: <Product />,
        loader: fetchData,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
        loader: fetchProductById,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
