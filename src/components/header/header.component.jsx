import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.style.scss';
import { setSignOutUser } from '../../redux/user/user.actions';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden, setSignOutUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>Shop</Link>
            <Link className="option" to='/contact'>Contact</Link>
            {
                
                currentUser ? 
                <div className="option" onClick={() => setSignOutUser(null)}>Sign Out</div> : 
                <Link className="option" to='/login'>Login</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown /> 
        }
        
    </div>
);


const mapStateToProps = ({user: {currentUser}, cart: hidden}) => ({
    currentUser,
    hidden
});

const mapDispatchToProps = dispatch => ({
    setSignOutUser: user => dispatch(setSignOutUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);