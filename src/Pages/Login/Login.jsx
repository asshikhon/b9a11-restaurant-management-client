import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import logoLogin from "../../../src/assets/images/login.png";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/login1.jpg";
import axios from "axios";

const Login = () => {
  const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  //   const handleGoogleLogin = () => {
  //     googleLogin()
  //       .then(() => {
  //         Swal.fire({
  //           position: window.innerWidth <= 768 ? "top" : "top",
  //           width: "auto",
  //           padding: "1rem",
  //           showCloseButton: false,
  //           showCancelButton: false,
  //           text: "Login Successfully",
  //           icon: "success",
  //           timer: 3000,
  //         });
  //         // navigate
  //         navigate(location?.state ? location.state : "/");
  //       })
  //       .catch((error) => {
  //         toast.error(error.message);
  //       });
  //   };

  const handleGoogleLogin = async () => {
    try {
      // 1. google sign in from firebase
      const result = await googleLogin()
      console.log(result.user)

      //2. get token from server using email
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      )
      console.log(data)
      toast.success('Login Successful')
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }

  const handleGithubLogin = async () => {
    try {
      const result = await githubLogin();
      console.log(result.user)

      //2. get token from server using email
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      )
      console.log(data)
      toast.success("Login Successfully");
      // navigate
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signIn(email, password);
      console.log(result.user)

      //2. get token from server using email
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      )
      console.log(data)
      // navigate
      navigate(location?.state ? location.state : "/");
      toast.success("Login Successfully");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${logo})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        width: "99vw",
        minHeight: "99vh",
      }}
      className="min-h-screen px-4 bg-gray-600 rounded-xl flex flex-col items-center justify-center py-12 mt-6 md:mt-0 sm:px-6 lg:px-8 mb-24 md:mb-0"
    >
      <Helmet>
        <link rel="shortcut icon" href={logoLogin} type="image/x-icon" />
        <title>RestaurantRealm || Login</title>
      </Helmet>

      <div className="w-full max-w-md p-8 space-y-3 rounded-xl  text-gray-100">
        <h1 className="text-4xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium  "
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              autoComplete="email"
              name="email"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>

          <div className="mt-4 relative">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="loggingPassword"
              >
                Password
              </label>
            </div>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            <span
              className="absolute bottom-[10px] right-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <IoIosEyeOff className="text-2xl text-black" />
              ) : (
                <IoIosEye className="text-2xl text-black"></IoIosEye>
              )}{" "}
            </span>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform text-lg bg-orange-600 border-0 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Login
            </button>
          </div>
        </form>

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-white"></div>
          <p className="px-3 text-sm ">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 bg-white"></div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleLogin}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <FaGoogle className="text-2xl" />
          </button>

          <button
            onClick={handleGithubLogin}
            aria-label="Log in with GitHub"
            className="p-3 rounded-sm"
          >
            <FaGithub className="text-2xl" />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6">
          Do not have an account?
          <Link
            to="/register"
            rel="noopener noreferrer"
            href="#"
            className="underline pl-1 text-orange-500"
          >
            Register now
          </Link>
        </p>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Login;
