import React, { useState, useContext } from 'react';
import Navbar from '../Components/Navbar';
import { CartContext } from '../Components/CartProvider';

function Checkout() {
  const { cartData } = useContext(CartContext);
  const total = cartData.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const totalQuantity = cartData.reduce((sum, product) => sum + product.quantity, 0);

  const [shippingDetails, setShippingDetails] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Shipping Details:', shippingDetails);
    alert('Order placed successfully!');
    
  };

  return (
    <div className="bg-gradient-to-b from-[#ffc7a7] to-[#ffdfb8] min-h-screen relative pb-5">
      <Navbar />
      <div className="sm:px-32 px-16 mx-auto  mt-8 ">
        <div className='start w-full flex lg:flex-row flex-col gap-10'>


          {/* Cart Summary */}
          <div className=" p-4 bg-white rounded-lg shadow-md lg:w-1/3 w-full">
            <div className="flex justify-between gap-10 mb-4">
              <span className="font-semibold text-xl">Total Products</span>
              <span className="text-xl">{cartData.length}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-xl">Total Quantity</span>
              <span className="text-xl">{totalQuantity}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-xl">Total Price</span>
              <span className="text-xl font-semibold">${total.toFixed(2)}</span>
            </div>
          </div>
          {/* Shipping Address Form */}
          <form onSubmit={handleSubmit} className=" p-6 w-full bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block font-medium mb-2">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={shippingDetails.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block font-medium mb-2">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={shippingDetails.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="streetAddress" className="block font-medium mb-2">Street Address *</label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={shippingDetails.streetAddress}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="apartment" className="block font-medium mb-2">Apartment/Suite </label>
              <input
                type="text"
                id="apartment"
                name="apartment"
                value={shippingDetails.apartment}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="city" className="block font-medium mb-2">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={shippingDetails.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="state" className="block font-medium mb-2">State *</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={shippingDetails.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="zipCode" className="block font-medium mb-2">Zip Code *</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={shippingDetails.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-medium mb-2">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={shippingDetails.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 px-6 py-2 bg-[#cf1800] text-white rounded-lg hover:scale-105 transition-all duration-150"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Checkout;
