import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import CircleCarousel from "./CircleCarousel";
import SortSelect from "./SortSelect";
import UserSurveyCard from "./UserSurveyCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
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
        <Block>
          <p>내가 만든 설문</p>
        </Block>
        <SortSelect userId={1} />
      </Header>
      <UserSurveyCard isCreated={true} />

      <Header>
        <Block>
          <p>내가 참여한 설문</p>
        </Block>
        <SortSelect userId={1} />
      </Header>
      <UserSurveyCard isCreated={false} />
    </Container>
  );
}
