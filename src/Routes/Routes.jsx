import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErrorPage from "../Errorpage/Errorpage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Gallery from "../Pages/Gallery/Gallery";

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
element: <Register></Register>

      },
      {
path: "/login",
element: <Login></Login>

      },
      {
path: "/gallery",
element: <Gallery></Gallery>,
loader: () => fetch(`${import.meta.env.VITE_API_URL}/gallery`)
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

export default router;
