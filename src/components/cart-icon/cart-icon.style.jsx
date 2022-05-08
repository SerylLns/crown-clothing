import styled from "styled-components";
import { ReactComponent as IconShopping } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
  transition: transform 0.6s;
`;
export const ShoppingIcon = styled(IconShopping)`
  width: 28px;
  height: 28px;
  transition: transform 0.6s;
  &:hover {
    transform: scale(1.2);
  }
`;
