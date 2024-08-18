// imports
import React, { useEffect, useState } from 'react'
import './cart.css' 

// Icons
import icons from '../../assets/icons'

function CartProduct({src}) {
    const [cart,setCart] = useState([])
    const curentArray = localStorage.getItem("cart")
    const curentArrayParse = JSON.parse(curentArray)
    useEffect(()=>{
      setCart(curentArrayParse)
      return console.log(cart);
    },[])
    

  return (
    <div className='cart-product'>
      <div className="img">
        <img src={src} alt="product" />
      </div>
      <h3>product</h3>
      <button className="del" onClick={(e)=>{
        e.target.remove()
      }}>
        <icons.DeleteIcon className='i'/>
      </button>
    
    </div>
  )
}

export default CartProduct
