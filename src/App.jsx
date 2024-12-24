
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


function App() {


  return (
    <Authprovider>


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
          <Route path='/product/:productId' element={<Product />} />
        </Routes>
      </ShopContextProvider>
    </Authprovider>
  )
}

export default App
