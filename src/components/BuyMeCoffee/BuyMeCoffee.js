import React from 'react';
import './buyMeCoffeeStyle.css';

export default function BuyMeCoffee() {
  return (
    <>
      <a href="https://www.buymeacoffee.com/animeanyway11" target="_blank" rel="noreferrer">
        <div className="coffee">
          <strong>
            <p className='text'>Buy Me A Coffee</p>
          </strong>
        </div>
      </a>
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