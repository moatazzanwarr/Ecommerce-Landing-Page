// Imports
import React from 'react'
import './cart.css'
import CartProduct from './cartProduct';

const cartstorage = localStorage.getItem("cart");
const cartStorageParse = JSON.parse(cartstorage);

function Cart() {
  const clearAll = ()=>{
    
  }
  return (
    <section className='cart'>
      {
        cartStorageParse.map((item)=>(
          <CartProduct
          src={item.src}
          key={item.id}
          />
        ))
      }
      <div className="clear">
        <button onClick={clearAll}>Clear All</button>
      </div>
    </section>
  )
}

export default Cart
