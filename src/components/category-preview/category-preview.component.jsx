import "./category-preview.style.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCart from "../product-card/product-cart.component";

const CategoryPreview = ({ products, title }) => {
  const navigate = useNavigate();
  const handleNavigate = (title) => navigate(`/shop/${title}`);

  return (
    <div className="category-preview-container">
      <h2 className="title" onClick={() => handleNavigate(title)}>
        {title}
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
