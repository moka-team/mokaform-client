import React from "react";
import AgeRow from "./AgeRow";
import InterestRow from "./InterestRow";
import JobRow from "./JobRow";
import SexRow from "./SexRow";
import "./SignOptionForm.css";

export default function SignOptionForm() {
  const onNextBtnClickHandler = (event) => {};
  const onCompleteBtnClickHandler = (event) => {};

  return (
    <>
      <div className="sign_option_container">
        <form>
          <AgeRow></AgeRow>
          <SexRow></SexRow>
          <button type="button" onClick={onNextBtnClickHandler} class="button">
            다음
          </button>
        </form>
      </div>
      <div className="sign_option_container2">
        <form>
          <JobRow></JobRow>
          <InterestRow></InterestRow>
          <button
            type="button"
            onClick={onCompleteBtnClickHandler}
            class="button"
          >
            가입 완료
          </button>
        </form>
      </div>
    </>
  );
}
