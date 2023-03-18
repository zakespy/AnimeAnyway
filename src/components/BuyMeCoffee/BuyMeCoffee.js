import React from 'react';
import './buyMeCoffeeStyle.css';

export default function BuyMeCoffee() {
  return (
    <>
      <div className="coffee">
        <strong>
          <a href="https://www.buymeacoffee.com/animeanyway11" target="_blank" rel="noreferrer">
            <p className='text'>Buy Me A Coffee</p>
          </a>
        </strong>
      </div>
      <div className="paypal">
        <strong>
          <a href="https://www.paypal.com/paypalme/animeanyway" target="_blank" rel="noreferrer">
            <p className='text2'>PayPal</p>
          </a>
        </strong>
      </div>
    </>
  );
}