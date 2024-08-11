// Imports
import React from "react";
import "./product_highlights.css";
import Product from "./product";

// Data
import data from "./data.json";

// Images 
import thumbnail_1 from '../../assets/images/thumbnail-1.png'

function ProductHighlights() {
  return (
    <section className="product-highlights">
      {data.map((d) => (
        <Product mainTitle={d.mainTitle} 
        src={thumbnail_1}
        title={d.title}
        rate={d.rate}
        price={d.price}
        previous={d.previous}
        
        />
      ))}
    </section>
  );
}

export default ProductHighlights;
