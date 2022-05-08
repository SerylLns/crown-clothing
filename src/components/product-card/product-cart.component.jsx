import React, { useContext } from "react";
import { CartContext } from "../../contextes/cart.context";
import Button from "../button/button.component";
import {
  ProductCartContainer,
  Name,
  Footer,
  Price,
} from "./product-carte.style";

const ProductCart = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}€</Price>
      </Footer>
      <Button onClick={() => addItemToCart(product)} buttonType="inverted">
        Ajouter
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCart;
