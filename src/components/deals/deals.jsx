// Imports
import React from "react";
import data from "./data.json";
import DealsStructure from "./dealsStructure";
import "./deals.css";

// Images
import dealsBanner_1 from '../../assets/images/dealsBanner-1.png'

function Deals() {
  return (
    <section className="deals">
      {data.map((deal) => (
        <DealsStructure 
        src={dealsBanner_1}
        title={deal.title}
        rate={deal.rate}
        company={deal.company}
        price={deal.price}
        previous={deal.previous}
         />
      ))}
    </section>
  );
}

export default Deals;
