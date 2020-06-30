import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout-item.styles.scss';

function CheckoutPage ({cartItems}) 
{
    var amount = 0;
    cartItems.cartItems.map((item) => amount += item.price * item.quantity)
    
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Name</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                <span>Remove</span>
                </div>
            </div>
            {
                cartItems.cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <div className="total">
            <span>Total: ${amount}</span>
            </div>
        </div>
    );
};

const mapStateToProps = ({ cart: cartItems }) => ({
    cartItems
});

export default connect(mapStateToProps)(CheckoutPage);