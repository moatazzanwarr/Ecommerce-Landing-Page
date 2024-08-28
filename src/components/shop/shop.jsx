// Imports
import React, { useState, useEffect } from "react";
import "./shop.css";
import Pop_product from "../home/popular/pop_product";
import { Link } from "react-router-dom";

// Icons
import icons from "../../assets/icons";

// Images
import categoryImg_1 from "../../assets/images/category-1.png";
import categoryImg_2 from "../../assets/images/category-2.png";
import categoryImg_3 from "../../assets/images/category-3.png";
import categoryImg_4 from "../../assets/images/category-4.png";
import categoryImg_5 from "../../assets/images/category-5.png";

const categorySrc = [
  {
    id: 1,
    src: categoryImg_1,
    title: "Milks & Dairies",
    counter: 11
  },
  {
    id: 2,
    src: categoryImg_2,
    title: "Clothing",
    counter: 13
  },
  {
    id: 3,
    src: categoryImg_3,
    title: "Pet Foods",
    counter: 15
  },
  {
    id: 4,
    src: categoryImg_4,
    title: "Baking material",
    counter: 25
  },
  {
    id: 5,
    src: categoryImg_5,
    title: "Fresh Fruit",
    counter: 32
  },
];

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
        <aside>
          <div className="category">
            <h1>Category</h1>
            {categorySrc.map((e, i) => (
              <div key={e.id}>
                <div className="img">
                  <img src={e.src} alt="" />
                </div>
                <h6>{e.title}</h6>
                <span className="counter">{e.counter}</span>
              </div>
            ))}
          </div>
          <div className="fillByPrice">
            <h1>Fill by price</h1>
            <div>
                <input type="range" name="" id="" />
            </div>
          </div>
        </aside>
        <div className="container">
          <div className="bar">
            <p>
              We found <span>29</span> items for you!
            </p>
            <div>
              <div>
                <span>
                  <icons.WindowIcon className="i" />
                  Show:
                </span>
                <select name="" id="">
                  <option value="3">3</option>
                  <option value="6">6</option>
                  <option value="9">9</option>
                </select>
              </div>
              <div>
                <span>
                  <icons.HeightIcon className="i" />
                  Sort by:
                </span>
                <select name="" id="">
                  <option value="Featured ">Featured </option>
                  <option value="Featured ">Featured </option>
                  <option value="Featured ">Featured </option>
                </select>
              </div>
            </div>
          </div>
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
