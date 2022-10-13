import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faFaceSmile,
  faHashtag,
  faBook,
  faLaptopCode,
  faGuitar,
  faMagnifyingGlass,
  faPersonCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// 임시 유저 관심사 데이터
const preferenceList = ["HOBBY", "IT", "PET"];

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
  }
`;

function CircleCarousel() {
  return (
    <Container>
      <Card
        style={{ display: preferenceList.includes("PET") ? "flex" : "none" }}
      >
        <FontAwesomeIcon
          icon={faPaw}
          size={"4x"}
          style={{
            color: "#636870",
          }}
        />
      </Card>
      <Card
        style={{ display: preferenceList.includes("LIFE") ? "flex" : "none" }}
      >
        <FontAwesomeIcon
          icon={faFaceSmile}
          size={"4x"}
          style={{ color: "#636870" }}
        />
      </Card>
      <Card
        style={{
          display: preferenceList.includes("SOCIAL_POLITICS") ? "flex" : "none",
        }}
      >
        <FontAwesomeIcon
          icon={faHashtag}
          size={"4x"}
          style={{ color: "#636870" }}
        />
      </Card>
      <Card
        style={{
          display: preferenceList.includes("LEARNING") ? "flex" : "none",
        }}
      >
        <FontAwesomeIcon
          icon={faBook}
          size={"4x"}
          style={{ color: "#636870" }}
        />
      </Card>
      <Card
        style={{ display: preferenceList.includes("IT") ? "flex" : "none" }}
      >
        <FontAwesomeIcon
          icon={faLaptopCode}
          size={"4x"}
          style={{ color: "#636870" }}
        />
      </Card>
      <Card
        style={{ display: preferenceList.includes("HOBBY") ? "flex" : "none" }}
      >
        <FontAwesomeIcon
          icon={faGuitar}
          size={"4x"}
          style={{ color: "#636870" }}
        />
      </Card>
      <Card
        style={{
          display: preferenceList.includes("PREFERENCE_RESEARCH")
            ? "flex"
            : "none",
        }}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size={"4x"}
          style={{ color: "#636870" }}
        />
      </Card>
      <Card
        style={{
          display: preferenceList.includes("PSYCHOLOGY") ? "flex" : "none",
        }}
      >
        <FontAwesomeIcon
          icon={faPersonCircleQuestion}
          size={"4x"}
          style={{ color: "#636870" }}
        />
      </Card>
    </Container>
  );
}
export default CircleCarousel;
