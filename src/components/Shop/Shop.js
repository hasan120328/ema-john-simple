import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart] =useState([]);
    const [displayProducts,setDisplayProducts]=useState([]);
  //  console.log(cart)

    useEffect(()=>{
        
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);
            setDisplayProducts(data);
        })
     
    },[])


    useEffect(()=>{
       // console.log("ll c called")
        if(products.length){
            const savedCart=getStoredCart();
            const storedCart=[];
     //   console.log("save",savedCart);
        for(const key in savedCart){
           // console.log("hello",key,savedCart[key])
            const addedProduct=products.find(product=>product.id===key);

            if(addedProduct){
                const quantity=savedCart[key];
                addedProduct.quantity=quantity;
                storedCart.quantity=quantity;

                storedCart.push(addedProduct);
            }

        
        }
        setCart(storedCart);
         }
    },[products])
       

const handleAddtoCart=(product)=>{
 
    const newCart=[...cart,product];
    setCart(newCart);
    addToDb(product.id);
    
}

const handleSearch=event=>{
    const searchText=event.target.value;
    const matchedProducts=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
     setDisplayProducts(matchedProducts);
     
   
    console.log("laptop",matchedProducts.length);
}

    return (
        <>
        <div className='search-container' placeholder='serch product'>
            <input 
            type="text"
            onChange={handleSearch}
            />
        </div>
        <div>
            <div className="shop-container">
                <div className="product-container">
                hello shop{products.length}
                {
                    displayProducts.map(product=><Product
                        key={product.id}
                        product={product} 
                        handleAddtoCart={handleAddtoCart}
                        >

                        </Product>)
                }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
        </>
    );
};

export default Shop;