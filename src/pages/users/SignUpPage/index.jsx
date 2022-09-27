import React from "react";
import SignEssentialForm from "../../../components/users/SignUp/SignEssentialForm";
import SignOptionForm from "../../../components/users/SignUp/SignOptionForm";

export default function index() {
  return (
    <div>
      <SignEssentialForm></SignEssentialForm>
      <SignOptionForm></SignOptionForm>
    </div>
  );
}
