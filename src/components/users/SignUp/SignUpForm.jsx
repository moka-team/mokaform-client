import React, { useRef } from "react";
import AgeRow from "./AgeRow";
import InterestRow from "./InterestRow";
import JobRow from "./JobRow";
import SexRow from "./SexRow";
import "./SignUpForm.css";
import SignEssentialForm from "./SignEssentialForm";

export default function SignUpForm() {
  const signOptionRef = useRef(null);
  const signOptionRef2 = useRef(null);

  const onClickHandler = (event) => {
    signOptionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onNextBtnClickHandler = (event) => {
    signOptionRef2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onCompleteBtnClickHandler = (event) => {};

  return (
    <div>
      <>
        <div className="sign_essential_form_container">
          <div className="row_div">
            <h1 className="row_title2">SIGN UP | MOKA FORM</h1>
            <SignEssentialForm></SignEssentialForm>
            <div>
              <button type="button" onClick={onClickHandler} className="button">
                다음
              </button>
            </div>
          </div>
        </div>
        <div ref={signOptionRef} className="sign_option_container">
          <div className="row_div">
            <AgeRow></AgeRow>
            <SexRow></SexRow>
            <button
              type="button"
              onClick={onNextBtnClickHandler}
              className="button"
            >
              다음
            </button>
          </div>
        </div>
        <div ref={signOptionRef2} className="sign_option_container2">
          <div className="row_div">
            <JobRow></JobRow>
            <InterestRow></InterestRow>
            <button
              type="button"
              onClick={onCompleteBtnClickHandler}
              className="button"
            >
              가입 완료
            </button>
          </div>
        </div>
      </>
    </div>
  );
}
