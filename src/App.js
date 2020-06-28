import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import AuthPage from './pages/auth/auth.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component  {
  

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    setCurrentUser({
      id: 1,
      info: {
        name: 'Kamsi Kodi',
        age: 17
      }
    })
    // auth.onAuthStateChanged(async userAuth =>  {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapshot => {
    //       // this.setState({
    //       //   currentUser: {
    //       //     id: snapshot.id,
    //       //     ...snapshot.data(),
    //       //   }
    //       // })
    //       this
    //       console.log(this.state);
    //     })
    //   }
    //   console.log(userAuth);
    //   createUserProfileDocument(userAuth);
    //   this.setState({
    //     currentUser: userAuth
    //   })
    // })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/login' render={() => this.props.currentUser ?  (<Redirect to="/" />) : ( <AuthPage />) } />
          </Switch>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
