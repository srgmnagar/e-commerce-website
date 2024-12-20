import React from 'react'

import Cart from '../Images/cart.png';

const CartButton = () => {
    return (
        <div>
            <button className="px-3 py-2 flex gap-2 hover:bg-orange-100 rounded-full bg-orange-200 hover:scale-105 transition-all duration-100 ease-in">
                <div className="text-black text-xs md:text-sm">Add to Cart</div>
                <img className="md:w-5 w-3" src={Cart} alt="Cart Icon" />
            </button>
        </div>
    )
}

export default CartButton
