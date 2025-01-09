
import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../Components/Authprovider.jsx';
import Navbar from '../Components/Navbar';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../Components/CartProvider.jsx';

function Cart() {
  const { cartData, setCartData } = useContext(CartContext);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartData(cart);
  }, []);

  const handleUpdateCart = (productId, quantity) => {
    if (quantity < 1) return;

    const updatedCart = cartData.map((product) =>
      product.id === productId ? { ...product, quantity } : product
    );

    setCartData(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDeleteProduct = (productId) => {
    const updatedCart = cartData.filter((product) => product.id !== productId);

    setCartData(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const total = cartData.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const totalQuantity = cartData.reduce((sum, product) => sum + product.quantity, 0);

  if (cartData.length === 0) {
    return (
      <div className="bg-gradient-to-b from-[#ffc7a7] to-[#ffdfb8] min-h-screen pb-5">
        <Navbar />
        <div className="text-center text-xl mt-10">Your cart is empty!</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#ffc7a7] to-[#ffdfb8] min-h-screen relative pb-3">
      <Navbar />
      <div className="flex justify-between py-6 sm:max-w-[80vw] max-w-[90vw] m-auto">
        <div className="text-2xl text-red-800 font-medium">YOUR CART</div>
        <button onClick={() => logout()} className='px-5 py-2 bg-[#cf1800] rounded-3xl text-red-100  hover:scale-105 transition-all duration-100 linear text-md'>Logout</button>
      </div>

      <div className="sm:max-w-[80vw] max-w-[90vw] m-auto flex flex-col gap-10">
        {/* Cart Items */}
        <div className="flex flex-col gap-3">
          {cartData.map((product) => (
            <div key={product.id} className="start flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
              <img src={product.thumbnail} alt={product.title} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1 px-4">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-gray-500">Price: ${product.price}</p>
                <p className="text-gray-500">
                  Quantity:
                  <input
                    type="number"
                    value={product.quantity}
                    min="1"
                    className="ml-2 w-16 p-1 border rounded"
                    onChange={(e) => handleUpdateCart(product.id, parseInt(e.target.value))}
                  />
                </p>
                <p className="font-medium text-lg">SubTotal: ${(product.price * product.quantity).toFixed(2)}</p>
              </div>
              <div className="text-right">
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="mt-2 text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="  start2 p-4 bg-white rounded-lg shadow-md">
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-xl">Total Products</span>
            <span className="text-xl">{cartData.length}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-xl">Total Quantity</span>
            <span className="text-xl">{totalQuantity}</span>
          </div>
          <div className="flex justify-between mb-3">
            <span className="font-semibold text-xl">Total Price</span>
            <span className="text-xl font-semibold">${total.toFixed(2)}</span>
          </div>
        <div className=' flex justify-start'>
        <NavLink to={'/checkout'} className='px-5 py-2 bg-[#cf1800] rounded-3xl text-red-100  hover:scale-105 transition-all duration-100 linear text-md'>
            Proceed to Checkout 
        </NavLink>

        </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

