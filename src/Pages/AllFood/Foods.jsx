import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import section from "../../assets/images/bg.jpg"
import logoAll from "../../assets/images/all.png"
import { Helmet } from 'react-helmet-async';
import title2 from "../../assets/images/title1.jpg"

const Foods = () => {
    const [itemsPerPage, setItemsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0)
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')
    const [foods, setFoods] = useState([])
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios(
          `${
            import.meta.env.VITE_API_URL
          }/all-foods?page=${currentPage}&size=${itemsPerPage}&search=${search}`
        )
        setFoods(data)
      }
      getData()
    }, [currentPage, itemsPerPage, search])
    useEffect(() => {
      const getCount = async () => {
        const { data } = await axios(
          `${
            import.meta.env.VITE_API_URL}/foods-count?search=${search}`
        )
  
        setCount(data.count)
      }
      getCount()
    }, [search])
    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)
  
    //  handle pagination button
    const handlePaginationButton = value => {
      // console.log(value)
      setCurrentPage(value)
    }
    const handleSearch = e => {
      e.preventDefault()
  
      setSearch(searchText)
    }

    // console.log(foods);
    return (
        <div className=' mx-auto min-h-[calc(100vh-373px)] flex flex-col justify-between'>

<Helmet>
        <link rel="icon" type="image/svg+xml" href={logoAll} />
        <title>RestaurantRealm || All Food</title>
      </Helmet>

      <div
        className="w-full h-40 mb-12 text-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${title2})` }}
      >
        <h2 className="text-4xl text-white font-bold">All Foods</h2>

      </div>

        <div>
          <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
            
            <form onSubmit={handleSearch}>
              <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                <input
                  className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                  type='text'
                  onChange={e => setSearchText(e.target.value)}
                  value={searchText}
                  name='search'
                  placeholder='Enter Food Name'
                  aria-label='Enter Job Title'
                />
  
                <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                  Search
                </button>
              </div>
            </form>
            
          </div>
          <div
        className="py-10 md:py-16 mt-12"
        style={{ backgroundImage: `url(${section})` }}
      >
        <div className="grid my-10 container mx-auto md:my-16 lg:my-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {foods.map((food) => (
            <div key={food._id} className="w-full mt-12 px-8 py-4 rounded-lg bg-gray-800">
            <div className="flex justify-center -mt-20  md:justify-end">
                <img className="object-cover w-44 h-44 border-2 border-orange-500 rounded-full " alt="Testimonial avatar" src={food?.photoURL} />
            </div>   
            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Name : {food?.name}</h2>
        
            <p className="mt-2 text-gray-600 dark:text-gray-200">Category : {food?.category}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-200">Quantity : {food?.quantity}</p>
            <p className="mt-4 text-green-500 text-lg font-bold ">Price : {food?.price}$</p>
        
            <Link to={`/single/${food._id}`} className="flex justify-end mt-4">
                <button  className=" btn text-lg font-medium text-white bg-orange-500 border-0 " tabIndex="0" role="link">Details</button>
            </Link>
        </div>
          ))}
        </div>
      </div>
        </div>
  
        {/* Pagination Section */}
        <div className='flex justify-center my-12'>
          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => handlePaginationButton(currentPage - 1)}
            className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-orange-500  hover:text-white'
          >
            <div className='flex items-center -mx-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 mx-1 rtl:-scale-x-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M7 16l-4-4m0 0l4-4m-4 4h18'
                />
              </svg>
  
              <span className='mx-1'>previous</span>
            </div>
          </button>
          {/* Numbers */}
          {pages.map(btnNum => (
            <button
              onClick={() => handlePaginationButton(btnNum)}
              key={btnNum}
              className={`hidden ${
                currentPage === btnNum ? 'bg-orange-500 text-white' : ''
              } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-orange-500  hover:text-white`}
            >
              {btnNum}
            </button>
          ))}
          {/* Next Button */}
<div>

          <button
            disabled={currentPage === numberOfPages}
            onClick={() => handlePaginationButton(currentPage + 1)}
            className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-orange-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
          >
            <div className='flex items-center -mx-1'>
              <span className='mx-1'>Next</span>
  
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 mx-1 rtl:-scale-x-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </div>
          </button>

</div>
        </div>
      </div>
    );
};

export default Foods;