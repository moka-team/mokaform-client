import styled from "styled-components";

const LocalLoginWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const LoginInputContainer = styled.div`
  padding: 10px;
  margin-right: 15px;
  margin-bottom: 20px;
  margin-left: 10px;
`;

const Input = styled.input`
  display: block;
  width: 400px;
  height: 45px;
  padding-left: 10px;
  margin: 10px;
  border-radius: 10px;
  border: 0px;
  background-color: #edeef0;
  &:hover {
    border-color: #3399ff;
    outline: 1px solid #80bfff;
  }

  &:focus {
    border-color: #3399ff;
    outline: 3px solid #80bfff;
  }
`;

const LoginButton = styled.button`
  width: 400px;
  height: 50px;
  border: 0px;
  border-radius: 10px;
  border: none;
  background-color: #286bd0;
  color: white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  &:hover {
    background-color: #0064ff;
  }
`;

export { LocalLoginWrapper, LoginInputContainer, LoginButton, Input };
