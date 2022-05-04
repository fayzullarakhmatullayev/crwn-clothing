import React from "react";
import CusttomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import styled from "styled-components";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooter>
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </CollectionFooter>
      <CusttomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CusttomButton>
    </CollectionItemContainer>
  );
};

const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    transition: 0.3s;
  }
  button {
    width: 80%;
    position: absolute;
    top: 255px;
    opacity: 0;
    transition: 0.3s;
  }
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
    }
  }
`;

const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .name {
    width: 90%;
    margin-bottom: 15px;
  }

  .price {
    width: 10%;
  }
`;

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
