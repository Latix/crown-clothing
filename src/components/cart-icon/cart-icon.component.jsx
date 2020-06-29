import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping_bag.svg';
import './cart-icon.styles.scss';

function CartIcon ({toggleCartHidden, cartItems})  {
    // Declare a new state variable, which we'll call "count"  
    // const [count, setCount] = useState(0);
    var total = 0;
    cartItems.cartItems.map((item) =>
       total += item.quantity
    )
    // setCount(total)
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{total}</span>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart
    // itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(CartIcon);