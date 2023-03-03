import React from 'react'
import '../styles/card.css'

const Card = ({title}) => {
  return (
    <div className='mainDiv'>
        <h3>{title}</h3>
        <span>With an emphasis on<br /> typography, white space and <br /> mobile-optimized design, your<br /> website will look absolutely<br /> breathtaking.</span>
        <button>LEARN MORE</button>
    </div>
  )
}

export default Card