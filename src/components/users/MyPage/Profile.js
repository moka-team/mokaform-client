import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const SProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 100%;
  padding-top: 25px;
  background-color: #202632;
`;

const ProfileImg = styled.div`
  position: relative;
  width: 50%;
  &::after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
`;

const DefaultImage = styled.div`
  position: absolute;
  background-color: gray;
  border-radius: 50%;
  width: 100%;
  height: 100%;
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
          <DefaultImage />
        )}
      </ProfileImg>
      <UploadBtn for="profileImg">
        <FontAwesomeIcon icon={faCamera} color="white" />
      </UploadBtn>

      <UserInfo>
        <h1>모카 유저</h1>
        <h2>moka@form.com</h2>
      </UserInfo>
      <LineHeader>
        <p>PROFILE</p>
        <FontAwesomeIcon icon={faEdit} color="gray" />
      </LineHeader>
      <LineWrapper>
        <Line>
          <Type>성별:</Type>
          <UserInput>Female</UserInput>
        </Line>
        <Line>
          <Type>나이:</Type>
          <UserInput>28</UserInput>
        </Line>
        <Line>
          <Type>직업:</Type>
          <UserInput>UI designer</UserInput>
        </Line>
      </LineWrapper>
    </SProfile>
  );
}
export default Profile;
