import React, { useState } from 'react';
import FakeData from '../../FakeData/FakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const first15 = FakeData.slice(0,15);
    const [products,setProducts] = useState(first15);
    const [cart,setCart] = useState([]);

    const handleAddProduct =(product) => {
    console.log("product added",product);
    const newCart = [...cart,product];
    setCart(newCart);
    }
    return (
        <div className="shop-container">
              <div className="product-container">
                {
                    products.map(pd =>
                    <Product  handleAddProduct = {handleAddProduct} product ={pd}></Product>)
                }
        </div>
        
        <div className="cart-container">
            <Cart cart={cart}></Cart>
        </div>
            
        </div>
    );
};

export default Shop;