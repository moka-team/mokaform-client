import React, { useEffect, useState } from "react";
import { Row, Rows, Title } from "./SignUpCSS";

export default function SexRow({ gender, getGender, getIsGender }) {
  const sex = ["여성", "남성"];
  const ids = ["FEMALE", "MALE"];
  const [currentClick, setCurrentClick] = useState(gender);
  const [prevClick, setPrevClick] = useState(null);

  const onClickHandler = (event) => {
    if (prevClick !== null && prevClick !== event.target.id) {
      let prev = document.getElementById(prevClick);
      prev.style.color = "black";
      prev.style.fontWeight = 400;
      prev.style.backgroundColor = "#ffffff";
    }

    setCurrentClick(event.target.id);
    getGender(event.target.id);
  };

  useEffect(
    (event) => {
      if (currentClick !== null) {
        getIsGender(true);
        let current = document.getElementById(currentClick);
        current.style.color = "white";
        current.style.fontWeight = 600;
        current.style.backgroundColor = "#0064ff";
      }
      setPrevClick(currentClick);
    },
    [currentClick]
  );

  return (
    <>
      <Title>성별</Title>
      <Rows>
        {sex.map((sex, idx) => (
          <Row
            color="white"
            key={ids[idx]}
            id={ids[idx]}
            value={sex}
            onClick={onClickHandler}
          >
            {sex}
          </Row>
        ))}
      </Rows>
    </>
  );
}
