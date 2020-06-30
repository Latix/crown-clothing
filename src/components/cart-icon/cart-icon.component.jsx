import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping_bag.svg';
import './cart-icon.styles.scss';

function CartIcon ({toggleCartHidden, cartItems})  {
    var total = 0;
    cartItems.cartItems.map((item) =>
       total += item.quantity
    )
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{total}</span>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(CartIcon);