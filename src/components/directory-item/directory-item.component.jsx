import "./directory-item.styles.scss";
import React from 'react';

const DirectoryItem = ({category}) => {
  const {imageUrl, title} = category
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-body-container">
        <h2>{title}</h2>
        <p>Tout voir</p>
      </div>
    </div>
  );
};

export default DirectoryItem;