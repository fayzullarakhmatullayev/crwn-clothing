import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";
import styled from "styled-components";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <span>{name}</span>
      <Quantity>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </Quantity>
      <span>${price}</span>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  span {
    width: 23%;
  }
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Quantity = styled.span`
  display: flex;
  width: 23%;
  div {
    cursor: pointer;
    font-weight: 700;
  }
  span {
    margin: 0 10px;
    width: auto;
  }
`;

const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
