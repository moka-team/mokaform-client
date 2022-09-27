import React, { useState, useEffect } from "react";
import "./Row.css";

export default function InterestRow() {
  const interests = ["일상", "IT", "취미", "학습"];
  const interests2 = ["심리", "사회·정치", "선호도 조사", "+"];

  const ids = [
    "interest_1",
    "interest_2",
    "interest_3",
    "interest_4",
    "interest_5",
    "interest_6",
    "interest_7",
    "interest_8",
  ];

  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  const onClickHandler = (event) => {
    if (prevClick !== null && prevClick !== event.target.id) {
      let prev = document.getElementById(prevClick);
      prev.style.color = "black";
      prev.style.fontWeight = 400;
      prev.style.backgroundColor = "#f9fafb";
    }

    setCurrentClick(event.target.id);
  };

  useEffect(
    (event) => {
      if (currentClick !== null) {
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
    <div>
      <section>
        <h3 class="row_title">관심사</h3>
        <div>
          {interests.map((interest, idx) => (
            <button
              id={ids[idx]}
              value={interest}
              type="button"
              onClick={onClickHandler}
              class="interest_row"
            >
              {interest}
            </button>
          ))}
        </div>
        <div>
          {interests2.map((interest, idx) => (
            <button
              id={ids[idx + 4]}
              value={interest}
              type="button"
              onClick={onClickHandler}
              class="interest_row"
            >
              {interest}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
