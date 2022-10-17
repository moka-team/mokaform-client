import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { userState } from "../../../authentication/userState";

const SProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  min-height: 100vh;
  padding-top: 25px;
  background-color: #202632;
`;

const ProfileImg = styled.div`
  position: relative;
  margin-top: 40px;
  width: 50%;
  background-color: gray;
  border-radius: 50%;
  &::after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
`;

const DefaultImage = styled.img`
  position: absolute;
  background-color: gray;
  margin-top: 5%;
  margin-left: 10%;
  border-radius: 50%;
  width: 80%;
  height: 80%;
  object-fit: cover;
`;

const Image = styled.img`
  position: absolute;
  background-color: gray;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UploadBtn = styled.label`
  cursor: pointer;
  margin-top: -20px;
  z-index: 3;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  width: 100%;
  h1 {
    font-weight: 800;
    font-size: 25px;
    color: #f9fafb;
  }
  h2 {
    color: gray;
    margin-top: 10px;
  }
`;

const LineHeader = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-top: 100px;
  p {
    color: #f9fafb;
    font-weight: 600;
  }
`;
const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const Line = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const Type = styled.div`
  color: gray;
  width: 50%;
`;

const UserInput = styled.div`
  color: #f9fafb;
  width: 50%;
`;

function Profile() {
  const [selectedImage, setSelectedImage] = useState(null);
  // 추후 삭제
  const user = useRecoilValue(userState);
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
        <FontAwesomeIcon icon={faEdit} color="gray" />
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
              FREELANCER:<UserInput>프리랜서</UserInput>,
              JOB_SEEKER:<UserInput>취업준비생</UserInput>,
              JOBLESS:<UserInput>무직</UserInput>
            }[user.job]
          }
        </Line>
      </LineWrapper>
    </SProfile>
  );
}
export default Profile;
