import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

function ProductList() {

    const API = "https://fakestoreapi.com/products";

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(API).then(res => {
            setProducts(res.data)
            console.log(res.data)
        })
    }, [])

//     {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// }


  return (
    <div className='flex flex-wrap justify-center gap-3 p-3 bg-gray-200'>
        {
            products.map((product) => (
                <ProductCard
                
                title = {product.title}
                price = {product.price}
                description = {product.description}
                category = {product.category}
                image = {product.image}
                
                rating = {product.rating.rate} 
                count = {product.rating.count}
                
                id={product.id}

                />
            ))
        }
    </div>
  )
}

export default ProductList