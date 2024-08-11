// Imports
import React from "react";
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

// Data
const productData = {
  src: [
    product_1,
    product_2,
    product_3,
    product_4,
    product_5,
    product_6,
    product_7,
    product_8,
    product_9,
    product_10,
  ],
  type:[
    "snack",
    "Hodo Foods",
    "snack",
    "Vegetables",
    "Meats",
    "snack",
    "Hodo Foods",
    "snack",
    "Vegetables",
    "Meats"
  ],
  title:[
    "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    "All Natural Italian-Style Chicken Meatballs",
    "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    "Foster Farms Takeout Crispy Classic Buffalo Wings",
    "Blue Diamond Almonds Lightly Salted Vegetables",
    "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    "All Natural Italian-Style Chicken Meatballs",
    "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    "Foster Farms Takeout Crispy Classic Buffalo Wings",
    "Blue Diamond Almonds Lightly Salted Vegetables"
  ],
  rate:[
    "4.0",
    "5.0",
    "3.0",
    "4.0",
    "2.0",
    "4.0",
    "3.4",
    "2.3",
    "3.02",
    "5.0"
  ],
  company:[
    "NestFood",
    "Stouffer",
    "StarKist",
    "NestFood",
    "NestFood",
    "NestFood",
    "NestFood",
    "NestFood",
    "Old El Paso",
    "Tyson",
  ],
  price:[
    28.85,
    28.85,
    28.85,
    28.85,
    28.85,
    28.85,
    28.85,
    28.85,
    28.85,
    28.85
  ],
  previous:[
    32.02,
    32.02,
    32.02,
    32.02,
    32.02,
    32.02,
    32.02,
    32.02,
    32.02,
    32.02
  ]

};

function Popular() {
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
          productData.src.map((src,i)=>(
            <Pop_product
            src={productData.src[i]}
            type={productData.type[i]}
            title={productData.title[i]}
            rate={productData.rate[i]}
            company={productData.company[i]}
            price={productData.price[i]}
            previous={productData.previous[i]}
          />
          ))
        }
      </div>
    </section>
  );
}

export default Popular;
