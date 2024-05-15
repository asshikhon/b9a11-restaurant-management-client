/* eslint-disable react/no-unescaped-entities */
import bgImg from "../../assets/images/bg.jpg";
import one from "../../assets/images/pasta.png";
import two from "../../assets/images/2c.png";
import three from "../../assets/images/3c.png";
import four from "../../assets/images/4c.png";


const WhatsPopular = () => {
    return (
        <div className="py-10 md:py-16 lg:py-24 " style={{ backgroundImage: `url(${bgImg})` }}>
   
            <div className="text-center mb-12 dark:text-black">
<h2 className="text-5xl font-bold mb-4">WHAT'S POPULAR</h2>
<p className="text-lg font-semibold">Clients Most Popular Choice</p>
            </div>

<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 container mx-auto px-4 md:px-0 ">

{/* card 1 */}
<div className="w-auto rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800" >
	<img src={one} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />

<div className="block mx-auto text-[#9a9a9a] w-1/2 mt-5 p-1 text-center rounded-lg bg-[#ebebeb]">
    <h5>PASTA, VEGETARIAN</h5>
</div>

	<div className="flex flex-col justify-between p-2 space-y-4" >
		<div className="space-y-2" >
			<h2 className="text-2xl block mx-auto w-[85%] font-semibold tracking-wide">Ravioli with Spinach and Ricotta cheese</h2>

            <div className="rating text-center block mx-auto">
  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
			<p className="dark:text-gray-800 text-center w-3/4 mx-auto block">With spinach, basil, garlic and ricotta cheese</p>
		</div>
        <button type="button" className="w-[60%] mx-auto block p-3 font-semibold tracking-wide rounded-full border-0 bg-orange-400  dark:text-gray-50">QUICK VIEW</button>

	</div>
</div>
{/* card 2 */}
<div className="w-auto h-[600px] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800" >
	<img src={two} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />

<div className="block mx-auto text-center text-[#9a9a9a] w-1/2 mt-5 p-1 pl-2 rounded-lg bg-[#ebebeb]">
    <h5>PIZZA, VEGETARIAN</h5>
</div>

	<div className="flex flex-col justify-between p-2 space-y-4" >
		<div className="space-y-2" >
			<h2 className="text-2xl block mx-auto w-[85%] font-semibold tracking-wide">Pizza Margherita</h2>

            <div className="rating text-center block mx-auto">
  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"/>
</div>
			<p className="dark:text-gray-800 text-center pb-14 w-3/4 mx-auto block">With basil, mozzarella, tomatoes</p>
		</div>
        <button type="button" className="w-[60%] p mx-auto block p-3 font-semibold tracking-wide rounded-full border-0 bg-orange-400  dark:text-gray-50">QUICK VIEW</button>

	</div>
</div>
{/* card 3 */}
<div className="w-auto rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800" >
	<img src={three} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />

<div className="block mx-auto text-center text-[#9a9a9a] w-1/2 mt-5 p-1 pl-2 rounded-lg bg-[#ebebeb]">
    <h5>MEAT</h5>
</div>

	<div className="flex flex-col justify-between p-2 space-y-4" >
		<div className="space-y-2" >
			<h2 className="text-2xl block mx-auto w-[85%] font-semibold tracking-wide">Three-Meat Special Lasagna</h2>

            <div className="rating text-center block mx-auto">
  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
			<p className="dark:text-gray-800 text-center w-3/4 mx-auto block">With special garlic cream sauce, ricotta cheese and tomatoes.</p>
		</div>
        <button type="button" className="w-[60%] mx-auto block p-3 font-semibold tracking-wide rounded-full border-0 bg-orange-400  dark:text-gray-50">QUICK VIEW</button>

	</div>
</div>
{/* card 4 */}
<div className="w-auto rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800" >
	<img src={four} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />

<div className="block mx-auto text-[#9a9a9a] w-1/2 mt-5 p-1 text-center rounded-lg bg-[#ebebeb]">
    <h5>FISH</h5>
</div>

	<div className="flex flex-col justify-between p-2 space-y-4" >
		<div className="space-y-2" >
			<h2 className="text-2xl block mx-auto w-[85%] font-semibold tracking-wide">California Roll with Black Sesame</h2>

            <div className="rating text-center block mx-auto">
  <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-4.5" className="mask mask-star-2 bg-orange-400" />
</div>
			<p className="dark:text-gray-800 text-center w-3/4 mx-auto block">With cream cheese, salmon and black sesame</p>
		</div>
        <button type="button" className="w-[60%] mx-auto block p-3 font-semibold tracking-wide rounded-full border-0 bg-orange-400  dark:text-gray-50">QUICK VIEW</button>

	</div>
</div>


</div>

        </div>
    );
};

export default WhatsPopular;