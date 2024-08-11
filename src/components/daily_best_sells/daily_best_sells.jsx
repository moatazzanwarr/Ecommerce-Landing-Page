// Imports
import React from "react";
import "./daily_best_sells.css";
import { Link, NavLink } from "react-router-dom";
import Best_sells_product from "./best_sells_product";

// images
import shopNowBg from '../../assets/images/shopnow-img.png'
import product_1 from "../../assets/images/product-1.png";
import product_2 from "../../assets/images/product-2.png";
import product_3 from "../../assets/images/product-3.png";
import product_4 from "../../assets/images/product-4.png";

// Icons
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';


// Data
const productData = {
    src: [
      product_1,
      product_2,
      product_3,
      product_4,
    ],
    type:[
      "snack",
      "Hodo Foods",
      "snack",
      "Vegetables"
    ],
    title:[
      "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      "All Natural Italian-Style Chicken Meatballs",
      "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
      "Foster Farms Takeout Crispy Classic Buffalo Wings"
    ],
    rate:[
      "4.0",
      "5.0",
      "3.0",
      "4.0"
    ],
    price:[
      28.85,
      28.85,
      28.85,
      28.85
    ],
    previous:[
      32.02,
      32.02,
      32.02,
      32.02
    ],
    sold:[
        90,
        90,
        90,
        90
    ]
  
  };

function Daily_best_sells() {
  return (
    <section className="daily_best_sells">
      <div className="bar">
        <h1>Daily Best Sells</h1>
        <ul>
          <li>
            <NavLink to="#">Featured</NavLink>
          </li>
          <li>
            <NavLink to="#">Popular</NavLink>
          </li>
          <li>
            <NavLink to="#">New added</NavLink>
          </li>
        </ul>
      </div>

      <div className="cards">
        <div className="shopNow">
            <div className="img">
                <img src={shopNowBg} alt="bg" />
            </div>
            <div className="text">
                <h1>Bring nature <br/>into your <br/>home</h1>
                <Link to="#">Shop Now <EastIcon className="i"/> </Link>
            </div>
        </div>

        <div className="slider">
            {
                productData.src.map((src,i)=>(
                    <Best_sells_product
                        src={productData.src[i]}
                        type={productData.type[i]}
                        title={productData.title[i]}
                        rate={productData.rate[i]}
                        price={productData.price[i]}
                        previous={productData.previous[i]}
                        sold={productData.sold[i]}
                    />
                ))
            }
            <span><WestIcon className="i"/></span>
            <span><EastIcon className="i"/></span>
        </div>
      </div>
    </section>
  );
}

export default Daily_best_sells;
