import React from "react";
import CollectionItem from "../../components/collection-preview/CollectionItem";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import styled from "styled-components";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <h2>{title}</h2>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem
            className="collection-items"
            key={item.id}
            item={item}
          />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 38px;
    margin: 0 auto 30px;
  }
`;
const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
  }
`;

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
