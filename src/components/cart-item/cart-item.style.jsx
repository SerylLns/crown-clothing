import styled from "styled-components";

export const ItemDetails = styled.div`
  width: 70%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const Name = styled.span`
  font-size: 16px;
`;

export const CartItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  margin-bottom: 15px;
  // justify-content: space-between;
  img {
    width: 30%;
    object-fit: cover;
    object-position: center;
  }
`;
