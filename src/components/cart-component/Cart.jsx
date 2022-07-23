import React from 'react'
import './Cart.css'
import {BsMinecartLoaded} from 'react-icons/bs'
import {BiMap} from 'react-icons/bi'
import {AiOutlineCalendar} from 'react-icons/ai'
import { useProducts } from '../../context/useProducts'
import {MdDeleteOutline} from 'react-icons/md'

const CartItemTile=({product})=>{
    const {name}=product
    const {data,setData}=useProducts()
    const deleteClickHandler=()=>{
        const newCart=data.cart.filter(item=>item._id!==product._id)
        setData(prevState=>({
            ...prevState,
            cart:newCart
        }))
    }
    return <div className='cart-tile'>
        <h4>{name}</h4>
        <div className='delete-btn' onClick={deleteClickHandler}>
            <MdDeleteOutline size={25}/>
        </div>
    </div>
}

const Cart=()=>{
    const {data}=useProducts()
  return (
    <div className='Cart'>
        <header className='cart-header'>
            <h3>Cart {`(${data.cart.length})`}</h3>
            <BsMinecartLoaded size={25}/>
        </header>
        <div className='cart-content'>
            {
                data.cart.length ? data.cart.map(item=><CartItemTile key={item._id} product={item}/>): <div className='empty-text'><p>What's stopping you, designer?</p></div>
            }
        </div>
        <footer className='cart-footer'>
            <div className='footer-details'>
                <p><BiMap/> Home</p>
                <p><AiOutlineCalendar /> Select date</p>
            </div>
            <button className='btn-secondary'>Order now</button>
        </footer>
    </div>
  )
}

export default Cart