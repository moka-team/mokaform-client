import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../../components/common/Header";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f6fa;
`;

const TitleText = styled.h1`
  font-size: larger;
  font-weight: 600;
  color: #202632;
  margin-bottom: 20px;
`;
const Text = styled.p`
  color: gray;
  margin-top: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 60px 40px 60px 40px;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 40%;
  margin-top: 30px;
  padding: 5px 0 10px 0;
  border-radius: 10px;
  border: none;
  &:hover {
    color: #f5f6fa;
    background-color: #0064ff;
  }
`;

export default function EmailConfirm() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <TitleText>π‘ μ΄λ©μΌ μΈμ¦ νμ νμκ°μμ΄ μλ£λ©λλ€!</TitleText>
          <Text>κ°μμ μλ ₯νμ  μ΄λ©μΌλ‘ μΈμ¦ λ©μΌμ λ³΄λμ΅λλ€.</Text>
          <Text>λ©μΌμμ μ΄λ©μΌ μΈμ¦μ λ§μΉ ν λ‘κ·ΈμΈμ΄ κ°λ₯ν©λλ€.</Text>
          <Button onClick={() => navigate("/")}>λ©μΈμΌλ‘ λμκ°κΈ°</Button>
        </Wrapper>
      </Container>
    </>
  );
}
