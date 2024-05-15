import { useEffect, useState } from "react";
import section from "../../assets/images/bg.jpg";
import { Link } from "react-router-dom";

const TopFoods = () => {
  const [topFoods, setTopFoods] = useState([]);
  const [sort, setSort] = useState('purchaseCount_DESC'); // Default sorting

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/food?sort=${sort}`)
        .then((res) => res.json())
        .then((data) => setTopFoods(data))
        .catch((error) => console.error("Error fetching top foods:", error));
}, [sort]);



  return (
    <div className="mt-12 md:mt-16 lg:mt-24">

      <div className="text-center mb-12 dark:text-black">
        <h2 className="text-5xl font-bold mb-4">Top Foods</h2>
        <p className="text-lg font-semibold">
          Explore our Top Foods section—a curated selection of culinary delights
          representing the pinnacle of flavor and satisfaction.
        </p>
      </div>

      <div
        className="py-10 md:py-16 mt-12"
        style={{ backgroundImage: `url(${section})` }}
      >
        <div className="grid my-10 container mx-auto md:my-16 lg:my-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {topFoods.slice(0, 6).map((food) => (
            <div
              key={food._id}
              className="w-full mt-12 px-8 py-4 rounded-lg bg-gray-800"
            >
              <div className="flex justify-center -mt-20  md:justify-end">
                <img
                  className="object-cover w-44 h-44 border-2 border-orange-500 rounded-full "
                  alt="Testimonial avatar"
                  src={food?.photoURL}
                />
              </div>
              <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
                Name : {food?.name}
              </h2>

              <p className="mt-2 text-gray-600 dark:text-gray-200">
                Category : {food?.category}
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-200">
                Quantity : {food?.quantity}
              </p>
              <p className="mt-4 text-green-500 text-lg font-bold ">
                Price : {food?.price}$
              </p>

              <Link
                to={`/single/${food._id}`}
                className="flex justify-end mt-4"
              >
                <button
                  className=" btn text-lg font-medium text-white bg-orange-500 border-0 "
                  tabIndex="0"
                  role="link"
                >
                  Details
                </button>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
        <Link
          to="/foods"
          className="btn h-auto w-[20%] bg-orange-500 border-0 text-center text-white text-lg flex justify-center items-center"
        >
          See All Foods
        </Link>
      </div>
      </div>


    </div>
  );
};

export default TopFoods;
