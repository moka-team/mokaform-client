import React from "react";
import { Container, MessageText } from "./styled";

export default function Error({ errorMessage }) {
  return (
    <Container>
      <MessageText color="red">{errorMessage}</MessageText>
    </Container>
  );
}
