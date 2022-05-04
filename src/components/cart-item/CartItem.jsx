import React from "react";
import styled from "styled-components";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt={name} />
    <ItemDetails>
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  img {
    width: 30%;
  }
`;
const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
  .name {
    font-size: 16px;
  }
`;

export default CartItem;
