import styled from "styled-components";

const Create = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
  flex-direction: column;
  background-color: #202632;
  color: white;
  float: left;
  padding: 0% 5%;
  h1 {
    font-size: large;
    font-weight: 800;
    margin-top: 25px;
  }
`;

const Preview = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  background-color: blue;
  float: right;
`;

export { Create, Preview };
