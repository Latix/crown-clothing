import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.Items
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => (
        cartItems.reduce(
        (accumalatedQuantity, cartItem) => 
        accumalatedQuantity + cartItem.quantity, 0))
)