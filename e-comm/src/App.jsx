
import './App.css'
import Collection from './pages/Collection';
import Cart from './pages/Cart';
import Landing from './pages/Landing'
import {Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Product from './pages/Product';
import ShopContextProvider from './context/ShopContext';


function App() {
  

  return (
    <ShopContextProvider>

    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/collections' element={<Collection/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
    </Routes>
    </ShopContextProvider>
  )
}

export default App
