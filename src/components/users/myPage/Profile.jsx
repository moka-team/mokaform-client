import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../api/client";
import {
  DefaultImage,
  Image,
  Line,
  LineHeader,
  LineWrapper,
  ProfileImg,
  SProfile,
  Type,
  UploadBtn,
  UserInfo,
  UserInput,
} from "./styled";

function Profile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [profile, setProfile] = useState("");
  const fetchProfile = async () => {
    console.log("hi");
    const response = await apiClient.get("/api/v1/users/my");
    setProfile(response.data.data);
  };
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, []);

  const onClickHandler = (event) => {
    navigate("/withdrawal");
  };

  return (
    <SProfile>
      <input
        type="file"
        id="profileImg"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
        style={{ display: "none" }}
      />
      <ProfileImg>
        {selectedImage ? (
          <Image src={URL.createObjectURL(selectedImage)} />
        ) : (
          // 추후 변경 예정
          <DefaultImage
            src={profile.gender === "FEMALE" ? "/img/girl.png" : "/img/boy.png"}
          />
        )}
      </ProfileImg>
      <UploadBtn htmlFor="profileImg">
        <FontAwesomeIcon icon={faCamera} color="white" />
      </UploadBtn>

      <UserInfo>
        <h1>{profile.nickname}</h1>
        <h2>{profile.email}</h2>
      </UserInfo>
      <LineHeader>
        <p>PROFILE</p>
      </LineHeader>
      <LineWrapper>
        <Line>
          <Type>성별:</Type>
          <UserInput>{profile.gender === "FEMALE" ? "여성" : "남성"}</UserInput>
        </Line>
        <Line>
          <Type>연령대:</Type>
          {
            {
              TEENAGER: <UserInput>10대</UserInput>,
              TWENTIES: <UserInput>20대</UserInput>,
              THIRTIES: <UserInput>30대</UserInput>,
              FORTIES: <UserInput>40대</UserInput>,
              FIFTIES: <UserInput>50대</UserInput>,
            }[profile.ageGroup]
          }
        </Line>
        <Line>
          <Type>직업:</Type>
          {
            {
              STUDENT: <UserInput>학생</UserInput>,
              OFFICE_WORKERS: <UserInput>직장인</UserInput>,
              PUBLIC_OFFICIAL: <UserInput>공무원</UserInput>,
              SELF_EMPLOYED: <UserInput>자영업</UserInput>,
              HOUSEWIFE: <UserInput>주부</UserInput>,
              FREELANCER: <UserInput>프리랜서</UserInput>,
              JOB_SEEKER: <UserInput>취업준비생</UserInput>,
              JOBLESS: <UserInput>무직</UserInput>,
            }[profile.job]
          }
        </Line>
      </LineWrapper>
      <LineHeader>
        <button onClick={onClickHandler}>탈퇴하기</button>
      </LineHeader>
    </SProfile>
  );
}
export default Profile;
