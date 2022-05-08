import "./directory-item.styles.scss";
import React from 'react';
import { Link } from "react-router-dom";

const DirectoryItem = ({category}) => {
  const {imageUrl, title} = category
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <Link to={`/shop/${title.toLowerCase()}`} className="directory-body-container">
        <h2>{title}</h2>
        <p>Tout voir</p>
      </Link>
    </div>
  );
};

export default DirectoryItem;