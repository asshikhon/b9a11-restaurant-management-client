import { Link, useNavigate, useLocation } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import logo from "../../assets/images/register.jpg";
import logo1 from "../../assets/images/register.png";
import logo2 from "../../assets/images/main.svg";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaGithub } from "react-icons/fa";
import axios from "axios";

const Register = () => {
  const { createUser, googleLogin, githubLogin, updateUserProfile, setUser} = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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


  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = e.target
    const email = form.email.value
    const name = form.name.value
    const photo = form.photo.value
    const password = form.password.value

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must have one Lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must have one Uppercase letter");
      return;
    }

    try {
        const result = await createUser(email, password)
        console.log(result);
        await updateUserProfile(name, photo)
        setUser({ ...result?.user, photoURL: photo, displayName: name })
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
            navigate(location?.state ? location.state : "/login");
            toast.success('Register Successfully')
    } catch (err) {

toast.error(err?.message)

    }


    // createUser(email, password)
    //   .then((result) => {
    //     console.log(result.user);
    //     updateProfile(result.user, {
    //       displayName: `${name}`,
    //       photoURL: `${photo}`,
    //     })
    //       .then(() => {
    //         Swal.fire({
    //           position: window.innerWidth <= 768 ? "top" : "top",
    //           width: "auto",
    //           padding: "1rem",
    //           showCloseButton: false,
    //           showCancelButton: false,
    //           text: "Register Successfully",
    //           icon: "success",
    //           timer: 3000,
    //         });
    //         // navigate
    //         navigate(location?.state ? location.state : "/login");
    //       })
    //       .catch((error) => {
    //         console.error(error.message);
    //       });
    //     logOut();
    //   })
    //   .catch((error) => {
    //     toast.error(error.message);
    //   });
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
        <link rel="shortcut icon" href={logo1} type="image/x-icon" />
        <title>RestaurantRealm || Register</title>
      </Helmet>

      <div className="flex w-full md:w-[30%] mx-auto overflow-hidden bg-white rounded-lg shadow-lg ">
        <div className="w-full px-6 py-8 md:px-8 ">
          <div className="flex justify-center mx-auto ">
            <img className="w-auto md:h-12 rounded-xl h-8" src={logo2} alt="" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 ">
            Get Your Free Account Now.
          </p>

          {/* another  */}
          <div>
            <div
              onClick={handleGoogleLogin}
              className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
            >
              <div className="px-4 py-2">
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>

              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign in with Google
              </span>
            </div>
            <div
              onClick={handleGithubLogin}
              className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
            >
              <div className="px-4 py-2">
                <FaGithub className="text-2xl" />
              </div>

              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign in with Github
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between  mt-4">
            <span className="w-1/5 border-b  lg:w-1/4"></span>
            <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
              or Registration with email
            </div>
            x
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleRegister}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="name"
              >
                Username
              </label>
              <input
                id="name"
                autoComplete="name"
                name="name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                id="photo"
                autoComplete="photo"
                name="photo"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>

            <div className="mt-4 relative">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                autoComplete="current-password"
                type={showPassword ? "text" : "password"}
                name="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              />
              <span
                className="absolute bottom-[10px] right-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoIosEyeOff className="text-2xl" />
                ) : (
                  <IoIosEye className="text-2xl"></IoIosEye>
                )}{" "}
              </span>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                register now
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs text-gray-500 uppercase  hover:underline"
            >
              or login in
            </Link>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Register;
