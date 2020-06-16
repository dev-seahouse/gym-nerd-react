import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <p className="gst">GST: S${(total * 0.07).toFixed(2)}</p>
      <span>Total : S${(total + total * 0.07).toFixed(2)}</span>
    </div>
    <p>4242424242424242 Visa Any 3 digits Any future date</p>
    <StripeCheckoutButton price={total + total * 0.07} />
  </div>
);

const mapStateToProps = () =>
  createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
  });

export default connect(mapStateToProps)(CheckoutPage);
