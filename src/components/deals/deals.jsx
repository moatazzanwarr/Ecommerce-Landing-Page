// // Imports
// import React, { useEffect, useState } from "react";
// import "./deals.css";
// import axios from "axios";

// function Deals() {
//   const [data, setData] = useState([]);
//   let href = document.location.href;
//   console.log(href);

//   useEffect(() => {
//     axios
//       .get("./data.json")
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((error) =>
//         console.error("There was an error fetching the data!", error)
//       );
//   }, []);
//   return (
//     <section>

//     </section>
//     )
// }

// export default Deals;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './deals.css'; // تأكد من استيراد ملف CSS الخاص بك

import data from './data.json'

function Deals() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/data.json')
      .then((res) => {
        console.log(res.data);
        setData(res.data); // افترض أن البيانات في الجذر
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <section>
      {data.map(deal => (
        <div key={deal.src}>
          <h2>{deal.price}</h2>
          <p>Price: ${deal.price}</p>
        </div>
      ))}
    </section>
  );
}

export default Deals;


