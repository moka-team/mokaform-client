import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import CircleCarousel from "./CircleCarousel";
import UserSurveyCard from "./UserCreatedSurveyCard";
import UserCreatedSurveyCard from "./UserCreatedSurveyCard";
import UserParticipatedSurveyCard from "./UserParticipatedSurveyCard";
import SortSelect from "../../common/SortSelect";
import { useRecoilValue } from "recoil";
import { userState } from "../../../authentication/userState";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
`;

const Box = styled.div`
  display: flex;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 50px;
`;

const Block = styled.div`
  display: flex;
  p {
    margin-right: 10px;
    font-size: 17px;
    font-weight: 600;
  }
`;

export default function ListContainer() {
  const user = useRecoilValue(userState);
  return (
    <Container>
      <Header>
        <Block>
          <p>나의 관심사</p>
          <FontAwesomeIcon icon={faEdit} color="gray" />
        </Block>
      </Header>
      <CircleCarousel />
      <Header>
        <Box>
          <Block>
            <p>내가 만든 설문</p>
          </Block>
          <Link to={`/survey/${user.id}/manage`} surveyId={1}>
            <FontAwesomeIcon icon={faEdit} color="gray" />
          </Link>
        </Box>
        <SortSelect page={"myCreate"} />
      </Header>
      <UserSurveyCard isCreated={true} />
      <Header>
        <Box>
          <Block>
            <p>내가 참여한 설문</p>
          </Block>
          <FontAwesomeIcon icon={faEdit} color="gray" />
        </Box>
        <SortSelect page={"mySubmit"} />
      </Header>
      <UserSurveyCard isCreated={false} />
    </Container>
  );
}
