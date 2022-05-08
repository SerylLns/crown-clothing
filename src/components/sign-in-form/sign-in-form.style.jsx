import styled from "styled-components";

export const SignInContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 40%;
  min-width: 420px;
  padding: 0px;
  &:hover {
    box-shadow: 1px 1px 5px #000;
  }
  h2 {
    font-size: 1.8em;
    padding-bottom: 30px;
    font-weight: 400;
    text-align: center;
    margin: 10px 0px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
