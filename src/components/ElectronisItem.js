import React from 'react';

const ElectronicItem=({products})=>{
    //const products=props.products;
    return(
        <div>
           
            <ul>
                {products.map((product,index)=>(
                    <li key={index}><strong>Product Name:</strong>{product.productName}
                    <br />
                    ID:{product.productId},Price:{product.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ElectronicItem;