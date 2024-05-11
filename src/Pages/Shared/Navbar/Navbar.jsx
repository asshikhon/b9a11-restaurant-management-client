import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../providers/AuthProviders";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import logoHome from "../../../assets/images/main.svg";
import bgImg from "../../../assets/images/bg.jpg";
import useAuth from "../../../hooks/useAuth";


const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
const {user, logOut} = useAuth();
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem("theme");
    return localTheme ? localTheme : "light";
  });
  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

//   const handleLogOut = () => {
//     logOut();
//     Swal.fire({
//       position: window.innerWidth <= 768 ? "top" : "top",
//       width: "auto",
//       padding: "1rem",
//       showCloseButton: false,
//       showCancelButton: false,
//       text: "Logout Successfully",
//       icon: "success",
//       timer: 3000,
//     });
//   };

  const navLinks = (
    <>
      <li className="">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-base font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A] hover:bg-[#f5cc3a] hover:text-white"
              : "text-base z-[1] hover:bg-[#131313cc] hover:text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/allFood"
          className={({ isActive }) =>
            isActive
              ? "text-base font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white"
              : "text-base z-[1] hover:bg-[#131313cc] hover:text-white"
          }
        >
          All Foods
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? "text-base font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white"
              : "text-base z-[1] hover:bg-[#131313cc] hover:text-white"
          }
        >
          Gallery
        </NavLink>
      </li>
      {/* {user && (
        <>
          <li>
            <NavLink
              to="/addTourist"
              className={({ isActive }) =>
                isActive
                  ? "text-base font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white"
                  : "text-base z-[1] hover:bg-[#131313cc] hover:text-white"
              }
            >
              Add Tourists Spot
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myList"
              className={({ isActive }) =>
                isActive
                  ? "text-base font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white"
                  : "text-base z-[1] hover:bg-[#131313cc] hover:text-white"
              }
            >
              My List
            </NavLink>
          </li>
        </>
      )} */}
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-base font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white"
              : "text-base  z-[1] hover:bg-[#131313cc] hover:text-white"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-0 md:px-10" style={{backgroundImage: `url(${bgImg})`}}>

      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center">

            <img className="h-[80px] w-[70px] rounded-full" src={logoHome} alt="" />
          <p
            className="btn btn-ghost text-xl md:text-3xl lg:text-4xl"
            style={{
              background: "linear-gradient(to right, tomato, black, orange)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            RestaurantRealm
          </p>
        </Link>
      </div>

      <div className="navbar-end">
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
        <div className="dropdown dropdown-end pr-2">
          {user ? (
            <div className="flex items-center ">
              {/* <div
                className="mr-2"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-12 rounded-full">
                    <img alt="Photo Coming Soon.." src={user?.photoURL} />
                  </div>
                </div>
              </div> */}
              <div className="dropdown dropdown-end z-10">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li className="text-lg"><Link>My added food items</Link></li>
        <li><Link>Add a food item</Link></li>
        <li><Link>My ordered food items</Link></li>
      </ul>
    </div>
              <button
                // onClick={handleLogOut}
                className="btn bg-green-500 btn-sm md:btn-md lg:text-lg lg:px-6 text-bold text-white "
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-2">
              <Link to="/login">
                <button className="btn bg-green-500 btn-sm md:btn-md lg:text-lg md:px-4 lg:px-6 text-bold text-white ">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn bg-green-500 btn-sm md:btn-md lg:text-lg md:px-4 lg:px-6 text-bold text-white">
                  Register
                </button>
              </Link>
            </div>
          )}




        </div>
        <label className="swap swap-rotate">

  <input type="checkbox"             onChange={handleToggle}
           
            checked={theme === "dark"} className="theme-controller" value="synthwave" />
  

  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
      </div>
      <Tooltip id="my-tooltip" place="left" />
    </div>
  );
};

export default Navbar;
