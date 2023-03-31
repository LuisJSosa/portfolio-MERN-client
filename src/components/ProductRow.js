import React, { useState } from "react";
import ProductQuantity from "./ProductQuantity";

function ProductRow({ chosenItem }) {
    return (
    
        <tr>
            <td>{chosenItem.product}</td>
            <td>{chosenItem.company}</td>
            <td>{chosenItem.price.toLocaleString('en-US', {     
                style: "currency", currency: "USD",  
                currencyDisplay: "symbol",
                maximumFractionDigits: 6, minimumFractionDigits: 2      
                })}
            </td>
            <td><ProductQuantity /></td>
        </tr>
    );
}

export default ProductRow