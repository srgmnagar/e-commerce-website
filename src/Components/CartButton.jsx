// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Cart from '../Images/cart.png';
// import AuthContext from './Authprovider';

// const CartButton = ({ productId, productQuantity = 1 }) => {
//     const { user, addToCart } = useContext(AuthContext);
//     const navigate = useNavigate();

//     // const handleAddToCart = async () => {
//     //     if (!user) {
//     //         alert('Please log in to add items to the cart.');
//     //         navigate('/login');
//     //         return;
//     //     }

//     //     setLoading(true);
//     //     try {
//     //         await addToCart(productId, productQuantity);
//     //         alert('Product added to cart!');
//     //         
//     //     } catch (error) {
//     //         console.error('Error adding product to cart:', error);
//     //          
//     //     }
//     // };

//     return (
        // <div>
        //     <button
        //         // onClick={handleAddToCart}
        //         className="px-3 py-2 flex gap-2 hover:bg-orange-500 rounded-full bg-orange-400 hover:scale-105 transition-all duration-100 ease-in"
        //         disabled={loading}
        //     >
        //         <div className="text-black text-xs md:text-sm">
        //             {loading ? 'Adding...' : 'Add to Cart'}
        //         </div>
        //         <img className="md:w-5 w-3" src={Cart} alt="Cart Icon" />
        //     </button>
        // </div>
//     );
// };

// export default CartButton;

import React from 'react';
import Cart from '../Images/cart.png';

const CartButton = ({ product }) => {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (productIndex > -1) {
      // If product exists, update the quantity
      cart[productIndex].quantity += 1;
    } else {
      // Add new product with quantity 1
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.title} added to cart!`);
  };

  return (
    <div>
    <button
        onClick={handleAddToCart}
        className="px-3 py-2 flex gap-2 hover:bg-orange-500 rounded-full bg-orange-400 hover:scale-105 transition-all duration-100 ease-in"
        
    >
        <div className="text-black text-sm">
            Add to Cart
        </div>
        <img className="w-5" src={Cart} alt="Cart Icon" />
    </button>
</div>
  );
};

export default CartButton;
