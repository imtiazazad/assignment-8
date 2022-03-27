import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const {cart} = props;
    console.log(props);
    
    return (
        <div>
            {
                cart.map(product => (
                    <div className='cart'>
                        <h3>Name: {product.name}</h3>
                    </div>
                ) )
            }
            
        </div>
    );
};

export default Cart;