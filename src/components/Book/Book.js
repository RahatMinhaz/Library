import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Book.css';
const Book = (props) => {
    const {name,writer,published_year,price,img} = props.book;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
            <div className = "col-lg-4 mb-4 mt-4">
            <div className="card" style={{width: "18rem"}}>
            <img src= {img} className="card-img-top img-size" alt="..."/>
            <div className="card-body">
                <h2>{name}</h2>
                <h4>By: {writer}</h4>
                <h6>Year Realeased: {published_year}</h6>
                <h4>Price: ${parseInt(price)}</h4>
                <button onClick={()=>props.handleAddProduct(props.book)} className = "btn btn-warning">
                    {element}Add this Book</button>
            </div>
            </div>
        </div>
    );
};

export default Book;