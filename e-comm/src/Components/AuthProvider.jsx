import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);
  const userId = localStorage.getItem('userId');


//   useEffect(() => {
//     const fetchUserCart = async () => {
//       const userId = localStorage.getItem('userId');
//       if (!userId) {
//         console.error('User ID not found. Please log in.');
//         return;
//       }

//       try {
//         const response = await axios.get(`https://dummyjson.com/carts/${userId}`);
//         setCart(response.data);
//       } catch (error) {
//         console.error('Error fetching cart:', error);
//       }
//     };
//     fetchUserCart();
//   }, []);

//   const addToCart = async (productId, quantity = 1) => {
//     if (!user) {
//       throw new Error('User not logged in');
//     }
//     try {
//       const response = await axios.put(`https://dummyjson.com/carts/${userId}`, {
//         merge: true,
//         products: [{ id: productId, quantity }],
//       });
//       setCart(response.data.products);  // Update cart directly
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };

//   const updateCart = async (updatedCart) => {
//     if (!user) {
//       throw new Error('User not logged in');
//     }
//     try {
//       const response = await axios.put(`https://dummyjson.com/carts/${userId}`, {
//         merge: true,
//         products: updatedCart,
//       });
//       setCart(response.data.products);  // Update cart with new data
//     } catch (error) {
//       console.error('Error updating cart:', error);
//     }
//   };

//   const removeFromCart = async (productId) => {
//     if (!user) {
//       throw new Error('User not logged in');
//     }
//     try {
//       const updatedCart = cart.filter((product) => product.id !== productId);
//       const response = await axios.put(`https://dummyjson.com/carts/${userId}`, {
//         merge: false,
//         products: updatedCart,
//       });
//       setCart(response.data.products);  // Update cart with removed product
//     } catch (error) {
//       console.error('Error removing from cart:', error);
//     }
//   };

  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));

  const login = (token) => {
    setAccessToken(token);
    localStorage.setItem('accessToken', token);
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem('accessToken');
    setRefreshToken(null);
    localStorage.removeItem('refreshToken');
    navigate('/');
  };

  console.log(cart);

  return (
    <AuthContext.Provider value={{
    //   user,
    //   cart,
    //   addToCart,
    //   removeFromCart,
    //   updateCart,
      accessToken,
      refreshToken,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
