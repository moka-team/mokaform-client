import styled from "styled-components";

const Container = styled.div`
  display: grid;
  width: 95%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 20px 50px;
  grid-template-columns: repeat(8, 1fr);
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background-color: white;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 25px;
  margin-bottom: 25px;
  // 가로, 세로 가운데 정렬
  align-items: center; /* 수직 정렬 */
  flex-direction: row; /* default: row */
  justify-content: center; /* flex direction에 대해서 정렬방식 선택 */
  display: flex;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.19);
  &:hover {
    background-color: gray;
    text-align: center;
    color: white;
    font-weight: 600;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
`;

const Box = styled.div`
  display: flex;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 50px;
`;

const Block = styled.div`
  display: flex;
  p {
    margin-right: 10px;
    font-size: 17px;
    font-weight: 600;
  }
`;

const SProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  min-height: 100vh;
  padding-top: 25px;
  background-color: #202632;
`;

const ProfileImg = styled.div`
  position: relative;
  margin-top: 40px;
  width: 50%;
  background-color: gray;
  border-radius: 50%;
  &::after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
`;

const DefaultImage = styled.img`
  position: absolute;
  background-color: gray;
  margin-top: 5%;
  margin-left: 10%;
  border-radius: 50%;
  width: 80%;
  height: 80%;
  object-fit: cover;
`;

const Image = styled.img`
  position: absolute;
  background-color: gray;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UploadBtn = styled.label`
  cursor: pointer;
  margin-top: -20px;
  z-index: 3;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  width: 100%;
  h1 {
    font-weight: 800;
    font-size: 25px;
    color: #f9fafb;
  }
  h2 {
    color: gray;
    margin-top: 10px;
  }
`;

const LineHeader = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-top: 100px;
  p {
    color: #f9fafb;
    font-weight: 600;
  }
`;
const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const Line = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const Type = styled.div`
  color: gray;
  width: 50%;
`;

const UserInput = styled.div`
  color: #f9fafb;
  width: 50%;
`;

export {
  Container,
  Card,
  RightContainer,
  Box,
  Header,
  Block,
  SProfile,
  ProfileImg,
  DefaultImage,
  Image,
  UploadBtn,
  UserInfo,
  LineHeader,
  Line,
  LineWrapper,
  Type,
  UserInput,
};
