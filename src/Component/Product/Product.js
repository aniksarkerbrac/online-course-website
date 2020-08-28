import React from 'react';
import './Product.css'

const Product = (props) => {
    const { image, name, instructor,price} = props.product;
    return (
        <div className="product">
        <div>
           <img src={image} alt="" />
       </div>
       <div className="buy">
           <h2 className="Course-Name">{name}</h2>
           <h4>Instructor: {instructor}</h4>
           <p>${price}</p>
           <button className="main-button"
            onClick={()=> props.handleAddProduct(props.product)}
           > add to cart </button>
           </div>

   </div>
    );
};

export default Product;