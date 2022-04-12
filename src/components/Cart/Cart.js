import React from 'react';
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
    // conditional rendering options
    // 1. Element variable
    // 2. ternary operator (condition ? true : false)
    // 3. && operator (short hand)
    // 4. || or
    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>ohh kipta khoroch kor</h5>
            <p>kinos na ken?</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p>Please add item</p>
    }
    else {
        command = <p><small>Thanks for adding item.</small></p>
    }
    return (
        <div>
            <h2>Item selected: {cart.length}</h2>

            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange'>Yey! you are buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jonke ke ki gift diba?</p>
            </div>}
            {command}
            {cart.length !== 4 ? <p>keep adding</p> : <button>Remove all</button>}
            {cart.length === 4 && <button className='orange'>Review order</button>}
        </div>
    );
};

export default Cart;