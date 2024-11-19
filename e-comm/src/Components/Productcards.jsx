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
            <main className="max-w-[80vw]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 m-auto">
                {
                product.map((product) => (
                    <div className="card py-12 px-15 flex flex-col gap-3 justify-between items-center border-4 border-red-900 bg-red-800 text-amber-100 hover:scale-105 hover:bg-red-900 transition-all delay-100 duration-150 ease-in">
                        <img className="w-52" src={product.thumbnail} alt={product.title} />
                        <h2 className="text-red-50 text-xl font-bold ">{product.title} </h2>
                        <div className="flex gap-2">
                            <p className="">${product.price}</p>
                            <p className="text-xs text-gray-400">({product.discountPercentage}% off)</p>
                            <button className='p-3 hover:bg-orange-100 rounded-full bg-red-300 hover:scale-105 transition-all duration-100 ease-in'>
                                <img className="w-7" src={Cart} alt="Cart Icon" />
                            </button>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    )
}

export default Productcards
