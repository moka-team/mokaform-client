import { React, useEffect } from "react";
import CreateSurvey from "../../../components/surveys/create/general/CreateSurvey";
import { useRecoilValue } from "recoil";
import { userState } from "../../../authentication/userState";

export default function CreateSurvey2() {
  return <CreateSurvey></CreateSurvey>;
}
