import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AllFood = () => {
const foods = useLoaderData();
const {loading} = useAuth();
console.log(foods);

if (loading) {
    return (
        <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-gray-900"></div>
        </div>


    );
}

    return (
        <div>
            
        </div>
    );
};

export default AllFood;