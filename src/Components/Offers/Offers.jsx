import React from 'react';
import './Offers.css';
import exclusiveimage from '../Assets/Assets/Frontend_Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>ONLY ON BESTSELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusiveimage} alt="" />
      </div>
    </div>
  )
}

export default Offers
