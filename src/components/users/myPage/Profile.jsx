import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useContext } from "react";
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
import { UserContext } from "../../../authentication/userState";

function Profile() {
  const user = useContext(UserContext);
  const [selectedImage, setSelectedImage] = useState(null);
  // const [profile, setProfile] = useState("");
  // const fetchProfile = async () => {
  //   const response = await apiClient.get("/api/v1/users/my");
  //   setProfile(response.data.data);
  // };

  // useEffect(() => {
  //   fetchProfile();
  // },[]);

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
            src={user.gender === "FEMALE" ? "/img/girl.png" : "/img/boy.png"}
          />
        )}
      </ProfileImg>
      <UploadBtn htmlFor="profileImg">
        <FontAwesomeIcon icon={faCamera} color="white" />
      </UploadBtn>

      <UserInfo>
        <h1>{user.nickname}</h1>
        <h2>{user.email}</h2>
      </UserInfo>
      <LineHeader>
        <p>PROFILE</p>
      </LineHeader>
      <LineWrapper>
        <Line>
          <Type>성별:</Type>
          <UserInput>{user.gender === "FEMALE" ? "여성" : "남성"}</UserInput>
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
            }[user.ageGroup]
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
            }[user.job]
          }
        </Line>
      </LineWrapper>
    </SProfile>
  );
}
export default Profile;
