import React, { useState } from 'react'
import { use } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../Components/Navbar';

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
      <main className='px-16 py-10 sm:flex-row flex flex-col gap-10 m-auto'>
      <img className="prod mx-16 bg-[#fe8258] p-8  sm:w-1/3 hover:scale-105 transition-all delay-50 duration-200 linear" src={productData.thumbnail} alt={productData.title} />
    <div className='flex flex-col gap-5'>
        <div>{productData.category}</div>
    </div>
      </main>

    </div>
  )
}


export default Product

