import React from 'react'
import Cart from '../../components/cart-component/Cart'
import Filter from '../../components/filter-component/Filter'
import Navbar from '../../components/navbar-component/Navbar'
import ProductList from '../../components/product-list-component/ProductList'
import './Store.css'
const Store=()=> {
  return (
    <div className='store'>
        <Navbar/>
        <main className='store-content'>
            <Filter/>
            <ProductList/>
            <div className='cart-container'>
            <Cart/>
            </div>
        </main>  

    </div>
  )
}

export default Store