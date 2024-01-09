import React, {useEffect, useState} from 'react'
import ProductCard from './ProductCard'

function Products({user}) {
    const [last16Products, setLast16Products] = useState([])
  useEffect(() =>{
    fetch('https://fakestoreapi.com/products?limit=16')
            .then(res=>res.json())
            .then(res=>setLast16Products(res))
  })
  return (
    <>
    <h3>Products</h3>
    <div className='row row-cols-sm-3 row-cols-md-4'>
      {last16Products.map(product =><ProductCard user={user} key={product.id} item={product}/>)}
    </div>
    </>
  )
}

export default Products