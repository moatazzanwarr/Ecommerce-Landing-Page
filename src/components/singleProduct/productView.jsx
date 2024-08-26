// Imports
import React, { useEffect, useState } from "react";
import SingleProduct from "./singleProduct";
import ProductInfo from "./productInfo";
import "./productView.css";

import { Link, useParams } from "react-router-dom";

// Icons
import icons from "../../assets/icons";

// Images
import mainImg from '../../assets/images/product-3.png'

function ProductView() {

  const {id} = useParams()
  const [product,setProduct] = useState(null)
  useEffect(()=>{
    fetch("/products.json")
    .then(res=>res.json())
    .then(jsonData=>{
      
      const foundProduct = jsonData.find((item)=> item.id === parseInt(id))
      setProduct(foundProduct)
    })
    .catch(error=>console.log(error)
    )
  },[id])

  if(!product){
    return <div>
      Prouduct Not Found
    </div>
  }

  return (
    <section className="productView">
      <div className="bar">
        <ul>
          <li>
            <Link to="/">
              <icons.HomeIcon className="i" />
              Home
            </Link>
          </li>
          <icons.ArrowForwardIosIcon className="i" />
          <li>
            <Link to="#">Vegetables & tubers </Link>
          </li>
          <icons.ArrowForwardIosIcon className="i" />
          <li>
            <Link to="#"> Seeds of Change Organic</Link>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="main">
          <SingleProduct
          src={product.src}
          src_1={product.src}
          src_2={product.src}
          src_3={product.src}
          src_4={product.src}
          title={product.title}
          mainPrice={product.price}
          off={product.discount}
          />
          <ProductInfo/>
        </div>
      </div>
    </section>
  );
}

export default ProductView;
