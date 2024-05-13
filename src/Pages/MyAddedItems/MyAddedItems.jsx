import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Typewriter } from "react-simple-typewriter";
import myLogo from "../../assets/images/mylist.png"


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

console.log(item);


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
            style={{ fontSize: '24px' }} // Increase the text size
          />
        </div>
        
        
        <Helmet>
                        <link rel="shortcut icon" href={myLogo} type="image/x-icon" />
                        <title>TourismTrek || myList</title>
                    </Helmet>
        
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="hidden md:table-cell"></th>
                      <th className="text-xl font-semibold">Spot Photo</th>
                      <th className="text-xl font-semibold">Spot Names</th>
                      <th className="text-xl font-semibold">Average Cost</th>
                      <th className="text-xl font-semibold">Total Visitors Per Year</th>
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
                        <td className="text-lg font-semibold">{p.average}$</td>
                        <td className="text-lg font-semibold">{p.total}</td>
                        <td className="flex enter gap-2 items-center pt-9">
        
                          
                          <button
                            // onClick={() => handleDelete(p._id)}
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