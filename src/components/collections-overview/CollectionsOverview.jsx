import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/CollectionPreview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import styled from "styled-components";

const CollectionOverview = ({ collections }) => (
  <CollectionOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionOverviewContainer>
);

const CollectionOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
