import React from 'react';
import './stock.css';

const stock = ({
  name,
  price,
  symbol,
  marketcap,
  
}) => {
  return (
    <div className='stock-container'>
  
      <div className='stock-row'>
        <div className='stock'>
          {/* <img src={image} alt='crypto' /> */}
          <h1>{name}</h1>
          <p className='stock-symbol'>{symbol}</p>
        </div>
        <div className='stock-data'>
        <p className='stock-marketcap'>
            {marketcap.toLocaleString()}
          </p>
          <p className='stock-price'>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default stock;
