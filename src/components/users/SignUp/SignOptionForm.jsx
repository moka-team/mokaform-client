import React from "react";
import AgeRow from "./AgeRow";
import InterestRow from "./InterestRow";
import JobRow from "./JobRow";
import SexRow from "./SexRow";
import "./SignOptionForm.css";

export default function SignOptionForm() {
  return (
    <>
      <AgeRow></AgeRow>
      <SexRow></SexRow>
      <JobRow></JobRow>
      <InterestRow></InterestRow>
    </>
  );
}
