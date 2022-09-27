import React, { useState, useEffect } from "react";
import "./Row.css";

export default function AgeRow() {
  const ages = ["10대", "20대", "30대", "40대", "50대+"];
  const ids = ["age_1", "age_2", "age_3", "age_4", "age_5"];

  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  const onClickHandler = (event) => {
    if (prevClick !== null && prevClick !== event.target.id) {
      let prev = document.getElementById(prevClick);
      prev.style.color = "black";
      prev.style.fontWeight = 400;
      prev.style.backgroundColor = "#ffffff";
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
        <h3 class="row_title">연령대</h3>
        <div>
          {ages.map((age, idx) => (
            <button
              id={ids[idx]}
              value={age}
              type="button"
              onClick={onClickHandler}
              className={"row"}
            >
              {age}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
