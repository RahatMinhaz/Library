import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {
    const{cart}=props || {}
    const totalReducer = (prevValue,currentValue)=>prevValue+currentValue.price
    const total = cart.reduce(totalReducer,0)
    const tax=0.2*total;
    const totalPrice = total-tax;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
            <div className ="mt-4">
                {/* Adding Book Amount */}
            <h3>Books Ordered:  
            {props.cart.length}</h3>
            <h3>{element}</h3>
            {/* Adding Price */}
            <h3>Total: ${total}</h3>
            <h3>Tax: ${tax}</h3>
            <h1>Total price: ${totalPrice}</h1>
            <ol>
                {
                    cart.map(book=><li key={book.id}>{book.name}</li>)
                }
            </ol>
        </div>
    );
};

export default Cart;