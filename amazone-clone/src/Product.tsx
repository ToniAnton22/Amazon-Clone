import React from 'react'
import 'Product.css'

type ProductProps ={
    title:string,
    image:string,
    price:number,
    rating:number,

}

function Product({ title,image, price, rating}:ProductProps) {

  return (
    <div className = "product">
        <div className="product__info">
            <p> {title}</p>
            <p className="product__price"> 
            <small> $ </small>
            <strong> {price} </strong>
             </p>
            <div className="product__rating">
                
            </div>
        </div>
        <img src="images/logo192.png" alt="" className="product__image" />
        <button>Add to basket</button>
    </div>
  )
}

export default Product