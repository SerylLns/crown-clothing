import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCart from "../product-card/product-cart.component";
import { CategoryPreviewContainer, Preview, Title } from "./category-preview.style";

const CategoryPreview = ({ products, title }) => {
  const navigate = useNavigate();
  const handleNavigate = (title) => navigate(`/shop/${title}`);

  return (
    <CategoryPreviewContainer>
      <Title onClick={() => handleNavigate(title)}>
        {title}
      </Title>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
