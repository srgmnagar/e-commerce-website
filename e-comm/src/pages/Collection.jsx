import React, { useEffect, useState ,useContext} from 'react'
import Navbar from '../Components/Navbar'
import axios from "axios";
import Cart from '../Images/cart.png';
import Productcards from '../Components/Productcards';
import SearchBox from '../Components/SearchBox';
import { ShopContext } from '../context/ShopContext';
import { NavLink } from 'react-router-dom';
import CartButton from '../Components/CartButton';

function Collection() {
  const [showfilter, setShowfilter] = useState(false)
  const [category, setCategory] = useState([]);
  const [filterProduct, setFilterProduct] = useState([])
  const [product, setProducts] = useState([]);
  const [sortType, setSortType] = useState('relevant');
  const { search, showSearch } = useContext(ShopContext)

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=50')
      .then((response) => {

        setProducts(response.data.products)
        setFilterProduct(response.data.products)
      })
      .catch((err) => {
        console.log("error fetching: ", err);

      }
      )
  }, [])

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let filtered = [...product];
    if(search&&showSearch){
      filtered=filtered.filter(item=>item.title.toLowerCase().includes(search.toLowerCase()))
    }
    // Apply Category Filter
    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    // Apply Sorting
    switch (sortType) {
      case 'Price-Low to High':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'Price-High to Low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break; // No sorting applied
    }

    setFilterProduct(filtered);
}

useEffect(() => {
  applyFilter();
}, [category, sortType,search,showSearch]);

const sortproduct = () => {
  let fpcopy = [...filterProduct]; // Create a shallow copy of the array
  switch (sortType) {
    case 'Price-Low to High':
      fpcopy = fpcopy.sort((a, b) => a.price - b.price);
      break;
    case 'Price-High to Low':
      fpcopy = fpcopy.sort((a, b) => b.price - a.price);
      break;
    default:
      fpcopy = [...product]; // Reset to the original product list if no sort applied
      break;
  }
  setFilterProduct(fpcopy); // Update the state with the new sorted array
};


useEffect(() => {

  sortproduct();
}, [sortType]);

return (
  <div className="bg-gradient-to-b from-[#ffc7a7] to-[#ffdfb8] min-h-screen relative pb-5">
    <Navbar />
  
    <div className='flex flex-col sm:flex-row gap-2 sm:gap-10 sm:px-20 px-10 py-7'>
      {/* {filterss} */}
      <div className='flex flex-col gap-3 min-w-72 px-5 py-3 cursor-pointer text-center font-medium bg-[#70001cc5] rounded-3xl text-amber-50'>
        <p onClick={() => setShowfilter(!showfilter)} className='text-xl'>FILTERS</p>
        {/* category filters */}
        <div className={`transition-all border border-[#fef3c78b] rounded-xl p-5 px-7 ${showfilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-2 text-left font-serif font-medium text-lg'>CATEGORIES</p>
          <div className='flex flex-col gap-2'>
            <p className='flex gap-2 text-md text-[#ffe8b6]'>
              <input className='w-3' type="checkbox" name="" id="" value={'beauty'} onChange={toggleCategory} />Beauty
            </p>
            <p className='flex gap-2 text-md text-[#ffe8b6]'>
              <input className='w-3' type="checkbox" name="" id="" value={'fragrances'} onChange={toggleCategory} />Fragnances
            </p>
            <p className='flex gap-2 text-md text-[#ffe8b6]'>
              <input className='w-3' type="checkbox" name="" id="" value={'groceries'} onChange={toggleCategory} />Groceries
            </p>
            <p className='flex gap-2 text-md text-[#ffe8b6]'>
              <input className='w-3' type="checkbox" name="" id="" value={'home-decoration'} onChange={toggleCategory} />home-decoration
            </p>
            <p className='flex gap-2 text-md text-[#ffe8b6]'>
              <input className='w-3' type="checkbox" name="" id="" />Electronics
            </p>
            <p className='flex gap-2 text-md text-[#ffe8b6]'>
              <input className='w-3' type="checkbox" name="" id="" />kitchen-accessories
            </p>
            <p className='flex gap-2 text-md text-[#ffe8b6]'>
              <input className='w-3' type="checkbox" name="" id="" />Laptops
            </p>
            <p className='flex gap-2 text-md text-[#ffe8b6]'>
              <input className='w-3' type="checkbox" name="" id="" />Men's Shoes
            </p>
            <p className='flex gap-2 text-md text-[#ffe8b6]'>
              <input className='w-3' type="checkbox" name="" id="" />Men's Shirts
            </p>
            <p className='flex gap-2 text-md text-[#ffe8b6]'>
              <input className='w-3' type="checkbox" name="" id="" />Men's watches
            </p>
            <p className='flex gap-2 text-md text-[#ffe8b6]'>
              <input className='w-3' type="checkbox" name="" id="" />Mobile-accessories
            </p>
            <p className='flex gap-2 text-md text-[#ffe8b6]'>
              <input className='w-3' type="checkbox" name="" id="" />Motorcycles
            </p>
            <p className='flex gap-2 text-md text-[#ffe8b6]'>
              <input className='w-3' type="checkbox" name="" id="" />Skin-care
            </p>
            <p className='flex gap-2 text-md text-[#ffe8b6]'>
              <input className='w-3' type="checkbox" name="" id="" />Smartphones
            </p>

          </div>
        </div>
      </div>
      <div className='flex flex-col gap-5 '>
      <SearchBox/>
        <div className='flex justify-between px-3 py-3'>
          <p className='text-2xl text-orange-950 font-medium'>ALL COLLECTIONS</p>

          {/* sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-amber-950 text-sm font-medium px-2 bg-transparent text-amber-950' >
            <option value="relevant">Sort by: Relevant</option>
            <option value="Price-Low to High">Sort by: Price-Low to High</option>
            <option value="Price-High to Low">Sort by: Price-High to Low</option>
          </select>
        </div>

        <div>

          <main className="md:max-w-[80vw] max-w-[90vw] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 m-auto">
            {filterProduct.map(product => (
              <NavLink to={`/product/${product.id}`} key={product.id} className="card py-12 px-8 flex flex-col gap-2 justify-between items-center bg-[#70001cca] text-amber-100 overflow-hidden">
                <img className="w-52 hover:scale-[1.17] transition-all delay-50 duration-200 linear" src={product.thumbnail} alt={product.title} />
                <h2 className="text-red-100 text-xl font-bold text-center">{product.title}</h2>
                <div className="flex gap-2 justify-center items-center">
                  <p className="text-md font-bold">${product.price}</p>
                  <p className="text-xs text-gray-300">({product.discountPercentage}% off)</p>
                </div>
                <CartButton/>
              </NavLink>
            ))}
          </main>

        </div>
      </div>
    </div>
  </div>
)
}

export default Collection
