import React, { useEffect, useState } from "react";
import axios from "axios";
import React from 'react'

function Productcards() {
    const ProductCards=()=>{
        const[products,setProducts]=useState([]);
    
          useEffect(() => {
            axios.get('https://fakestoreapi.com/products')
            .then((response)=>setProducts(response.data))
            .catch((err)=>{
                console.log("error fetching: ",err);
                
            }
            )
          }, [])
          
      }
  return (
    <div>
      
    </div>
  )
}

export default Productcards
