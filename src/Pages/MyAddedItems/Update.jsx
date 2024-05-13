import { Helmet } from "react-helmet-async";
import updateLogo from "../../assets/images/update.png";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const Update = () => {
  const { user } = useAuth();
  const loadedUser = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
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

    const updateUser = {
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

    axios
      .put(
        `${import.meta.env.VITE_API_URL}/food/${loadedUser._id}`,
        updateUser,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = response.data;

        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successful!",
            text: "Updated successfully",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating:", error);
        toast.error("Error updating:", error?.message);
      });
    navigate("/myItem");
  };

  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" href={updateLogo} type="image/x-icon" />
        <title>RestaurantRealm || Update{loadedUser._id}</title>
      </Helmet>

      {/* update form */}
      <div className="container mx-auto mt-12">
        <div className="text-center  px-10 py-7 lg:px-28 lg:py-16 bg-[#eaeaea] lg:w-4/4 rounded-md mx-auto">
          <h2 className="text-5xl pb-7 text-black font-extrabold">
            Update Food Data
          </h2>

          <form
            onSubmit={handleUpdate}
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
                  defaultValue={loadedUser.name}
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
                  defaultValue={loadedUser.category}
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
                  defaultValue={loadedUser.origin}
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
                  defaultValue={loadedUser.photoURL}
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
                  defaultValue={loadedUser.quantity}
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
                  defaultValue={loadedUser.price}
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
                  defaultValue={loadedUser.description}
                  className="textarea textarea-bordered row-span-2 w-full "
                ></textarea>
              </div>
              <input
                type="submit"
                value="Update"
                className="btn w-full bg-orange-600 text-base text-white border-0 rounded-md border-[#331A15]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
