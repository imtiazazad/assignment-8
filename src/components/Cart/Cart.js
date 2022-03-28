import React from 'react';
import './Cart.css';

const Cart = ({cart, allreset, random}) => {
    
    return (
        <div>
            {
                cart.map(product => (
                    <div className='cart'>
                        <h3>Name: {product.name}</h3>
                    </div>
                ) )
            }
            <div>
            <button onClick={random}>Choose 1 for me </button>
            <button onClick={allreset} >Choose Again </button>
            </div>
        </div>
    );
};

export default Cart;