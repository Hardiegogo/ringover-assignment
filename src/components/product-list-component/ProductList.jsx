import React,{useState,useEffect} from 'react'
import './ProductList.css'
import {BsSearch,BsCart,BsCartFill} from 'react-icons/bs'
import { useProducts } from '../../context/useProducts'
import { calcFilteredProducts } from '../../utils/calcFilteredProducts'
import {useNavigate} from 'react-router-dom'
import { printRating } from "../../utils/printRating";
import { calculateIsInCart } from "../../utils/calculateIsInCart";

const ProductCard=({product})=>{
    const {name,imgLink,price,rating}=product
    const starsToBeShown=printRating(rating)
    const {data,setData}=useProducts()
    const navigate=useNavigate()
    const isInCart=calculateIsInCart(data.cart,product)
    const cartClickHandler=()=>{
        if(!isInCart){
            setData(prevState=>({
                ...prevState,
                cart:[...prevState.cart,product]
            }))
        }else{
            const newCart=data.cart.filter(item=>item._id!==product._id)
            setData(prevState=>({
                ...prevState,
                cart:newCart
            }))
        } 
    }
    return ( <div className='product'>
        <div className='product-img' onClick={()=>navigate(`/product/${product._id}`)}>
            <img src={imgLink} alt="" />
        </div>
        <div className='product-details'>
            <div className='header'>
                <h4>{name}</h4>
                <div className='cart' onClick={cartClickHandler}>
                    {isInCart ? <BsCartFill size={20}/> : <BsCart size={20}/>}
                </div>
            </div>
            <div className='price-header'>
                <p className='price'>Rs.{price}</p>
                <div>
                    {starsToBeShown}
                </div>
            </div>
        </div>
    </div> )
}


const ProductList=()=> {
    const {data,setData}=useProducts()
    const {filterAbove1500,filterAbove4000,filterAbove7000,filterBySneakers,filterByLoafers}=data
    
    useEffect(()=>{
        setData(state=>({
            ...state,
            filteredProducts:calcFilteredProducts(data)
        }))
    },[filterAbove1500,filterAbove4000,filterAbove7000,filterBySneakers,filterByLoafers])
  return (
    <div className='product-list'>
        <div className="product-list-header">
            <h3>SHOES</h3>
            <div className='header-right'>
                <BsSearch size={25}/>
                <select id="" className='sort-by'>
                    <option value="" disabled selected >Sort by</option>
                </select>
            </div>
        </div>
        <main className='products-grid'>
            {data.filteredProducts.map(product=><ProductCard key={product._id} product={product}/>)}
        </main>
    </div>
  )
}

export default ProductList