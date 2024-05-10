import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
{
path: '/',
element: <Home></Home>,
},
{
path: "/contact",
element: <ContactUs></ContactUs>
},
      ]
    },
  ]);

  export default router;
