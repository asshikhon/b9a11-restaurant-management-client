import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Typewriter } from "react-simple-typewriter";
import myLogo from "../../assets/images/mylist.png"
import Swal from "sweetalert2";
import axios from 'axios';



const MyAddedItems = () => {
const {user, loading} = useAuth() || {};
const [item, setItem] = useState([]);

useEffect( () => {
fetch(`${import.meta.env.VITE_API_URL}/myItem/${user?.email}`)
.then((res) => res.json())
.then((data) => {
    setItem(data)
    console.log(data);
})
}, [user?.email]);


const handleDelete = (_id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(
        `${import.meta.env.VITE_API_URL}/food/${_id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          const data = response.data;
          
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your tourist spot has been deleted.",
              icon: "success",
            });
            const remaining = item.filter((user) => user._id !== _id);
            setItem(remaining);
          }
        })
        .catch((error) => {
          console.error('Error deleting:', error);
        });
    }
  });
};



if (loading) {
    return (
<div className="flex justify-center items-center h-screen">
<div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-gray-800"></div>
</div>
    );
}


    return (
        <div className="container mx-auto px-3 md:px-0 mt-10 md:mt-16 lg:mt-20">

        <div className="flex justify-center items-center text-green-600 mb-12 text-[42px] ">
          <Typewriter 
            words={['My','Added All', 'Food Items']}
            loop={true}
            cursor
            cursorStyle='. . .'
            typeSpeed={170}
            deleteSpeed={80}
            delaySpeed={1200}
            style={{ fontSize: '24px' }} 
          />
        </div>
        
        
        <Helmet>
                        <link rel="shortcut icon" href={myLogo} type="image/x-icon" />
                        <title>RestaurantRealm || MyAddedItems</title>
                    </Helmet>
        
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="hidden md:table-cell"></th>
                      <th className="text-xl font-semibold">Food Photo</th>
                      <th className="text-xl font-semibold">Food Name</th>
                      <th className="text-xl font-semibold">Price</th>
                      <th className="text-xl font-semibold">Food Origin</th>
                      <th className="text-xl font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item?.map((p, idx) => (
                      <tr key={idx}>
                        <td className="hidden md:table-cell">{idx + 1}</td>
                        <td>
                          <img
                            className="h-[100px] w-[150px] rounded-lg"
                            src={p.photoURL}
                            alt=""
                          />
                        </td>
                        <td className="text-lg font-semibold">{p.name}</td>
                        <td className="text-lg font-semibold">{p.price}$</td>
                        <td className="text-lg font-semibold">{p.origin}</td>
                        <td className="flex enter gap-2 items-center pt-9">
        
                          
                          <button
                            onClick={() => handleDelete(p._id)}
                            className="btn bg-red-500 border-0 text-white font-semibold text-lg"
                          >
                            Delete
                          </button>
                          <Link to={`/update/${p._id}`} className="btn bg-green-600 border-0 text-white font-semibold text-lg">
                            Update
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
    );
};

export default MyAddedItems;