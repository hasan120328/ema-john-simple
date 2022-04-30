import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
import Rating from "react-rating";
const Product = (props) => {
 // console.log(props);
  const { img, name, ratings,seller, price, stock } = props.product;
  const element =<FontAwesomeIcon icon={faShoppingCart} />


  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>

      <div className="product-name">
        <h4>{name}</h4>
        <p>
          <small>by: {seller}</small>
        </p>
        <p>Price: {price}</p>
        <p><small>only {stock} left in stoke ,oder soon</small></p>
       
       <Rating 
       initialRating={ratings}
       emptySymbol="fa-regular fa-star icon-color"
       fullSymbol="fa-solid fa-star icon-color"
       readonly></Rating>
       <br/>
        <button 
        
        onClick={()=>props.handleAddtoCart(props.product)}
        className="btn-regular"
        >{element}Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
