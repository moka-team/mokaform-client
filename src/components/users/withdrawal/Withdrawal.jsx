import React, { useEffect } from "react";
import apiClient from "../../../api/client";
import { Container, WithdrawlContainer, Title, Message } from "./styled";

export default function Withdrawal() {
  const fetchProfile = async () => {
    const response = await apiClient.get("/api/v1/users/my");
    console.log(response.data.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Container>
      <WithdrawlContainer>
        <Title>탈퇴 안내</Title>
        <p>회원탈퇴를 신청하기 전에 안내 사항을 꼭 확인해주세요.</p>
        <Message>
          ✅ 사용하고 계신 아이디(tldusdk5)는 탈퇴할 경우 재사용 및 복구가
          불가능합니다.
        </Message>
      </WithdrawlContainer>
    </Container>
  );
}
