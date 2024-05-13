import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

import detailsLogo from "../../assets/images/details.png";

const SingleFood = () => {
  const { user, loading } = useAuth();
  const food = useLoaderData();
  const { _id, photoURL, name, category, price, origin, description } =
    food || {};

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col container mx-auto p-6 space-y-6 overflow-hidden rounded-lg lg:mt-6">
      <Helmet>
        <link rel="shortcut icon" href={detailsLogo} type="image/x-icon" />
        <title>RestaurantRealm || details{_id}</title>
      </Helmet>

      <div className="flex gap-8">
        <img
          src={photoURL}
          alt=""
          className="rounded-3xl hover:scale-105 hover:delay-130 w-[100vh] mb-4 max-h-[600px]"
        />

        <div>
          <i className="food-title lg:text-3xl text-[#23BE0A] items-center pb-4">
            Food Name : {name}
          </i>

          <div className="flex items-center justify-between text-lg lg:text-2xl font-semibold gap-4 my-6">
            <i>Food Category : {category}</i>
          </div>

          <div className="mt-3leading-10 ">
            <span className="text-xl font-semibold">
              Food Origin : {origin}
            </span>

            <div className="flex items-center justify-between text-xl font-semibold gap-8 mb-3 mt-4">
              <i> ● Made By : {user?.displayName}</i>
            </div>
            <h2 className="text-xl animate__animated animate__bounceIn my-5 font-semibold">
              Price :{" "}
              <span className="bg-orange-600 ml-5 text-white px-6 py-2 rounded-xl">
                {price}$
              </span>
            </h2>
          </div>

          <p className="text-base text-gray-600 font-medium mb-12">
            {description}
          </p>

          <Link
           to={`/purchase/${_id}`}
           >
            <button className="btn border-0 bg-orange-500 text-white text-lg font-semibold ">
              Purchase Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
