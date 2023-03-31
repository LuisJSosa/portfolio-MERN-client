import React, { useState } from "react";
import ProductRow from "../components/ProductRow.js";

function OrderPage( { products } ) {
    return (
      <>
        
        <h2>Order Product Page</h2>  
        <article>
          <p>
           Hi there, to order an product please fill out this 
           oder form below.</p>

                <table>
                  <caption>
                    Please select only one item per order.
                  </caption>
                  <thead>
                      <tr>
                          <th>Company</th>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Check Out</th>
                      </tr>
                  </thead>

                  <tbody>
                    {products.map((chosenItem, pos) => 
                    <ProductRow chosenItem={chosenItem} 
                      key={pos} 
                      />
                    )}

                  </tbody>
                </table>
                
          </article>
  
      </>
    );
  }

  export default OrderPage;