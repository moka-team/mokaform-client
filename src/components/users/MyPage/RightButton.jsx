import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const StyledRightButton = styled.button`
  background: none;
  width: 100;
  height: 64;
  border: none;
  margin: 20px;
  margin-left: 30;
  color: #768090;
  &:hover {
    color: #0064ff;
  }
`;

export default function RightButton() {
  return (
    <StyledRightButton>
      <FontAwesomeIcon icon={faChevronRight} size={"4x"} />
    </StyledRightButton>
  );
}
