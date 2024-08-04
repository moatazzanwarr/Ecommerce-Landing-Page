// Imports
import React from 'react'
import './card.css'
function Card({src,title,number}) {
  return (
    <div className='card'>
      <div>
        <img src={src} alt="card" />
      </div>
      <h4 className='title'>{title}</h4>
      <span>{number} items</span>
    </div>
  )
}

export default Card
