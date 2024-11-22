import React, { useEffect, useState } from "react";
import axios from "axios";
import Cart from '../Images/cart.png';

function Productcards() {
        const [product, setProducts] = useState([]);

        useEffect(() => {
            axios.get('https://dummyjson.com/products')
                .then((response) => {
                    console.log(response.data.products);
                    
                    setProducts(response.data.products)})
                .catch((err) => {
                    console.log("error fetching: ", err);

                }
                )
        }, [])

    
    return (
        <div>
            <main className="md:max-w-[80vw] pt-4 max-w-[90vw] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 m-auto">
                {
                product.map((product) => (
                    <div className="card py-12 px-8 flex flex-col gap-2 justify-between items-center bg-rose-800 text-amber-100 ">
                        <img className="w-52 hover:scale-110 transition-all delay-50 duration-150 ease-in" src={product.thumbnail} alt={product.title} />
                        <h2 className="text-red-100 text-xl font-bold text-center">{product.title} </h2>
                        <div className="flex gap-2 justify-center items-center">
                            <p className="text-md font-bold">${product.price}</p>
                            <p className="text-xs text-gray-300">({product.discountPercentage}% off)</p>
                        </div>
                            <button className='px-3 py-2 flex gap-2 hover:bg-orange-100 rounded-full bg-orange-200 hover:scale-105 transition-all duration-100 ease-in'>
                                <div className="text-black text-sm">Add to Cart</div>
                                <img className="w-5" src={Cart} alt="Cart Icon" />
                            </button>
                    </div>
                ))}
            </main>
        </div>
    )
}

export default Productcards
