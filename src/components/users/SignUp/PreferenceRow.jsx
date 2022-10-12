import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Title, Row, Rows, PreferenceButton } from "./SignUpCSS";
import { preferenceState } from "./SignUpState";

export default function PreferenceRow() {
  const interests = ["일상", "IT", "취미", "학습"];
  const interests2 = ["심리", "사회·정치", "선호도 조사", "+"];

  const [preference1Check, preference1CheckState] = useState(false);
  const [preference2Check, preference2CheckState] = useState(false);
  const [preference3Check, preference3CheckState] = useState(false);
  const [preference4Check, preference4CheckState] = useState(false);
  const [preference5Check, preference5CheckState] = useState(false);
  const [preference6Check, preference6CheckState] = useState(false);
  const [preference7Check, preference7CheckState] = useState(false);
  const [preference8Check, preference8CheckState] = useState(false);

  const ids = [
    "DAILY_LIFE",
    "IT",
    "HOBBY",
    "LEARNING",
    "PSYCHOLOGY",
    "SOCIAL_POLITICS",
    "PREFERENCE_RESEARCH",
    "interest_8",
  ];

  const [preference, setPreference] = useRecoilState(preferenceState);

  const onCheckHandler1 = (e) => {
    preference1CheckState(!preference1Check);
    if (!preference1Check) {
      setPreference([...preference, "DAILY_LIFE"]);
    } else {
      const index = preference.indexOf("DAILY_LIFE");
      setPreference(
        ...preference.slice(0, index),
        ...preference.slice(index + 1)
      );
    }
  };
  const onCheckHandler2 = (e) => {
    preference2CheckState(!preference2Check);
    if (!preference2Check) {
      setPreference([...preference, "IT"]);
    } else {
      const index = preference.indexOf("IT");

      setPreference(
        ...preference.slice(0, index),
        ...preference.slice(index + 1)
      );
    }
  };
  const onCheckHandler3 = (e) => {
    preference3CheckState(!preference3Check);
    if (!preference3Check) {
      setPreference([...preference, "PSYCHOLOGY"]);
    } else {
      const index = preference.indexOf("PSYCHOLOGY");

      setPreference(
        ...preference.slice(0, index),
        ...preference.slice(index + 1)
      );
    }
  };
  const onCheckHandler4 = (e) => {
    preference4CheckState(!preference4Check);

    if (!preference4Check) {
      setPreference([...preference, "LEARNING"]);
    } else {
      const index = preference.indexOf("LEARNING");

      setPreference(
        ...preference.slice(0, index),
        ...preference.slice(index + 1)
      );
    }
  };

  console.log(preference);

  return (
    <>
      <Title>관심사</Title>
      <Rows>
        <PreferenceButton
          className={preference1Check ? "checked" : "unchecked"}
          onClick={onCheckHandler1}
        >
          일상
        </PreferenceButton>
        <PreferenceButton
          className={preference2Check ? "checked" : "unchecked"}
          onClick={onCheckHandler2}
        >
          IT
        </PreferenceButton>
        <PreferenceButton
          className={preference3Check ? "checked" : "unchecked"}
          onClick={onCheckHandler3}
        >
          심리
        </PreferenceButton>
        <PreferenceButton
          className={preference4Check ? "checked" : "unchecked"}
          onClick={onCheckHandler4}
        >학습</PreferenceButton>
      </Rows>
    </>
  );
}
