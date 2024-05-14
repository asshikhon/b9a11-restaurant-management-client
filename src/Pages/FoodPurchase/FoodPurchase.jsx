import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const FoodPurchase = () => {
  const food = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());
  const {
    _id,
    photoURL,
    name,
    category,
    price,
    origin,
    description,
    email,
    userName,
    quantity,
  } = food || {};

  const handlePurchase = async (e) => {
    e.preventDefault();
    const form = e.target;
    const price = parseFloat(form.price.value);

    const buyingDate = currentDate;

    const buyer_email = user?.email;
    const buyer_name = user?.displayName;
    const purchaseCount = parseInt(0);
    const buyer = {
      buyer_email,
      buyer_name,
    };

    const purchaseData = {
      foodId: _id,
      price,
      buyingDate,
      name,
      category,
      email,
      buyer,
      origin,
      photoURL,
      userName,
      description,
      quantity,
      purchaseCount,
    };
    // send data to the server
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/purchase`,
        purchaseData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.insertedId) {
       toast.success('Purchase successfully');
       navigate('/myOrder')
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
      {/* Purchase Form */}
      <section className="p-6 w-full bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
        <h2 className="text-lg font-semibold text-green-500 capitalize ">
          Purchase Page
        </h2>

        <form onSubmit={handlePurchase}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="price">
                Food Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                defaultValue={name}
                disabled
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="price">
                Price
              </label>
              <input
                id="price"
                type="number"
                name="price"
                defaultValue={price}
                required
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="price">
                Quantity
              </label>
              <input
                id="quantity"
                type="number"
                name="quantity"
                defaultValue={quantity}
                disabled
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Buying Date</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md"
                selected={currentDate}
                onChange={(date) => setCurrentDate(date)}
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Buyer Name
              </label>
              <input
                id="name"
                type="text"
                name="email"
                disabled
                defaultValue={user?.displayName}
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Buyer Email
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                disabled
                defaultValue={user?.email}
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-500 border-0 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Purchase Now
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default FoodPurchase;
