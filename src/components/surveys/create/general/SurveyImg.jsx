import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { surveyImage } from "../../../../atoms";
import { useCreateSurveyActions, useCreateSurveyValue } from "../surveyState";
import { Container2, UploadBtn, Wrapper } from "./styled";

export default function SurveyImg() {
  const { setSurveyImage } = useCreateSurveyActions();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Container2>
      <input
        type="file"
        id="surveyImg"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
          setSurveyImage(event.target.files[0]);
        }}
        style={{ display: "none" }}
      />
      <Wrapper>
        {selectedImage ? (
          <Image src={URL.createObjectURL(selectedImage)} />
        ) : (
          <DefaultImage />
        )}
      </Wrapper>
      <UploadBtn htmlFor="surveyImg">
        <FontAwesomeIcon icon={faCamera} color="white" fontSize="20px" />
      </UploadBtn>
    </Container2>
  );
}
