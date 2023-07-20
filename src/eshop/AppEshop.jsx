import React from 'react';
import { useState } from "react";
import Product from "./Product";
import data from "./products.json";
import "./AppEshop.css";

function AppEshop() {

    const [cart, setCart] = useState([])
    // const [data, setData] = useState([])
    // const [isPending, setIsPending] = useState(true)

    // useEffect(() => {
    //     fetch('https://raw.githubusercontent.com/Georgincz/web-dev/main/products.json', {
    //         method: 'GET',
    //         redirect: 'follow'
    //       })
    //     .then(response => response.json())
    //     .then(json => setData(json))
    //     .finally(() => setIsPending(false))
    // }, [])

    const handler = function(product) {
        const newCart = [...cart];
        newCart.push(product);
        console.log(newCart);
        setCart(newCart)
    }

    // console.log(data);
    
    return (
        <>
            <div className='row-cart'>
                <p>Cart</p>
                <a href="./eshop" className="cart">
                    <span>{cart.length}</span> 
                </a>
            </div>            
            <div className="productList grid">
                {/* {isPending && "Loading data..."} */}
                {data.products.map(item => <Product key={item.ean} product={item} onClickHandler={handler} />)}
            </div>
        </>
    )
} 

export default AppEshop