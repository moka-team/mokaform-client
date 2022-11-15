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

  span {
    color: red;
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
  margin-top: 50px;
  margin-left: 10px;
  font-weight: 700;
  font-size: medium;
  color: black;
`;

const CheckBoxContainer = styled.div`
  margin-top: 50px;
  margin-left: 10px;

  p {
    margin-top: 10px;
    margin-left: 10px;
  }

  span {
    color: #202632;
    font-weight: 700;
    font-size: medium;
  }
`;

const WithdrawalContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #202632;
    font-weight: 700;
    font-size: medium;
  }
`;

const WithdrawalButton = styled.button`
  background-color: #202632;
  width: 60px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  color: white;
  &:disabled {
    background-color: lightgrey;
    color: black;
  }
`;

export {
  Container,
  WithdrawlContainer,
  Title,
  Message,
  CheckBoxContainer,
  WithdrawalContainer,
  WithdrawalButton,
};
