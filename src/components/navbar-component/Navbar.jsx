import React from 'react'
import logo from '../../assets/websitelogo.png'
import {CgProfile} from 'react-icons/cg'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
const navLinks=[
    {
        title:'The Journey',
        path:'/journey'
    },
    {
        title:'Store',
        path:'/'
    },
    {
        title:'Team',
        path:'/team'
    },
    {
        title:'Contact',
        path:'/contact'
    }
]
const Navbar=()=> {
  return (
    <header className="navbar">
        <div className='logo-container'>
            <img classname='logo' src={logo} alt="" />
        </div>
        <ul className='nav-list'>
            {navLinks.map((navItem,index)=> <NavLink to={navItem.path} className={({isActive})=>(isActive ? 'link link-active': 'link')} key={index}>{navItem.title}</NavLink> )}
        </ul>
        <div className='user-tile'>
            <CgProfile/>
            GAGAN
        </div>
    </header>
  )
}

export default Navbar