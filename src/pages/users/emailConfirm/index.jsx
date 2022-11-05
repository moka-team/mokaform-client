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
          <TitleText>💡 이메일 인증 후에 회원가입이 완료됩니다!</TitleText>
          <Text>가입시 입력하신 이메일로 인증 메일을 보냈습니다.</Text>
          <Text>메일에서 이메일 인증을 마친 후 로그인이 가능합니다.</Text>
          <Button onClick={() => navigate("/")}>메인으로 돌아가기</Button>
        </Wrapper>
      </Container>
    </>
  );
}
