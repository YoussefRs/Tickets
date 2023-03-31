import React from 'react'
import './products.css'
import ProductCard from '../ProductCard'


function Products() {

  const productData = [
    {
        // name: '10%',
        path: 'https://i.imgur.com/OFYo0fj.png',
        value: '10%',
        // description: 'test test'
    },
    {
        // name: '30%',
        path: 'https://i.imgur.com/lqTXfQc.png',
        value: '30%',
        // description: 'test test'
    },
    {
        // name: '6Month',
        path: 'https://i.imgur.com/LHo72G3.png',
        value: '50%',
        // description: 'test test'
    },
]

  return (
    <div className='product-list'>
    <section className='heading'>
        <h2>Reductions</h2>
        <p>Choose the best reduction plan for you!!</p>
    </section>

    <section className='pricing' style={{gap : '20px'}}>
    {productData.map((product) => 
        <ProductCard 
            key={product.name}
            name={product.name}
            path= {product.path}
            value={product.value}
            description={product.description}
        />
    )} 
    </section>
  
</div>
  )
}

export default Products
