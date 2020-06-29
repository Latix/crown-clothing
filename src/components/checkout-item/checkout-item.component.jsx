import React from 'react';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity}}) => (
    <div className="checkout-item">
        <div className="image-container">
             <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{imageUrl}</span>
        <span className="price">{price}</span>
        <span className="remove">{quantity}</span>
    </div>
);

export default CheckoutItem;