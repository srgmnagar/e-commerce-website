import React, { useState } from 'react'
import { use } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Star from '../Images/star.png'
import CartButton from '../Components/CartButton';


const Product = () => {
  const { productId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {

    axios.get('https://dummyjson.com/products?limit=50')
      .then((response) => {
        setData(response.data.products);
      })
      .catch((err) => {
        console.log("error fetching: ", err);
      }
      )
  }, []);
  const [productData, setproductData] = useState(false)
  const fetchProductData = async () => {
    data.map((item) => {
      if (item.id == productId) {
        setproductData(item);
        console.log((item));

        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [data, productId])

  return (
    <div className="bg-gradient-to-b from-[#ffc7a7] to-[#ffda9e] min-h-screen relative pb-5">
      <Navbar />
      <main className='px-16 py-10 sm:flex-row flex flex-col m-auto justify-center gap-16'>
      <img className="prod bg-[#ff9876] p-8  sm:w-1/3 hover:scale-105 transition-all delay-50 duration-200 linear" src={productData.thumbnail} alt={productData.title} />
    <div className='flex flex-col gap-5 sm:w-[60%]'>
        <div className='text-[#fd8963]  font-semibold text-lg'>{productData.category}</div>
        <div className='text-[#9d0303] lg:text-4xl text-3xl font-extrabold font-serif flex justify justify-between'>
          <div className=''>{productData.title}</div>
          <div >{productData.price}$</div>
        </div>
        <div className='text-[#ff3939]  font-medium text-sm'>{productData.description}</div>
        <div className='text-[#9d0303] text-lg font-semibold items-center flex gap-2'>
          <div className=''>{productData.rating}</div>
          <img className='w-7 h-7' src={Star} alt="" />
        </div>
        <CartButton/>
    </div>
      </main>

    </div>
  )
}


export default Product

