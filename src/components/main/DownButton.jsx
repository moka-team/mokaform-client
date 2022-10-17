import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import axios from "axios";
import { useRecoilState } from "recoil";
import { surveyList, surveySortState } from "../../atoms";
import { useEffect } from "react";
const StyledDownButton = styled.button`
  background: none;
  width: 100;
  height: 64;
  border: none;
  margin: 37px;
  color: #768090;
  &:hover {
    color: #0064ff;
  }
`;
export default function DownButton() {
  const [surveys, setServeys] = useRecoilState(surveyList);
  const [count, setCount] = useState(0);
  const [surveySort, setSurveySort] = useRecoilState(surveySortState);

  useEffect(() => {
    setCount(0);
  }, [surveySort]);

  const fetchNewRecentSurvey = async () => {
    const response = await axios.get("/api/v1/survey/list", {
      params: {
        page: 1 + count,
        size: 10,
        sort: "createdAt,desc",
      },
    });
    setCount((count) => count + 1);
    console.log(response.data.data.content);
    setServeys([...surveys, ...response.data.data.content]);
  };
  const fetchNewFamousSurvey = async () => {
    const response = await axios.get("/api/v1/survey/list", {
      params: {
        page: 1 + count,
        size: 10,
        sort: "surveyeeCount,desc",
      },
    });
    setCount((count) => count + 1);
    setServeys([...surveys, ...response.data.data.content]);
  };

  return (
    <StyledDownButton
      onClick={
        surveySort === "new" ? fetchNewRecentSurvey : fetchNewFamousSurvey
      }
    >
      <FontAwesomeIcon icon={faChevronDown} size={"3x"} />
    </StyledDownButton>
  );
}
