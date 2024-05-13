import { useLoaderData } from "react-router-dom";

const FoodPurchase = () => {
    const food = useLoaderData();
    return (
        <div>
            <img src={food?.photoURL} alt="" />
        </div>
    );
};

export default FoodPurchase;