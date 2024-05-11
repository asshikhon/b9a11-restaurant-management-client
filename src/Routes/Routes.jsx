import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErrorPage from "../Errorpage/Errorpage";
import Register from "../Pages/Register/Register";

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
//       {
// path: "/login",
// element: 

//       },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

export default router;
