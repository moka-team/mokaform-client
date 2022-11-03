import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Title, Row, Rows, PreferenceButton } from "./SignUpCSS";
import { preferenceState } from "./SignUpState";

export default function PreferenceRow({preference, getPreference}) {
  const [preference1Check, preference1CheckState] = useState(false);
  const [preference2Check, preference2CheckState] = useState(false);
  const [preference3Check, preference3CheckState] = useState(false);
  const [preference4Check, preference4CheckState] = useState(false);
  const [preference5Check, preference5CheckState] = useState(false);
  const [preference6Check, preference6CheckState] = useState(false);
  const [preference7Check, preference7CheckState] = useState(false);
  const [preference8Check, preference8CheckState] = useState(false);
  const onCheckHandler1 = (e) => {
    preference1CheckState(!preference1Check);
    if (!preference1Check) {
      getPreference([...preference, "DAILY_LIFE"]);
    } else {
      getPreference(
        preference.filter((preference) => preference !== "DAILY_LIFE")
      );
    }
  };
  const onCheckHandler2 = (e) => {
    preference2CheckState(!preference2Check);
    if (!preference2Check) {
      getPreference([...preference, "IT"]);
    } else {
      getPreference(preference.filter((preference) => preference !== "IT"));
    }
  };
  const onCheckHandler3 = (e) => {
    preference3CheckState(!preference3Check);
    if (!preference3Check) {
      getPreference([...preference, "PSYCHOLOGY"]);
    } else {
      getPreference(
        preference.filter((preference) => preference !== "PSYCHOLOGY")
      );
    }
  };
  const onCheckHandler4 = (e) => {
    preference4CheckState(!preference4Check);

    if (!preference4Check) {
      getPreference([...preference, "LEARNING"]);
    } else {
      getPreference(
        preference.filter((preference) => preference !== "LEARNING")
      );
    }
  };
  const onCheckHandler5 = (e) => {
    preference5CheckState(!preference5Check);

    if (!preference5Check) {
      getPreference([...preference, "HOBBY"]);
    } else {
      getPreference(preference.filter((preference) => preference !== "HOBBY"));
    }
  };
  const onCheckHandler6 = (e) => {
    preference6CheckState(!preference6Check);

    if (!preference6Check) {
      getPreference([...preference, "SOCIAL_POLITICS"]);
    } else {
      getPreference(
        preference.filter((preference) => preference !== "SOCIAL_POLITICS")
      );
    }
  };
  const onCheckHandler7 = (e) => {
    preference7CheckState(!preference7Check);

    if (!preference7Check) {
      getPreference([...preference, "PREFERENCE_RESEARCH"]);
    } else {
      getPreference(
        preference.filter((preference) => preference !== "PREFERENCE_RESEARCH")
      );
    }
  };
  const onCheckHandler8 = (e) => {
    preference8CheckState(!preference8Check);

    if (!preference8Check) {
      getPreference([...preference, "PET"]);
    } else {
      getPreference(preference.filter((preference) => preference !== "PET"));
    }
  };

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
        >
          학습
        </PreferenceButton>
      </Rows>
      <Rows>
        <PreferenceButton
          className={preference5Check ? "checked" : "unchecked"}
          onClick={onCheckHandler5}
        >
          취미
        </PreferenceButton>
        <PreferenceButton
          className={preference6Check ? "checked" : "unchecked"}
          onClick={onCheckHandler6}
        >
          사회·정치
        </PreferenceButton>
        <PreferenceButton
          className={preference7Check ? "checked" : "unchecked"}
          onClick={onCheckHandler7}
        >
          선호도 조사
        </PreferenceButton>
        <PreferenceButton
          className={preference8Check ? "checked" : "unchecked"}
          onClick={onCheckHandler8}
        >
          반려동물
        </PreferenceButton>
      </Rows>
    </>
  );
}
