import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ProductCard({product, profileID}) {

  let history = useHistory();

  async function handleClick(productID) {
    console.log(productID)
    window.alert("Added to Card!");
    await fetch("http://localhost:3000/cart_items",{
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            profile_id: profileID,
            product_id: productID,
        })
    }).then(response => response.json())
    .then(() => history.push('/cart'))
  }
  
  return (
    <div className="container" style={{width: "18rem"}}>
    <div className="col">
    <img src={product.image} alt={product.name}/>
    </div>
    <br/>
    <div className="prod-details row">
      <h3 className="prod-name">{product.name}</h3>
      <p className="prod-name">${product.price}.99</p>
      <p className="prod-name">{product.quantity} left in stock.</p>    
      <button onClick={ () => handleClick(product.id)} className="prod-button">Add to Cart</button>
      <br/>
      <br/>
      </div>
      <br/>
  </div>
  
  );
}
