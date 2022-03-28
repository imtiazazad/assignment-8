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
            <div>
            <button>Choose 1 for me </button>
            <button>Choose Again </button>
            </div>
        </div>
    );
};

export default Cart;