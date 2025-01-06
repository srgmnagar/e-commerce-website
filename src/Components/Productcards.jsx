import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import CartButton from "./CartButton";

function Productcards() {
    const [product, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=50')
            .then((response) => {
                console.log(response.data.products);

                setProducts(response.data.products)
            })
            .catch((err) => {
                console.log("error fetching: ", err);

            }
            )
    }, [])


    return (
        <div>
            <main className="md:max-w-[80vw] max-w-[90vw] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 m-auto">
                {product.map((product) => (
                    <div
                        key={product.id}
                        className="card py-12 px-8 flex flex-col gap-2 justify-between items-center bg-[#70001cca] text-amber-100 overflow-hidden"
                    >
                        <NavLink to={`/product/${product.id}`}>
                            <img
                                className="w-52 hover:scale-[1.17] transition-all delay-50 duration-200 linear"
                                src={product.thumbnail}
                                alt={product.title}
                            /></NavLink>
                        <NavLink to={`/product/${product.id}`} className="text-red-100 hover:underline hover:scale-105 text-xl font-bold text-center">
                            {product.title}
                        </NavLink>
                        <div className="flex gap-2 justify-center items-center">
                            <p className="text-md font-bold">${product.price}</p>
                            <p className="text-xs text-gray-300">({product.discountPercentage}% off)</p>
                        </div>
                        <CartButton product={product} />
                    </div>
                ))}
            </main>
        </div>
    )
}

export default Productcards
