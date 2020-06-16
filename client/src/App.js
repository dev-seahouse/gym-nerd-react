import React, { Fragment } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments,
} from './firebase/firebase.util';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { selectCollectionsForPreview } from './redux/shop/shop.selector';
import Auth from './pages/auth/auth.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Orders from './pages/orders/orders.component';
import Footer from './components/footer/footer.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Drift from 'react-driftjs';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      setCurrentUser(userAuth);
      // addCollectionAndDocuments(
      //   'collections',
      //   collectionsArray.map(({ title, items }) => ({ title, items }))
      // );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <Auth />
              }
            />
          </Switch>
          {/* <HomePage /> */}
        </div>
        <Footer props={this.props}></Footer>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
