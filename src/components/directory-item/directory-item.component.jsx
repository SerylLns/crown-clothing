import React from 'react';
import { BackgroundImage, DirectoryBodyContainer, DirectoryItemContainer } from "./directory-item.styles";

const DirectoryItem = ({category}) => {
  const {imageUrl, title} = category
  return (
    <DirectoryItemContainer>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <DirectoryBodyContainer to={`/shop/${title.toLowerCase()}`} >
        <h2>{title}</h2>
        <p>Tout voir</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;