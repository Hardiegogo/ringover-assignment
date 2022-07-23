import React from 'react'
import './Filter.css'
import {FiFilter} from 'react-icons/fi'
import { useProducts } from '../../context/useProducts'


const Filter=()=> {
  const {data,setData}=useProducts()
  const {filterAbove1500,filterAbove4000,filterAbove7000,filterByLoafers,filterBySneakers}=data
  
  return (
    <div className='filter'>
        <header className='filters-header'>
            <h3>Filters</h3>
            <FiFilter size={25}/>
        </header>
        <main>
            <h4 className='filters-heading'>
                Cost
            </h4>
            <div>
            <label className='price-range'> <input type="checkbox"  id="" checked={filterAbove1500} onClick={()=>setData(state=>({...state,filterAbove1500:!state.filterAbove1500}))}/> Rs.1500-3999</label>
            <label className='price-range'> <input type="checkbox"  id="" checked={filterAbove4000} onClick={()=>setData(state=>({...state,filterAbove4000:!state.filterAbove4000}))}/> Rs.4000-6999</label>
            <label className='price-range'> <input type="checkbox"  id="" checked={filterAbove7000} onClick={()=>setData(state=>({...state,filterAbove7000:!state.filterAbove7000}))} /> +Rs.7000</label>
            </div>
            <h4  className='filters-heading'>
              Type
            </h4>
            <label className='type'> <input type="checkbox"  id="" checked={filterByLoafers} onClick={()=>setData(state=>({...state,filterByLoafers:!state.filterByLoafers}))} /> Loafers</label>
            <label className='type'> <input type="checkbox"  id="" checked={filterBySneakers} onClick={()=>setData(state=>({...state,filterBySneakers:!state.filterBySneakers}))}/> Sneakers</label>
        </main>
        <footer>
        <button className='btn-primary' onClick={()=>setData(state=>({...state,
            filterAbove1500:false,
            filterAbove4000:false,
            filterAbove7000:false,
            filterByLoafers:false,
            filterBySneakers:false
            }))}> Clear filters</button>
        </footer>
    </div>
  )
}

export default Filter