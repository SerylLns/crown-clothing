import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 90px;
  img{
    height: 100%;
    width: 100%;
    width: 80px;
    padding: 15px;
  }
  h3{
    font-family: 'Euphoria Script', cursive;
    font-size: 1.8rem;
    text-shadow: 1px 1px 5px #bbb;
    span{
      font-size: 2rem;
      color: #4A4B4E;
    }
  }`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;

  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;


