import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f5f6fa;
`;

const Table = styled.div`
  display: flex;
  width: 50%;
  min-height: 100%;
  flex-direction: column;
  margin: 0% 25%;
  color: black;
`;

const Text = styled.text`
  margin-top: 10%;
  margin-bottom: 20px;
  font-weight: 900;
  font-size: xx-large;
  border: none;
  color: black;
`;

export { Container, Table, Text };
