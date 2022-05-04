import React from "react";
import CollectionItem from "./CollectionItem";
import styled from "styled-components";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <h1>{title.toUpperCase()}</h1>
      <Preview>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Preview>
    </CollectionPreviewContainer>
  );
};

const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  h1 {
    font-size: 28px;
    margin-bottom: 25px;
  }
`;
const Preview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export default CollectionPreview;
