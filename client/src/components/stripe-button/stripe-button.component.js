import React from 'react';
import { connect } from 'react-redux';
import { clearItems } from '../../redux/cart/cart.actions';
import StripeCheckout from 'react-stripe-checkout';
import { useAlert } from 'react-alert';
import axios from 'axios';

const StripeCheckoutButton = ({ price, clearItems }) => {
  const alert = useAlert();
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51GttI6JhI8WJBy1BRghbNcGYpcX6OtApRLa8V4cXz982cZlt1Ir1peZZsjxKH6s6ZYx4BPadx5XMb599MjRumnJy00jtVkDCWL';
  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert.success(
          'succesful payment. Please check email for order confirmation.'
        );
        clearItems();
      })
      .catch((error) => {
        console.log('Payment Error: ', error);
        alert.error('There was an issue with your payment.');
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Gym Nerd Pte Ltd"
      billingAddress
      shippingAddress
      description={`Your total is S$${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="SGD"
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItems: () => dispatch(clearItems()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
