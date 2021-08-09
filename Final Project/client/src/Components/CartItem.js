import React from "react";
import { useState, useEffect } from "react";
function CartItem({ item, profileID }) {
  const [cartItem, setCartItem] = useState([]);
  console.log(item);
  const API = "http://localhost:3000/cart_items";
  useEffect(() => {
    async function fetchCartItem() {
      const result = await fetch(API);
      const items = await result.json();
      setCartItem(items);
    }
    fetchCartItem();
  }, []);

  async function HandleDelete(id) {
    console.log(cartItem);
    const filterProfile = cartItem.filter(
      (item) => item.profile_id === profileID
    );
    const filterProduct = filterProfile.find((item) => item.product_id === id);
    console.log(cartItem);
    fetch(` http://localhost:3000/cart_items/${filterProduct.id}`, {
      method: "DELETE",
    }).then(window.alert("Product Deleted"));
  }

  return (
    <div className="container cart-container col">
      <br />
      <br />
      <br />
      <div className=" cart-container " style={{ width: "18rem" }}>
        <img variant="top" src={item.image} alt={item.name} />
        <div>
          <h3>{item.name}</h3>
          <small>${item.price}.00</small>
          <br />
          <button
            onClick={() => HandleDelete(item.id)}
            className="cart-btn"
            type="button"
          >
            Remove from Cart
          </button>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default CartItem;
