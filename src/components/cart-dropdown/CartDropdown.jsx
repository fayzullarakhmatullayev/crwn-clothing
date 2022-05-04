import React from "react";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import styled from "styled-components";

const Cart = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CariItems>
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <Empty>Your cart is empty</Empty>
      )}
    </CariItems>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownContainer>
);

const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  button {
    margin-top: auto;
  }
`;

const Empty = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;

const CariItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(Cart));
