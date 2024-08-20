// Imports
import React from "react";
import "./cart.css";
import CartProduct from "./cartProduct";

import { Link } from "react-router-dom";

// Icons
import icons from "../../assets/icons";

const cartstorage = localStorage.getItem("cart");
const cartStorageParse = JSON.parse(cartstorage);

function Cart() {
  const clearAll = () => {};
  return (
    <section className="cart">
      <div className="bar">
        <ul>
          <li>
            <Link to="#">
              <icons.HomeIcon className="i" />
              Home
            </Link>
          </li>
          <icons.ArrowForwardIosIcon className="i" />
          <li>
            <Link to="#">Pages</Link>
          </li>
          <icons.ArrowForwardIosIcon className="i" />
          <li>
            <Link to="#">Cart</Link>
          </li>
        </ul>
      </div>

      <section className="container">
        <h1>Your Cart</h1>
        <div>
          <p>
            There are <span>{localStorage.getItem("length")} </span>products in
            your cart
          </p>
          <div>
            <icons.DeleteIcon className="i" />
            Clear Cart
          </div>
        </div>

        <div>
          <table>

              <tr className="title">
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th><h1>Product</h1></th>
                <th><h1>Unit Price</h1></th>
                <th><h1>Quantity</h1></th>
                <th><h1>Subtotal</h1></th>
                <th><h1>Remove</h1></th>
              </tr>

              {cartStorageParse.map((item) => (
                <CartProduct key={item.id} src={item.src}  
                title={item.title}
                rate={item.rate}
                price={item.price}
                />
              ))}

          </table>
        </div>
      </section>
    </section>
  );
}

export default Cart;
