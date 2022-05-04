import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeCheckoutButton from "../../components/stripe-button/StripeButton";
import { CheckoutPageContainer, CheckoutHeader } from "./checkout.styles";

const CheckoutPage = ({ cartItems, totalValue }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <div>
        <span>Product</span>
      </div>
      <div>
        <span>Description</span>
      </div>
      <div>
        <span>Quantity</span>
      </div>
      <div>
        <span>Price</span>
      </div>
      <div>
        <span>Remove</span>
      </div>
    </CheckoutHeader>
    {cartItems.map((cartItem) => (
      <CheckoutItem cartItem={cartItem} key={cartItem.id} />
    ))}
    <div className="total">
      <span>TOTAL: ${totalValue}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 4/24 - CVV: 424
    </div>
    <StripeCheckoutButton price={totalValue} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalValue: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
