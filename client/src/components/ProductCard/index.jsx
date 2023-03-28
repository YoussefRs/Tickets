import React from 'react'
import { Link } from 'react-router-dom'
import { BiPurchaseTag } from 'react-icons/bi'
import './ProductCard.css'


function ProductCard({name, path, value, description}) {
    
  return (
    <div className='product-card'>
      <Link to='/'>
        <img src={path} />
      </Link>
      <div className='product-info'>
        <h3>{name}</h3>
        <p>{description}</p>
        <Link to='/'>
          <div className='price'>
            <span>DT {value} <BiPurchaseTag /></span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
