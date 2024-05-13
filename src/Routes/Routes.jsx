import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErrorPage from "../Errorpage/Errorpage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Gallery from "../Pages/Gallery/Gallery";
import AddFood from "../Pages/AddFood/AddFood";
import SingleFood from "../Pages/SingleFood/SingleFood";
import FoodPurchase from "../Pages/FoodPurchase/FoodPurchase";
import MyAddedItems from "../Pages/MyAddedItems/MyAddedItems";
import Foods from "../Pages/AllFood/Foods";
import Update from "../Pages/MyAddedItems/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/gallery`),
      },
      {
        path: "/addFood",
        element: <AddFood></AddFood>,
      },

      {
        path: "/foods",
        element: <Foods></Foods>,
      },
      {
        path: "/single/:id",
        element: <SingleFood></SingleFood>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`),
      },
      {
        path: "/purchase/:id",
        element: <FoodPurchase></FoodPurchase>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`),
      },
      {
        path: "/myItem",
        element: <MyAddedItems></MyAddedItems>,
        loader: () =>
          fetch(`${import.meta.env.VITE_API_URL}`),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_API_URL}/food/${params.id}`
          ),
      },

      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

export default router;
