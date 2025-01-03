
import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../Components/Authprovider.jsx';
import Navbar from '../Components/Navbar';
import axios from 'axios';

function Cart() {
  const { logout } = useContext(AuthContext);
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(false);

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchUserCart = async () => {
      if (!userId) {
        console.error('User ID not found. Please log in.');
        return;
      }

      try {
        const response = await axios.get(`https://dummyjson.com/carts/${userId}`);
        setCartData(response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchUserCart();
  }, [userId]);

  const handleUpdateCart = async (productId, quantity) => {
    setLoading(true);
    try {
      const response = await axios.put(`https://dummyjson.com/carts/${userId}`, {
        merge: true,
        products: [{ id: productId, quantity }],
      });
      setCartData(response.data);
    } catch (error) {
      console.error('Error updating cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (productId) => {
    setLoading(true);
    try {
      const updatedProducts = cartData.products.filter((product) => product.id !== productId);
      const response = await axios.put(`https://dummyjson.com/carts/${userId}`, {
        merge: false, // Merge is false to remove the product
        products: updatedProducts.map((product) => ({
          id: product.id,
          quantity: product.quantity,
        })),
      });
      setCartData(response.data);
    } catch (error) {
      console.error('Error deleting product:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!cartData) {
    return <div>Loading...</div>;
  }

  const { products, total, discountedTotal } = cartData;

  return (
    <div className='bg-gradient-to-b from-[#ffc7a7] to-[#ffdfb8] min-h-screen relative pb-5'>
      <Navbar />
      <div className="flex justify-between py-10 sm:max-w-[80vw] max-w-[90vw] m-auto">
        <div className='text-2xl text-red-800 font-medium'>YOUR CART</div>
        <button onClick={() => logout()} className='px-5 py-2 bg-[#cf1800] rounded-3xl text-red-100  hover:scale-105 transition-all duration-100 linear text-md'>Logout</button>
      </div>

      <div className='sm:max-w-[80vw] max-w-[90vw] m-auto flex flex-col gap-5'>
        {/* Cart Items */}
        <div className="flex flex-col gap-5">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
              <img src={product.thumbnail} alt={product.title} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1 px-4">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-gray-500">Price: ${product.price}</p>
                <p className="text-gray-500">Quantity: 
                  <input
                    type="number"
                    value={product.quantity}
                    min="1"
                    className="ml-2 w-16 p-1 border rounded"
                    onChange={(e) => handleUpdateCart(product.id, parseInt(e.target.value))}
                  />
                </p>
                <p className="font-medium text-lg">SubTotal: ${product.total}</p>
                <p className="text-gray-500">Discount: {product.discountPercentage}%</p>
              </div>
              <div className="text-right">
                <p className="text-lg text-black font-bold">Discounted total: ${product.discountedPrice || product.discountedTotal}</p>
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
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-xl">Total Products</span>
            <span className="text-xl">{cartData.totalProducts}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-xl">Total Quantity</span>
            <span className="text-xl">{cartData.totalQuantity}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold text-xl">Total Price</span>
            <span className="text-xl">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-xl text-red-600">Discounted Total</span>
            <span className="text-xl font-semibold text-red-600">${discountedTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {loading && <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">Loading...</div>}
    </div>
  );
}

export default Cart;

