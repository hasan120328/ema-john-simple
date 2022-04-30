import React from 'react';

const Cart = (props) => {
    console.log(props)
    const {cart}=props;
    //const totalReducer=(previous,product)=>previous+product.price;
    //const total=cart.reduce(totalReducer,0);
  
   let totalQuantity=0;
    let total=0;
    for(const product of cart){
        console.log(product);
        if(!product.quantity){
            product.quantity=1;
        }
        total=total+ product.price * product.quantity;
        totalQuantity=totalQuantity+product.quantity;
    }

const shipping =total>0?15: 0;
const tax=(total+shipping)*0.10
const grandTotal=total+shipping + tax;

    return (
        <div>
            <h1>product summary </h1>
            <h4>Items ordered {totalQuantity}</h4>
            <p>Total {total.toFixed(2)}</p>
            <p>shipping:{shipping}</p>
            <p>tax: {tax.toFixed(2)}</p>
            <p>Grand total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;