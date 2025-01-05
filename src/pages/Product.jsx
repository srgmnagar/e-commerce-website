// import React, { useState } from 'react'
// import { use } from 'react';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom'
// import axios from 'axios';
// import Navbar from '../Components/Navbar';
// import Star from '../Images/star.png'
// import CartButton from '../Components/CartButton';


// const Product = () => {
//   const { productId } = useParams();
//   const [data, setData] = useState([]);
//   useEffect(() => {

//     axios.get('https://dummyjson.com/products?limit=50')
//       .then((response) => {
//         setData(response.data.products);
//       })
//       .catch((err) => {
//         console.log("error fetching: ", err);
//       }
//       )
//   }, []);
//   const [productData, setproductData] = useState(false)
//   const fetchProductData = async () => {
//     data.map((item) => {
//       if (item.id == productId) {
//         setproductData(item);
//         console.log((item));

//         return null
//       }
//     })
//   }

//   useEffect(() => {
//     fetchProductData()
//   }, [data, productId])

//   return (
//     <div className="bg-gradient-to-b from-[#ffc7a7] to-[#ffda9e] min-h-screen relative pb-5">
//       <Navbar />
//       <main className='px-16 py-10 sm:flex-row flex flex-col m-auto justify-center gap-16'>
//       <img className="prod bg-[#d94f30e1] p-8  sm:w-1/3 hover:scale-105 transition-all delay-50 duration-200 linear" src={productData.thumbnail} alt={productData.title} />
//     <div className='flex flex-col gap-6 sm:w-[60%]'>
//         <div className='text-[#fb794eec]  font-semibold text-lg'>{productData.category}</div>
//         <div className='text-[#9d0303] lg:text-4xl text-3xl font-extrabold font-serif flex justify justify-between'>
//           <div className=''>{productData.title}</div>
//           <div >{productData.price}$</div>
//         </div>
//         <div className='text-[#ff3939]  font-medium text-sm'>{productData.description}</div>
//         <div className='text-[#9d0303] text-lg font-semibold items-center flex gap-2'>
//           <div className=''>{productData.rating}</div>
//           <img className='w-7 h-7' src={Star} alt="" />
//         </div>
//         <CartButton/>
//     </div>
//       </main>

//     </div>
//   )
// }


// export default Product

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Star from '../Images/star.png';
import CartButton from '../Components/CartButton';

const Product = () => {
  const { productId } = useParams();
  const [data, setData] = useState([]);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products?limit=50')
      .then((response) => {
        setData(response.data.products);
      })
      .catch((err) => {
        console.log('error fetching: ', err);
      });
  }, []);

  useEffect(() => {
    const product = data.find((item) => item.id == productId);
    if (product) setProductData(product);
  }, [data, productId]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-b from-[#ffc7a7] to-[#ffda9e] min-h-screen relative pb-5">
      <Navbar />
      <main className="px-24 py-10 lg:flex-row flex flex-col m-auto justify-center gap-20 items-center">

        <div >
          <img
            className="prod bg-[#d94f30e1] p-8 sm:w-[32vw] hover:scale-105 transition-all delay-50 duration-200 linear"
            src={productData.thumbnail}
            alt={productData.title}
          />
        </div>
        {/* Product Details */}
        <div className="flex flex-col gap-4 lg:w-[60%] sm:w-[85%] w-[93%]">
          {/* Category */}
          <div className="text-[#fb794eec] font-semibold text-lg">{productData.category}</div>
          {/* Title & Price */}
          <div className="text-[#9d0303] lg:text-4xl text-3xl font-extrabold font-serif flex justify-between">
            <div>{productData.title}</div>
            <div>{productData.price}$</div>
          </div>
          {/* Description */}
          <div className="text-[#ff3939] font-medium text-sm">{productData.description}</div>
          {/* Rating */}
          <div className="text-[#9d0303] text-lg font-semibold items-center flex justify-between">
            <div className='flex gap-1'>
              <div>{productData.rating}</div>
              <img className="w-7 h-7" src={Star} alt="Star Rating" />
            </div>
            <p className='text-[#9d0303]'>Brand: {productData.brand}</p>
          </div>

          <div className="text-[#9d0303]">
            <p><strong>Weight:</strong> {productData.weight}g</p>
            <p><strong>Dimensions:</strong> {productData.dimensions?.width} x {productData.dimensions?.height} x {productData.dimensions?.depth} cm</p>
          </div>

          <div className="text-[#9d0303] font-semibold">
            <p>- {productData.warrantyInformation}</p>
            <p>- {productData.shippingInformation}</p>
            <p>- {productData.returnPolicy}</p>
          </div>
          {/* Reviews */}
          <div className="text-[#9d0303] flex flex-col gap-3">
            <p className="font-medium text-2xl text-[#ff7878]">What Are The Customers Saying About This Product</p>
            <div className="flex sm:flex-row gap-5 flex-col">
              {productData.reviews?.map((review) => (
                <div className='flex flex-col bg-white py-5 px-5 rounded-2xl items-center hover:scale-105 transition-all'>
                  <p className='font-semibold'>{review.reviewerName}</p>
                  <p className='text-xs text-gray-400'>{review.reviewerEmail}</p>
                  <div className='flex gap-1 items-center'>
                    <div className='font-bold' >{productData.rating}</div>
                    <img className="w-7 h-7" src={Star} alt="Star Rating" />
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Add to Cart Button */}
          <CartButton />
        </div>
      </main>
    </div>
  );
};

export default Product;
