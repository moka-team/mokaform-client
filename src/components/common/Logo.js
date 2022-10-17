import styled from "styled-components";
import { Link } from "react-router-dom";

const SignInLogo = styled(Link)`
  font-family: "Sonsie One", cursive;
  font-size: 24px;
  color: #202632;
  &:link {
    text-decoration-line: none;
    color: #202632;
  }
  &:visited {
    text-decoration-line: none;
    color: #202632;
  }
  &:active {
    text-decoration-line: none;
    color: #202632;
  }
`;

const Logo = styled(Link)`
  font-family: "Sonsie One", cursive;
  font-size: 15px;
  color: #202632;
  &:link {
    text-decoration-line: none;
    color: #202632;
  }
  &:visited {
    text-decoration-line: none;
    color: #202632;
  }
  &:active {
    text-decoration-line: none;
    color: #202632;
  }
`;

export { SignInLogo, Logo };
