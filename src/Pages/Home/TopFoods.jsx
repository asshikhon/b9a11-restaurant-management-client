import { useEffect, useState } from "react";

const TopFoods = () => {
    const [topFoods, setTopFoods] = useState();

    useEffect(() => {
fetch(`${import.meta.env.VITE_API_URL}/food`)
.then(res => res.json())
.then(data => setTopFoods(data))

    }, [])
    console.log(topFoods);

    return (
        <div className="my-12 md:my-16 lg:my-24">


                       <div className="text-center mb-12 dark:text-black">
<h2 className="text-5xl font-bold mb-4">Top Foods</h2>
<p className="text-lg font-semibold">Explore our Top Foods section—a curated selection of culinary delights representing the pinnacle of flavor and satisfaction.</p>
            </div>



        </div>
    );
};

export default TopFoods;