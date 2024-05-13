import { Helmet } from "react-helmet-async";
import addLogo from "../../assets/images/add.png";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = useAuth();

  const handleAddFood = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const photoURL = form.photo.value;
    const price = form.price.value;
    const origin = form.origin.value;
    const description = form.description.value;
    const email = user ? user.email : "";
    const userName = user ? user.displayName : "";

    // console.log(name, country, photoURL, price, origin,location,travel, total, description ,email, userName);

    const newFood = {
      name,
      category,
      quantity,
      userName,
      photoURL,
      price,
      origin,
      email,
      description,
    };

    // send data to the server
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/food`,
        newFood,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Food item Added Successfully",
          icon: "success",
        });
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div className="px-4 md:px-0 mb-12 md:mb-16">
      <Helmet>
        <link rel="shortcut icon" href={addLogo} type="image/x-icon" />
        <title>RestaurantRealm || Add food item</title>
      </Helmet>
      <div className="container mx-auto mt-12">
        <div className="text-center  px-10 py-7 lg:px-28 lg:py-16 bg-[#eaeaea] lg:w-4/4 rounded-md mx-auto">
          <h2 className="text-5xl pb-7 text-black font-extrabold">
            Add a New Food Item
          </h2>

          <form
            onSubmit={handleAddFood}
            className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto"
          >
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base text-black font-semibold">
                    Food Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Food Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base text-black font-semibold">
                    Food Category
                  </span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter Your Food Category Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base text-black font-semibold">
                    Food Origin (Country)
                  </span>
                </label>
                <input
                  type="text"
                  name="origin"
                  placeholder="Enter Food Origin (Country Name)                    "
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base text-black font-semibold">
                    User Name
                  </span>
                </label>
                <input
                  value={user ? user.displayName : ""}
                  readOnly
                  type="text"
                  name="user"
                  placeholder=""
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base text-black font-semibold">
                    Food Image URL
                  </span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Enter Tourist spot Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base text-black font-semibold">
                    Quantity
                  </span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Enter Your Food Quantity"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base text-black font-semibold">
                    Price
                  </span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Enter Your Food Price"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base text-black font-semibold">
                    User Email
                  </span>
                </label>
                <input
                  value={user ? user.email : ""}
                  readOnly
                  type="email"
                  name="email"
                  placeholder=""
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base text-black font-semibold">
                    Short Description
                  </span>
                </label>
                <textarea
                  placeholder="Bio"
                  name="description"
                  className="textarea textarea-bordered row-span-2 w-full "
                ></textarea>
              </div>
              <input
                type="submit"
                value="Add Tourist Spot "
                className="btn w-full bg-orange-600 text-base text-white border-0 rounded-md border-[#331A15]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
