import {React,createContext,useContext, useState} from 'react'

export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
    const[search,setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(true)

const value={
    search,setSearch,showSearch,setShowSearch
}
  return (
    <ShopContext.Provider value={value}>
        {props.children}
        </ShopContext.Provider>
  )
}

export default ShopContextProvider
