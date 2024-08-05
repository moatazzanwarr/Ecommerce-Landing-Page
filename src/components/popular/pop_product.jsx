// Imports
import React from 'react'

// Icons
import icons from '../../assets/icons'

function Pop_product({src,type,title,company,rate,price,previous}) {
  return (
    <div className='pop_product'>
      <div className="img">
        <img src={src} alt="" />
      </div>
      <div className="text">
        <span>{type}</span>
        <h4>{title}</h4>
        <div className="rate">
            <icons.StarIcon className='i'/> 
            <span>({rate})</span>
        </div>
        <p className='company'>By <span>{company}</span></p>
        <div className="price_add">
            <p><span>${price}</span><span>${previous}</span></p>
            <div className="add">
                <icons.ShoppingCartCheckoutIcon className='i'/> <span>Add</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Pop_product
