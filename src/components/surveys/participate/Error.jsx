import React from "react";
import { Container, MessageText } from "./styled";

export default function Error({ errorMessage }) {
  return (
    <Container>
      <MessageText color="red">
        알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요!
      </MessageText>
    </Container>
  );
}
