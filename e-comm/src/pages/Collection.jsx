import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Productcards from '../Components/Productcards';

function Collection() {
  const [showfilter, setShowfilter]=useState(false)
  return (
    <div className="bg-gradient-to-b from-[#ffcfb4] to-amber-50 min-h-screen relative pb-5">
      <Navbar/>
      
      <div className='flex flex-col sm:flex-row gap-2 sm:gap-10 sm:px-20 px-10 py-7'>
        {/* {filterss} */}
        <div className='flex flex-col gap-3 min-w-72 px-5 py-3 cursor-pointer text-center font-medium bg-[#70001cc5] rounded-3xl text-amber-50'>
            <p onClick={()=>setShowfilter(!showfilter)} className='text-xl'>FILTERS</p>
            {/* category filters */}
            <div className={`transition-all border border-[#fef3c78b] rounded-xl p-5 px-7 ${showfilter ? '' : 'hidden'} sm:block`}>
                <p className='mb-2 text-left font-serif font-medium text-lg'>CATEGORIES</p>
                <div className='flex flex-col gap-2'>
                    <p className='flex gap-2 text-md text-[#ffe8b6]'>
                      <input className='w-3' type="checkbox" name="" id="" />Beauty
                    </p>
                    <p className='flex gap-2 text-md text-[#ffe8b6]'>
                      <input className='w-3' type="checkbox" name="" id="" />Fragnances
                    </p>
                    <p className='flex gap-2 text-md text-[#ffe8b6]'>
                      <input className='w-3' type="checkbox" name="" id="" />Groceries
                    </p>
                    <p className='flex gap-2 text-md text-[#ffe8b6]'>
                      <input className='w-3' type="checkbox" name="" id="" />home-decoration
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
        <div className='flex flex-col gap-5'>
          <div className='flex justify-between px-3 py-3'>
            <p className='text-2xl text-orange-950 font-medium'>ALL COLLECTIONS</p>

            {/* sort */}
            <select className='border border-gray-800 text-sm font-medium px-2 bg-transparent' >
              <option value="relevant">Sort by: Relevant</option>
              <option value="Price-Low to High">Sort by: Price-Low to High</option>
              <option value="Price-High to Low">Sort by: Price-High to Low</option>
            </select>
          </div>

          <Productcards/>
        </div>
      </div>
    </div>
  )
}

export default Collection
