import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #edeef0;
`;

const WithdrawlContainer = styled.div`
  width: 60%;
  height: 100vh;

  p {
    margin-top: 10px;
    margin-left: 10px;
  }
`;

const Title = styled.h1`
  margin-top: 30px;
  margin-left: 10px;
  font-weight: 700;
  font-size: larger;
  color: black;
`;

const Message = styled.h1`
  margin-top: 40px;
  margin-left: 10px;
  font-weight: 700;
  font-size: medium;
  color: black;
`;

export { Container, WithdrawlContainer, Title, Message };
