
import './App.css'
import Collection from './pages/Collection';
import Cart from './pages/Cart';
import Landing from './pages/Landing'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Product from './pages/Product';
import ShopContextProvider from './context/ShopContext.jsx';
import { Authprovider } from './Components/Authprovider.jsx';
import ProtectedRoute from './Components/ProtectedRoutes.jsx';
import Checkout from './pages/Checkout.jsx';
import { CartProvider } from './Components/CartProvider.jsx';


function App() {


  return (
    <Authprovider>
      <CartProvider>

      <ShopContextProvider>

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/collections' element={<Collection />} />
          <Route path='/login' element={<Login />} />
          <Route
                path="/cart"
                element={
                    <ProtectedRoute>
                        <Cart/>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/checkout"
                element={
                    <ProtectedRoute>
                        <Checkout/>
                    </ProtectedRoute>
                }
            />
          <Route path='/product/:productId' element={<Product />} />
        </Routes>
      </ShopContextProvider>
      </CartProvider>
    </Authprovider>
  )
}

export default App
