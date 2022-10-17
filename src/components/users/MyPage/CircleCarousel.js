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
import { display } from "@mui/system";

// 임시 유저 관심사 데이터
const preferenceList = [
  "HOBBY",
  "IT",
  "PET",
  "PSYCHOLOGY",
  "SOCIAL_POLITICS",
  "LEARNING",
  "PREFERENCE_RESEARCH",
  "LIFE",
];

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

function CircleCarousel() {
  const [ishover1, setIshover1] = useState(false);
  const [ishover2, setIshover2] = useState(false);
  const [ishover3, setIshover3] = useState(false);
  const [ishover4, setIshover4] = useState(false);
  const [ishover5, setIshover5] = useState(false);
  const [ishover6, setIshover6] = useState(false);
  const [ishover7, setIshover7] = useState(false);
  const [ishover8, setIshover8] = useState(false);

  return (
    <Container>
      <Card
        onMouseOver={() => setIshover1(true)}
        onMouseOut={() => setIshover1(false)}
        style={{ display: preferenceList.includes("PET") ? "flex" : "none" }}
      >
        <FontAwesomeIcon
          icon={faPaw}
          size={"4x"}
          style={{
            display: ishover1 ? "none" : "flex",
            color: "#636870",
          }}
        />
        <p style={{ display: ishover1 ? "flex" : "none" }}>반려동물</p>
      </Card>
      <Card
        onMouseOver={() => setIshover2(true)}
        onMouseOut={() => setIshover2(false)}
        style={{ display: preferenceList.includes("LIFE") ? "flex" : "none" }}
      >
        <FontAwesomeIcon
          icon={faFaceSmile}
          size={"4x"}
          style={{ display: ishover2 ? "none" : "flex", color: "#636870" }}
        />
        <p style={{ display: ishover2 ? "flex" : "none" }}>일상</p>
      </Card>
      <Card
        onMouseOver={() => setIshover3(true)}
        onMouseOut={() => setIshover3(false)}
        style={{
          display: preferenceList.includes("SOCIAL_POLITICS") ? "flex" : "none",
        }}
      >
        <FontAwesomeIcon
          icon={faHashtag}
          size={"4x"}
          style={{ display: ishover3 ? "none" : "flex", color: "#636870" }}
        />
        <p style={{ display: ishover3 ? "flex" : "none" }}>사회·정치</p>
      </Card>
      <Card
        onMouseOver={() => setIshover4(true)}
        onMouseOut={() => setIshover4(false)}
        style={{
          display: preferenceList.includes("LEARNING") ? "flex" : "none",
        }}
      >
        <FontAwesomeIcon
          icon={faBook}
          size={"4x"}
          style={{ display: ishover4 ? "none" : "flex", color: "#636870" }}
        />
        <p style={{ display: ishover4 ? "flex" : "none" }}>학습</p>
      </Card>
      <Card
        onMouseOver={() => setIshover5(true)}
        onMouseOut={() => setIshover5(false)}
        style={{ display: preferenceList.includes("IT") ? "flex" : "none" }}
      >
        <FontAwesomeIcon
          icon={faLaptopCode}
          size={"4x"}
          style={{ display: ishover5 ? "none" : "flex", color: "#636870" }}
        />
        <p style={{ display: ishover5 ? "flex" : "none" }}>IT</p>
      </Card>
      <Card
        onMouseOver={() => setIshover6(true)}
        onMouseOut={() => setIshover6(false)}
        style={{ display: preferenceList.includes("HOBBY") ? "flex" : "none" }}
      >
        <FontAwesomeIcon
          icon={faGuitar}
          size={"4x"}
          style={{ display: ishover6 ? "none" : "flex", color: "#636870" }}
        />
        <p style={{ display: ishover6 ? "flex" : "none" }}>취미</p>
      </Card>
      <Card
        onMouseOver={() => setIshover7(true)}
        onMouseOut={() => setIshover7(false)}
        style={{
          display: preferenceList.includes("PREFERENCE_RESEARCH")
            ? "flex"
            : "none",
        }}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size={"4x"}
          style={{ display: ishover7 ? "none" : "flex", color: "#636870" }}
        />
        <p style={{ display: ishover7 ? "flex" : "none" }}>선호도 조사</p>
      </Card>
      <Card
        onMouseOver={() => setIshover8(true)}
        onMouseOut={() => setIshover8(false)}
        style={{
          display: preferenceList.includes("PSYCHOLOGY") ? "flex" : "none",
        }}
      >
        <FontAwesomeIcon
          icon={faPersonCircleQuestion}
          size={"4x"}
          style={{ display: ishover8 ? "none" : "flex", color: "#636870" }}
        />
        <p style={{ display: ishover8 ? "flex" : "none" }}>심리</p>
      </Card>
    </Container>
  );
}
export default CircleCarousel;
