import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
const SProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 100%;
  margin-top: 25px;
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

const Image = styled.div`
  position: absolute;
  background-color: gray;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  width: 100%;
  h1 {
    font-weight: 800;
    font-size: 30px;
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
  width: 50%;
`;

function Profile() {
  return (
    <SProfile>
      <ProfileImg>
        <Image />
      </ProfileImg>
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
          <Type>Gender:</Type>
          <UserInput>Female</UserInput>
        </Line>
        <Line>
          <Type>Age:</Type>
          <UserInput>28</UserInput>
        </Line>
        <Line>
          <Type>Job:</Type>
          <UserInput>UI designer</UserInput>
        </Line>
      </LineWrapper>
    </SProfile>
  );
}
export default Profile;
