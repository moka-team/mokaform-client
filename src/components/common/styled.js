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

const Wrapper = styled.div`
  width: 60%;
  min-height: 100vh;
  margin-bottom: 20px;
`;

const TextWrapper = styled.div`
  margin-top: 20px;
`;

const Title = styled.h1`
  margin-top: 40px;
  font-weight: 700;
  font-size: larger;
  color: black;
`;

const Message = styled.h1`
  margin-top: 50px;
  font-weight: 700;
  font-size: medium;
  color: black;
`;

const DetailMessage = styled.h1`
  margin-top: 20px;
  font-weight: ${(props) => props.fWeight || "400"};
  font-size: medium;
  color: ${(props) => props.tColor || "#656666"};
  line-height: normal;
`;

const TextButton = styled.button`
  margin-top: 15px;
  border: none;
  font-size: medium;
  font-weight: 500;
  color: #0064ff;
  width: 100%;
  text-align: left;
  background-color: #edeef0;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  Container,
  Wrapper,
  TextWrapper,
  Title,
  Message,
  DetailMessage,
  TextButton,
};
