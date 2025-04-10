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
      .get('https://dummyjson.com/products?limit=100')
      .then((response) => {
        setData(response.data.products);
      })
      .catch((err) => {
        console.log('error fetching: ', err);
      });
  }, []);

  useEffect(() => {
    const product = data.find((item) => item.id === Number(productId));
    console.log('Product ID from URL:', productId);
    console.log('Matched product:', product);
    if (product) setProductData(product);
  }, [data, productId]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-b from-[#ffc7a7] to-[#ffda9e] min-h-screen relative">
      <Navbar />
      <main className="bg-[#70001cc5] rounded-3xl mx-10 sm:mx-24 py-5 px-5 pr-7 lg:flex-row flex flex-col m-auto justify-center items-center">

        <div className="flex flex-col justify-between">
          <div className="text-[#ff612cec] font-semibold text-lg px-5">{productData.category}</div>
          <img
            className="sm:w-[30vw] hover:scale-105 transition-all delay-50 duration-200 linear"
            src={productData.thumbnail}
            alt={productData.title}
          />
        </div>

        <div className="flex flex-col gap-5 p-5 rounded-lg lg:w-[60%] sm:w-[85%] w-[93%]">
          
          <div className="text-[#ffe1e1] lg:text-4xl text-3xl font-extrabold font-serif flex justify-between">
            <div>{productData.title}</div>
            <div>{productData.price}$</div>
          </div>

          <div className="text-[#ff3939] font-medium text-sm">{productData.description}</div>

          <div className="text-[#9d0303] text-lg font-semibold items-center flex justify-between">
            <div className='flex gap-1 bg-green-500 px-1 py-1 rounded-xl text-sm items-center'>
              <div>{productData.rating}</div>
              <img className="w-5 h-5" src={Star} alt="Star Rating" />
            </div>
          </div>

          <div className="text-red-300 font-serif font-lg flex justify-between">
            <p>{productData.weight}g</p>
            <p>{productData.dimensions?.width} x {productData.dimensions?.height} x {productData.dimensions?.depth} cm</p>
          </div>

          <div className="text-red-300 font-serif font-lg flex justify-between">
            <p>- {productData.warrantyInformation}</p>
            <p>- {productData.shippingInformation}</p>
            <p>- {productData.returnPolicy}</p>
          </div>

          <div className="text-[#9d0303] flex flex-col gap-3">
            <p className="font-medium text-2xl text-[#ff8b8b]">What Are The Customers Saying About This Product</p>
            <div className="flex lg:flex-wrap gap-5 flex-col md:flex-row">
              {productData.reviews?.map((review, index) => (
                <div
                  key={index}
                  className="sm:w-56 flex flex-col bg-red-100 hover:bg-red-200 py-5 px-5 rounded-2xl items-center hover:scale-105 transition-all"
                >
                  <p className="font-semibold">{review.reviewerName}</p>
                  <p className="text-xs text-gray-400">{review.reviewerEmail}</p>
                  <div className="flex gap-1 items-center">
                    <div className="font-bold">{productData.rating}</div>
                    <img className="w-7 h-7" src={Star} alt="Star Rating" />
                  </div>
                  <p className="text-center">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          <CartButton product={productData} />
        </div>
      </main>
    </div>
  );
};

export default Product;
