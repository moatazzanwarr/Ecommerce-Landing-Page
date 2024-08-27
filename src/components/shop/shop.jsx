// Imports
import React, { useState, useEffect } from "react";
import "./shop.css";
import Pop_product from "../home/popular/pop_product";
import { Link } from "react-router-dom";

// Icons
import icons from "../../assets/icons";

function Shop() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((item) => {
        setData(item.slice(0, 9));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="shop">
      <div className="mainImg">
        <div className="left">
          <h1>Snack</h1>
          <div>
            <Link to="/">
              <icons.HomeIcon className="i" />
              Home{" "}
            </Link>
            <icons.ArrowForwardIosIcon className="i" />
            <span> Shop </span>
            <icons.ArrowForwardIosIcon className="i" />
            <span> Snack</span>
          </div>
        </div>
        <div className="right">
          <div>
            <icons.CloseIcon className="i" />
            Cabbage
          </div>
          <div>
            <icons.CloseIcon className="i" />
            Broccoli
          </div>
          <div>
            <icons.CloseIcon className="i" />
            Artichoke
          </div>
          <div>
            <icons.CloseIcon className="i" />
            Celery
          </div>
          <div>
            <icons.CloseIcon className="i" />
            Spinach
          </div>
        </div>
      </div>

      <div className="mainContent">
        <aside></aside>
        <div className="container">
          <div className="bar"></div>
          <div className="products">
            {data.map((product) => (
              <Pop_product
                key={product.id}
                src={product.src}
                type={product.type}
                title={product.title}
                rate={product.rate}
                company={product.company}
                price={product.price}
                discount={product.discount}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
