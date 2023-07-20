import React from 'react';
import { useState } from "react";

function Product({ product, onClickHandler }) {

    const [isIncart, setIsInCart] = useState(false)

    // Pozn.: Data z košíku se po realodu stránky vynulují, řešením je posílat data do localStorage.

    return (
        <div className="productItem">
            <h3>{product.name}</h3>
            <img src={product.main_image.url} alt={product.name} />
            <div className="boxPrice">
                <div>{product.prices.list.default} <span> CZK</span></div>
                <div>{isIncart && "In cart"}</div>
                <button onClick={() => {
                    setIsInCart(true);
                    onClickHandler(product)
            }}>Buy</button>
            </div>
        </div>
    )
}

export default Product;