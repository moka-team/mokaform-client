import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import apiClient from "../../../../api/client";
import { SortActionsContext, SortContext } from "./sortState";
import { SurveyListActionsContext, SurveyListContext } from "./surveyState";
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
export default function PreferenceDownButton() {
  const preferenceSurveyList = useContext(SurveyListContext);
  const { setPreferenceList } = useContext(SurveyListActionsContext);
  const sort = useContext(SortContext);

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
  }, [sort]);

  const fetchNewRecentSurvey = async () => {
    // TODO: API 변경 필요
    const response = await apiClient.get("/api/v1/survey/list", {
      params: {
        page: 1 + count,
        size: 10,
        sort: "createdAt,desc",
      },
    });
    setCount((count) => count + 1);
    setPreferenceList([...preferenceSurveyList, ...response.data.data.content]);
  };
  const fetchNewFamousSurvey = async () => {
    const response = await apiClient.get("/api/v1/survey/list", {
      // TODO: API 변경 필요
      params: {
        page: 1 + count,
        size: 10,
        sort: "surveyeeCount,desc",
      },
    });
    setCount((count) => count + 1);
    setPreferenceList([...preferenceSurveyList, ...response.data.data.content]);
  };

  return (
    <StyledDownButton
      onClick={
        sort === "new" ? fetchNewRecentSurvey : fetchNewFamousSurvey
      }
    >
      <FontAwesomeIcon icon={faChevronDown} size={"3x"} />
    </StyledDownButton>
  );
}
