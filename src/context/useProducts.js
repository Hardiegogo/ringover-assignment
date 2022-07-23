import React, { createContext, useContext,useState } from "react";
import { products } from "../Data";
const ProductContext=createContext(null)

export const useProducts=()=>useContext(ProductContext)

const initialState={
    cart:[],
    products:[...products],
    filteredProducts:[...products],
    filterAbove1500:false,
    filterAbove4000:false,
    filterAbove7000:false,
    filterByLoafers:false,
    filterBySneakers:false,
}


export const ProductProvider=({children})=>{
    const [data,setData]=useState(initialState)
    return <ProductContext.Provider value={{data,setData}}>
        {children}
    </ProductContext.Provider>
}