import React, { useContext } from "react";
import ProductCart from "../../components/product-card/product-cart.component";
import { ProductsContext } from "../../contextes/products.context";
import './shop.style.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCart key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default Shop;
