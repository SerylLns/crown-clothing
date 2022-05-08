import styled from "styled-components";

export const DefaultButton = styled.button`
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all .3s ease-in;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }`;

export const InvertedButton = styled(DefaultButton)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }`;

export const GoogleButton = styled(DefaultButton)`
  color: white;
  padding: 0px;
  width: 14%;
  height: 70px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  border-radius: 50px !important;
  transition: all 1s;
  margin-bottom: 5px;
  img {
    width: 60%;
  }
  &:hover {
    transform: scale(1.1) translateY(-3px);
    border: none;
  }
`;