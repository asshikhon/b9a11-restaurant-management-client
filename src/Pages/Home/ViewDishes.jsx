import section from "../../assets/images/section.jpg"
import one from "../../assets/images/1a.jpg"
import two from "../../assets/images/2a.jpg"
import three from "../../assets/images/3a.jpg"
import four from "../../assets/images/4a.jpg"
import five from "../../assets/images/5a.jpg"
import six from "../../assets/images/6a.jpg"
import seven from "../../assets/images/7a.jpg"
import eight from "../../assets/images/8a.jpg"
import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io"

const ViewDishes = () => {
    return (
        <div className="py-10 md:py-16 lg:py-24 " style={{ backgroundImage: `url(${section})` }}>
            
            <div className="text-center mb-12 md:mb-16 lg:mb-20 text-white">
<h2 className="text-5xl font-bold mb-4">VIEW THE DISHES</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 container mx-auto px-4 md:px-0 ">


<img className="w-auto h-[290px] rounded-badge" src={one} alt="" />
<img className="w-auto h-[290px] rounded-badge" src={two} alt="" />
<img className="w-auto h-[290px] rounded-badge" src={three} alt="" />
<img className="w-auto h-[290px] rounded-badge" src={four} alt="" />
<img className="w-[370px] h-[290px] rounded-badge" src={five} alt="" />
<img className="w-auto h-[290px] rounded-badge" src={six} alt="" />
<img className="w-auto h-[290px] rounded-badge" src={seven} alt="" />
<img className="w-auto h-[290px] rounded-badge" src={eight} alt="" />


</div>


<div className="flex justify-center items-center">
  <Link to="/gallery" className=" w-[20%] text-yellow-300 mt-8 md:mt-12 text-center font-semibold text-lg flex justify-center items-center gap-2 hover:text-orange-600 ">Visit Gallery <IoIosArrowForward className="mt-[6px]" /></Link> 
</div>


        </div>
    );
};

export default ViewDishes;