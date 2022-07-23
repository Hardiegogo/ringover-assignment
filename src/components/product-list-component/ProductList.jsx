import React,{useState,useEffect} from 'react'
import './ProductList.css'
import {BsSearch,BsCart,BsCartFill} from 'react-icons/bs'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { useProducts } from '../../context/useProducts'
import { calcFilteredProducts } from '../../utils/calcFilteredProducts'
const printRating=(rating)=>{
    const numOfStars=[1,2,3,4,5]
    return numOfStars.map((star,index)=>{
        if(index<rating) return <AiFillStar size={15} color="#FFC94D" />
        else return <AiOutlineStar size={15} color="#FFC94D"/>
    })
}

const calculateIsInCart=(cartItems,product)=>{
    const result=cartItems?.find(item=>item._id===product._id)
    return result ? true : false
}

const ProductCard=({product})=>{
    const {name,imgLink,price,rating}=product
    const starsToBeShown=printRating(rating)
    const {data,setData}=useProducts()
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
        <div className='product-img'>
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
                    <option value="" disabled selected>Sort by</option>
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