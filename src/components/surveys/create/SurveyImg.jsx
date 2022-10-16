import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { surveyImage } from "../../../atoms";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  position: relative;
  width: 300px;
  height: 150px;
`;

const DefaultImage = styled.div`
  position: absolute;
  background-color: gray;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Image = styled.img`
  position: absolute;
  background-color: gray;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UploadBtn = styled.label`
  cursor: pointer;
  z-index: 3;
  margin-top: -30px;
`;
export default function SurveyImg() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [surveyImageInput, setSurveyImage] = useRecoilState(surveyImage);

  return (
    <Container>
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
    </Container>
  );
}
