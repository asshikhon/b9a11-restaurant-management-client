import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import title2 from "../../assets/images/title1.jpg";
import logoAll from "../../assets/images/all.png";
import section from "../../assets/images/bg.jpg"

const AllFood = () => {
const foods = useLoaderData();
const {loading} = useAuth();


if (loading) {
    return (
        <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    );
}

    return (
        <div>

<Helmet>
        <link rel="icon" type="image/svg+xml" href={logoAll} />
        <title>RestaurantRealm || All Food</title>
      </Helmet>

      <div
        className="w-full h-40 text-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${title2})` }}
      >
        <h2 className="text-4xl text-white font-bold">All Foods</h2>

      </div>

{/* for search */}
<div className="join my-12 text-center flex justify-center ">
  <input className="input input-bordered join-item" placeholder="Search Now"/>
  <button className="btn join-item rounded-r-full">Search</button>
</div>

<div
        className="py-10 md:py-16 mt-12"
        style={{ backgroundImage: `url(${section})` }}
      >
        <div className="grid my-10 container mx-auto md:my-16 lg:my-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {foods.map((food) => (
            <div key={food._id} className="w-full mt-12 px-8 py-4 rounded-lg bg-gray-800">
            <div className="flex justify-center -mt-20  md:justify-end">
                <img className="object-cover w-44 h-44 border-2 border-orange-500 rounded-full " alt="Testimonial avatar" src={food?.photoURL} />
            </div>   
            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Name : {food?.name}</h2>
        
            <p className="mt-2 text-gray-600 dark:text-gray-200">Category : {food?.category}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-200">Quantity : {food?.quantity}</p>
            <p className="mt-4 text-green-500 text-lg font-bold ">Price : {food?.price}$</p>
        
            <div className="flex justify-end mt-4">
                <button  className=" btn text-lg font-medium text-white bg-orange-500 border-0 " tabIndex="0" role="link">Details</button>
            </div>
        </div>
          ))}
        </div>
      </div>

            
        </div>
    );
};

export default AllFood;