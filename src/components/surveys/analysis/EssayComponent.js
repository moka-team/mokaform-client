import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import apiClient from "../../../api/client";

const col = 3;
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 25px 0px;
`;
const Content = styled.div`
  border: 1px #a0c7e4 solid;
  padding: 20px 150px;
  margin-bottom: 10px;
`;

const Button = styled.div`
  background-color: #e1ecf4;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #39739d;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", "Liberation Sans",
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  &:hover,
  &:focus {
    background-color: #b3d3ea;
    color: #2c5777;
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }

  &:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
  }
`;

export default function EssayComponent({ data }) {
  const [next, setNext] = useState(col);

  const handleMore = () => [setNext(next + col)];
  const handleOnClick = async (item) => {
    const config = {
      headers: {
        "x-api-key": "4a395f44b5577975b95f98095d59fd5c",
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post("/analysis", { msg: item }, config);

    console.log(response);
  };
  return (
    <Container>
      {data?.slice(0, next)?.map((item) => (
        <Content onClick={() => handleOnClick(item)}>{item}</Content>
      ))}
      <Button onClick={handleMore}>LOAD MORE</Button>
    </Container>
  );
}
