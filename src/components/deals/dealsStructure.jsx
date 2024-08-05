// Import
import React from 'react'

function DealsStructure({src,title,rate,company,price,previous}) {
  return (
    <div className='deals-card'>
      <img src={src} alt="" />

      <div className="text">
        <h4>{title}</h4>
        <div className="rate">{rate}</div>
        <p><span>by</span> {company}</p>
        <p className="price"><span>{price}</span><span>{previous}</span></p>
      </div>
    </div>
  )
}

export default DealsStructure
