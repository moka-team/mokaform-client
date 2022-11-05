import styled from "styled-components";
import { Link } from "react-router-dom";

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

const AuthMenuContainer = styled.div`
  margin-top: 30px;
  margin-left: 80px;
  margin-right: 80px;
  position: relative;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  p {
    color: #000000cc;
  }
`;

const ResetPasswordLink = styled(Link)`
  text-decoration-line: none;
  color: #000000cc;
  &:link {
    text-decoration-line: none;
    color: #000000cc;
  }
  &:visited {
    text-decoration-line: none;
    color: #000000cc;
  }
  &:hover {
    text-decoration-line: none;
    color: #0064ff;
  }
  &:active {
    text-decoration-line: none;
    color: #000000cc;
  }
`;

const SignUpLink = styled(Link)`
  /* position: absolute; */
  top: 0%;
  right: 0%;
  text-decoration: none;
  color: #000000cc;
  &:link {
    text-decoration-line: none;
    color: #000000cc;
  }
  &:visited {
    text-decoration-line: none;
    color: #000000cc;
  }
  &:hover {
    text-decoration: none;
    color: #0064ff;
  }
  &:active {
    text-decoration-line: none;
    color: #000000cc;
  }
`;
const LoginFormWrapper = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const SocialLoginWrapper = styled.div`
  margin-top: 10px;
  text-align: center;
`;
const KaKaoLoginImg = styled.img`
  width: 400px;
  height: 50px;
  padding: 0;
  border-radius: 10px;
  border: none;

  object-fit: cover;
`;

export {
  LocalLoginWrapper,
  LoginInputContainer,
  LoginButton,
  Input,
  AuthMenuContainer,
  ResetPasswordLink,
  SignUpLink,
  LoginFormWrapper,
  SocialLoginWrapper,
  KaKaoLoginImg,
};
