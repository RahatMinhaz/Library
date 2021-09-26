import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Library.css';
const Library = () => {
    const [books,setBooks] = useState([]);
    const [cart,setCart] = useState([]);

    const handleAddProduct=(book)=>{
        const newCart = [...cart,book]
        console.log(newCart)
        setCart(newCart)
    }
    useEffect(() => {
        fetch('./books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])
    return (
        <div className = "container">
            <div className = 'row'>
            <div className="col-lg-9">
                <div className="row">{
                    books.map(book => <Book key={book.id} book={book} handleAddProduct={handleAddProduct}></Book>)
                }
            </div>
            </div>
                <div className="col-lg-3">
                    <Cart key={cart.id} cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Library;