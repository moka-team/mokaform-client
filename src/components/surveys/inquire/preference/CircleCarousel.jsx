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
import { Container } from "../../../../components/users/myPage/styled";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SurveyListContext, SurveyListActionsContext } from "./surveyState";
import styled from "styled-components";
import { Grid } from "@mui/material";

const Card = styled.div`
  background-color: white;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 20px;
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
  &.selected {
    background-color: lightgrey;
    text-align: center;
    color: white;
    font-weight: 600;
  }
`;

function CircleCarousel({ text }) {
  // const surveyList = useContext(SurveyListContext);
  // const { setList } = useContext(SurveyListActionsContext);
  const [ishover1, setIshover1] = useState(false);
  const [ishover2, setIshover2] = useState(false);
  const [ishover3, setIshover3] = useState(false);
  const [ishover4, setIshover4] = useState(false);
  const [ishover5, setIshover5] = useState(false);
  const [ishover6, setIshover6] = useState(false);
  const [ishover7, setIshover7] = useState(false);
  const [ishover8, setIshover8] = useState(false);

  const navigate = useNavigate();

  function fetchData() {}
  return (
    <Grid
      container
      columnSpacing={10}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={3} md={3} lg={1.5}>
        <Card
          className={text === "PET" && "selected"}
          onMouseOver={() => setIshover1(true)}
          onMouseOut={() => setIshover1(false)}
          onClick={() =>
            navigate("/survey/preference", { state: { text: "PET" } })
          }
        >
          <FontAwesomeIcon
            icon={faPaw}
            size={"2x"}
            style={{
              display: ishover1 ? "none" : "flex",
              color: "#636870",
            }}
          />
          <p style={{ display: ishover1 ? "flex" : "none" }}>반려동물</p>
        </Card>
      </Grid>
      <Grid item xs={3} md={3} lg={1.5}>
        <Card
          className={text === "DAILY_LIFE" && "selected"}
          onMouseOver={() => setIshover2(true)}
          onMouseOut={() => setIshover2(false)}
          onClick={() =>
            navigate("/survey/preference", { state: { text: "DAILY_LIFE" } })
          }
        >
          <FontAwesomeIcon
            icon={faFaceSmile}
            size={"2x"}
            style={{ display: ishover2 ? "none" : "flex", color: "#636870" }}
          />
          <p style={{ display: ishover2 ? "flex" : "none" }}>일상</p>
        </Card>
      </Grid>
      <Grid item xs={3} md={3} lg={1.5}>
        <Card
          className={text === "SOCIAL_POLITICS" && "selected"}
          onMouseOver={() => setIshover3(true)}
          onMouseOut={() => setIshover3(false)}
          onClick={() =>
            navigate("/survey/preference", {
              state: { text: "SOCIAL_POLITICS" },
            })
          }
        >
          <FontAwesomeIcon
            icon={faHashtag}
            size={"2x"}
            style={{ display: ishover3 ? "none" : "flex", color: "#636870" }}
          />
          <p style={{ display: ishover3 ? "flex" : "none" }}>사회·정치</p>
        </Card>
      </Grid>
      <Grid item xs={3} md={3} lg={1.5}>
        <Card
          className={text === "LEARNING" && "selected"}
          onMouseOver={() => setIshover4(true)}
          onMouseOut={() => setIshover4(false)}
          onClick={() =>
            navigate("/survey/preference", { state: { text: "LEARNING" } })
          }
        >
          <FontAwesomeIcon
            icon={faBook}
            size={"2x"}
            style={{ display: ishover4 ? "none" : "flex", color: "#636870" }}
          />
          <p style={{ display: ishover4 ? "flex" : "none" }}>학습</p>
        </Card>
      </Grid>
      <Grid item xs={3} md={3} lg={1.5}>
        <Card
          className={text === "IT" && "selected"}
          onMouseOver={() => setIshover5(true)}
          onMouseOut={() => setIshover5(false)}
          onClick={() =>
            navigate("/survey/preference", { state: { text: "IT" } })
          }
        >
          <FontAwesomeIcon
            icon={faLaptopCode}
            size={"2x"}
            style={{ display: ishover5 ? "none" : "flex", color: "#636870" }}
          />
          <p style={{ display: ishover5 ? "flex" : "none" }}>IT</p>
        </Card>
      </Grid>
      <Grid item xs={3} md={3} lg={1.5}>
        <Card
          className={text === "HOBBY" && "selected"}
          onMouseOver={() => setIshover6(true)}
          onMouseOut={() => setIshover6(false)}
          onClick={() =>
            navigate("/survey/preference", { state: { text: "HOBBY" } })
          }
        >
          <FontAwesomeIcon
            icon={faGuitar}
            size={"2x"}
            style={{ display: ishover6 ? "none" : "flex", color: "#636870" }}
          />
          <p style={{ display: ishover6 ? "flex" : "none" }}>취미</p>
        </Card>
      </Grid>
      <Grid item xs={3} md={3} lg={1.5}>
        <Card
          className={text === "PREFERENCE_RESEARCH" && "selected"}
          onMouseOver={() => setIshover7(true)}
          onMouseOut={() => setIshover7(false)}
          onClick={() =>
            navigate("/survey/preference", {
              state: { text: "PREFERENCE_RESEARCH" },
            })
          }
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size={"2x"}
            style={{ display: ishover7 ? "none" : "flex", color: "#636870" }}
          />
          <p style={{ display: ishover7 ? "flex" : "none" }}>선호도 조사</p>
        </Card>
      </Grid>
      <Grid item xs={3} md={3} lg={1.5}>
        <Card
          className={text === "PSYCHOLOGY" && "selected"}
          onMouseOver={() => setIshover8(true)}
          onMouseOut={() => setIshover8(false)}
          onClick={() =>
            navigate("/survey/preference", { state: { text: "PSYCHOLOGY" } })
          }
        >
          <FontAwesomeIcon
            icon={faPersonCircleQuestion}
            size={"2x"}
            style={{ display: ishover8 ? "none" : "flex", color: "#636870" }}
          />
          <p style={{ display: ishover8 ? "flex" : "none" }}>심리</p>
        </Card>
      </Grid>
    </Grid>
  );
}
export default CircleCarousel;
