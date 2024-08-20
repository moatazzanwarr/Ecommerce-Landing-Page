// imports
import React, { useEffect, useState } from "react";
import "./cart.css";

// Icons
import icons from "../../assets/icons";

function CartProduct({ src, title, rate, price }) {
  const [cart, setCart] = useState([]);
  const curentArray = localStorage.getItem("cart");
  const curentArrayParse = JSON.parse(curentArray);
  useEffect(() => {
    setCart(curentArrayParse);
    return console.log(cart);
  }, []);

  const [count, setCount] = useState(1);

  return (
    <tr className="cart-product">
      <th>
        <input type="checkbox" name="" id="" />
      </th>
      <th className="product">
        <div className="img">
          <img src={src} alt="product" />
        </div>
        <div className="text">
          <p>{title}</p>
          <span className="rate">
            <icons.StarIcon className="i" />({rate})
          </span>
        </div>
      </th>
      <th className="price">${price}</th>
      <th className="counter">
        <div>{count}</div>
        <div>
          <icons.KeyboardArrowUpIcon className="i" onClick={()=>{setCount(count+1)}}/>
          <icons.KeyboardArrowDownIcon className="i" onClick={()=>{setCount(count-1)}}/>
        </div>
      </th>

      <th>{price * count}</th>

      <th>
        <icons.DeleteIcon className="i" />
      </th>
    </tr>
  );
}

export default CartProduct;
