import styled, { css } from "styled-components";

const subColor = "#343942";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: -17px;
  font-size: 15px;
  color: ${mainColor};
`;
export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 20px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 7px;
  top: 16px;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  border-radius: 3px;
  height: 100%;
  background: none;
  background-color: white;
  color: $sub-color;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid $sub-color;
  margin: 5px 0;
  box-shadow: 0px 2px 5px rgba($color: #bbb, $alpha: 0.5);
  &:focus {
    outline: none;
    border-bottom: 2px solid #87f5fb;
  }
  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
    color: #87F5FB;
  }
`;

export const Group = styled.div`
  position: relative;
  margin-bottom: 40px;
  height: 40px;
  width: 80%;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
