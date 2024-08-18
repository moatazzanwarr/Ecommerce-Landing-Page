// Imports
import React, { useEffect, useState } from "react";
import "./popular.css";
import { NavLink } from "react-router-dom";
import Pop_product from "./pop_product";

// Images
import product_1 from "../../assets/images/product-1.png";
import product_2 from "../../assets/images/product-2.png";
import product_3 from "../../assets/images/product-3.png";
import product_4 from "../../assets/images/product-4.png";
import product_5 from "../../assets/images/product-5.png";
import product_6 from "../../assets/images/product-6.png";
import product_7 from "../../assets/images/product-7.png";
import product_8 from "../../assets/images/product-8.png";
import product_9 from "../../assets/images/product-9.png";
import product_10 from "../../assets/images/product-10.png";
import CartProduct from "../Cart/cartProduct";

// Data
const productData = [

  {
    id: 1,
    src: product_1,
    type: "snack",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rate: "4.0",
    company: "NestFood",
    price: 28.85,
    previous: 32.02
  },
  {
    id: 2,
    src: product_2,
    type: "Hodo Foods",
    title: "All Natural Italian-Style Chicken Meatballs",
    rate: "5.0",
    company: "Stouffer",
    price: 28.85,
    previous: 32.02
  },
  {
    id: 3,
    src: product_3,
    type: "Vegetables",
    title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    rate: "4.0",
    company: "StarKist",
    price: 28.85,
    previous: 32.02
  },
  {
    id: 4,
    src: product_4,
    type: "Meats",
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    rate: "4.0",
    company: "NestFood",
    price: 28.85,
    previous: 32.02
  },
  {
    id: 5,
    src: product_5,
    type: "snack",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rate: "4.0",
    company: "NestFood",
    price: 28.85,
    previous: 32.02
  },
  {
    id: 6,
    src: product_6,
    type: "Hodo Foods",
    title: "All Natural Italian-Style Chicken Meatballs",
    rate: "5.0",
    company: "Stouffer",
    price: 28.85,
    previous: 32.02
  },
  {
    id: 7,
    src: product_7,
    type: "Vegetables",
    title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    rate: "4.0",
    company: "StarKist",
    price: 28.85,
    previous: 32.02
  },
  {
    id: 8,
    src: product_8,
    type: "Meats",
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    rate: "4.0",
    company: "NestFood",
    price: 28.85,
    previous: 32.02
  },
  {
    id: 9,
    src: product_9,
    type: "snack",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rate: "4.0",
    company: "NestFood",
    price: 28.85,
    previous: 32.02
  },
  {
    id: 10,
    src: product_10,
    type: "Hodo Foods",
    title: "All Natural Italian-Style Chicken Meatballs",
    rate: "5.0",
    company: "Stouffer",
    price: 28.85,
    previous: 32.02
  },
];

function Popular() {

  const [cart, setCart] = useState(()=>{
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  })

  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("length", cart.length)
  },[cart])

  const addToCart = (product)=>{
    setCart([...cart, product])
  }

  return (
    <section className="popular">
      <div className="bar">
        <h1>Popular Products</h1>
        <ul>
          <li>
            <NavLink to="#">All</NavLink>
          </li>
          <li>
            <NavLink to="#">Milks & Dairies</NavLink>
          </li>
          <li>
            <NavLink to="#">Coffes & Teas</NavLink>
          </li>
          <li>
            <NavLink to="#">Pet Foods</NavLink>
          </li>
          <li>
            <NavLink to="#">Meats</NavLink>
          </li>
          <li>
            <NavLink to="#">Vegetables</NavLink>
          </li>
          <li>
            <NavLink to="#">Fruits</NavLink>
          </li>
        </ul>
      </div>
      <div className="products">
        {
          productData.map((item,i)=>(
            <Pop_product
            src={item.src}
            type={item.type}
            title={item.title}
            rate={item.rate}
            company={item.company}
            price={item.price}
            previous={item.previous}
            onAddToCart={()=>{addToCart(item)}}
            key={item.id}
          />
          ))
        }
      </div>
    </section>
  );
}

export default Popular;
