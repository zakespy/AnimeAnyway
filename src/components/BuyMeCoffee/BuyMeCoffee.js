import React from 'react';
import './buyMeCoffeeStyle.css';

export default function BuyMeCoffee() {
  return (
    <>
      <div className="coffee">
        <a href="https://www.buymeacoffee.com/animeanyway11" target="_blank" rel="noreferrer">
          <strong>
            <p className='text'>Buy Me A Coffee</p>
          </strong>
        </a>
      </div>
      <a href="https://www.paypal.com/paypalme/animeanyway" target="_blank" rel="noreferrer">
        <div className="paypal">
          <strong>
            <p className='text2'>PayPal</p>
          </strong>
        </div>
      </a>
    </>
  );
}