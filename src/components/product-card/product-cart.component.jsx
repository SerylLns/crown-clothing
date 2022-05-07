import React from 'react';
import Button from '../button/button.component';
import './product-carte.style.scss'

const ProductCart = ({ product }) => {
  const {name, imageUrl, price} = product
  return (
    <div className='product-cart-container'>
      <img src={imageUrl } alt={`${name}`} />
      <div className="footer">
        <span className='name'>{ name }</span>
        <span className='price'>{ price }€</span>
      </div>
      <Button buttonType="inverted">Ajouter au panier</Button>
    </div>
  );
};

export default ProductCart;