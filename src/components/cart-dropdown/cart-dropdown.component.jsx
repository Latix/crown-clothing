import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
function CartDropdown ({cartItems, history, dispatch}) {
    return <div className="cart-dropdown">
        <div className="cart-items">
            {   
                cartItems.cartItems.length > 0 ? 
                cartItems.cartItems.map(
                    cartItem =>  <CartItem key={cartItem.id} item={cartItem} />
                ) : (
                    <span className="empty-message">No Item</span>
                    )
            }
        </div>
        <CustomButton onClick={() => 
        {
            history.push("/checkout")
            dispatch(toggleCartHidden())
        }}>CHECKOUT</CustomButton>
    </div>
};

const mapStateToProps = ({ cart: cartItems }) => ({
    cartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));