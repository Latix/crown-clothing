import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.style.scss';
import { setSignOutUser } from '../../redux/user/user.actions';

const Header = ({ currentUser, setSignOutUser }) => (
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
        </div>
    </div>
);


const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setSignOutUser: user => dispatch(setSignOutUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);