import title from "../../assets/images/title1.jpg";
import section from "../../assets/images/section.jpg";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Gallery = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    // Fetch galleries data when component mounts
    fetchGalleries();
  }, []);

  const fetchGalleries = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/gallery`);
      const data = await response.json();
      setGalleries(data);
    } catch (error) {
      console.error("Error fetching galleries:", error);
    }
  };

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const handleAddGallery = async (e) => {
    e.preventDefault();
    const form = e.target;
    const photoURL = form.photo.value;
    const userName = user ? user.displayName : "";
    const description = form.description.value;

    const newGallery = {
      userName,
      photoURL,
      description,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/gallery`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGallery),
      });
      const data = await response.json();
      if (data.insertedId) {
        toast.success("Gallery added successfully");
        fetchGalleries(); // Fetch galleries again to update the list
      }
      navigate("/gallery");
      setIsOpen(false);
    } catch (error) {
      console.error("Error adding gallery:", error);
    }
  };

  return (
    <div>
      <div
        className="w-full h-40 text-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${title})` }}
      >
        <h2 className="text-4xl text-white font-bold">Gallery </h2>
        <p className="text-lg font-semibold text-white mt-5">
          Explore Our Vibrant Restaurant Gallery
        </p>
      </div>

      <div className="text-center mt-12">
        <>
          <Button
            onClick={open}
            className="rounded-md bg-orange-500 py-2 border-0 px-4 font-semibold text-lg text-white focus:outline-none hover:bg-black/30 focus:outline-white"
          >
            Add Gallery
          </Button>

          <Transition appear show={isOpen}>
            <Dialog
              as="div"
              className="relative z-10 focus:outline-none"
              onClose={close}
              __demoMode
            >
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                  <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 transform-[scale(95%)]"
                    enterTo="opacity-100 transform-[scale(100%)]"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 transform-[scale(100%)]"
                    leaveTo="opacity-0 transform-[scale(95%)]"
                  >
                    <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                      <DialogTitle
                        as="h3"
                        className="text-2xl font-bold text-center text-orange-500"
                      >
                        Add Gallery
                      </DialogTitle>
                      <form onSubmit={handleAddGallery} className="">
                        <div>
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
                              name="name"
                              placeholder="User Name"
                              className="input input-bordered"
                              required
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-base text-black font-semibold">
                                Image URL
                              </span>
                            </label>
                            <input
                              type="url"
                              name="photo"
                              placeholder="Photo URL"
                              className="input input-bordered"
                              required
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-base text-black font-semibold">
                                Feedback
                              </span>
                            </label>
                            <textarea
                              placeholder="Feedback"
                              name="description"
                              className="textarea textarea-bordered row-span-2 w-full"
                              required
                            ></textarea>
                          </div>
                          <input
                            type="submit"
                            value="Add Gallery"
                            className="btn w-full mt-5 bg-orange-600 text-base text-white border-0 rounded-md border-[#331A15]"
                          />
                        </div>
                      </form>
                      <div className="mt-4">
                        <Button
                          className="btn text-white bg-red-500 border-0 text-lg px-8 btn-sm block mx-auto"
                          onClick={close}
                        >
                          Close
                        </Button>
                      </div>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      </div>

      <div
        className="py-10 md:py-16 lg:py-24 mt-12"
        style={{ backgroundImage: `url(${section})` }}
      >
        <div className="grid my-10 container mx-auto md:my-16 lg:my-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
          {galleries.map((gallery) => (
            <div
  key={gallery._id}
  className="relative group w-auto h-auto rounded-badge overflow-hidden"
>
  <img
    className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105"
    src={gallery.photoURL}

    alt=""
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-black bg-opacity-70 hover:opacity-100 transition-opacity duration-300">
    <p className="text-white text-lg font-semibold">User Name : {gallery.userName}</p>
    <p className="text-white text-sm">Feedback : {gallery.description}</p>
  </div>
</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
