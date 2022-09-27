import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faSortAmountAsc } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";
import CircleCarousel from "./CircleCarousel";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
  }
`;

const SortedBtn = styled(Block)`
  background-color: #202632;
  color: white;
  padding: 10px;
  border-radius: 18px;
  cursor: pointer;
`;
const Interest = styled.div`
  width: 100%;
  height: 25%;
`;
const CreatedSurvey = styled.div`
  width: 100%;
  height: 35%;
`;
const ParticipatedSurvey = styled.div`
  width: 100%;
  height: 35%;
`;

function ListContainer() {
  return (
    <Container>
      <Header>
        <Block>
          <p>나의 관심사</p>
          <FontAwesomeIcon icon={faEdit} color="gray" />
        </Block>
      </Header>
      <Interest>
        <CircleCarousel />
      </Interest>
      <Header>
        <p>내가 만든 설문</p>
        <SortedBtn>
          <p>Sorted</p>
          <FontAwesomeIcon icon={faSortAmountAsc} color="white" />
        </SortedBtn>
      </Header>
      <CreatedSurvey>
        <Carousel />
      </CreatedSurvey>
      <Header>
        <p>내가 참여한 설문</p>
        <SortedBtn>
          <p>Sorted</p>
          <FontAwesomeIcon icon={faSortAmountAsc} color="white" />
        </SortedBtn>
      </Header>
      <ParticipatedSurvey>
        <Carousel />
      </ParticipatedSurvey>
    </Container>
  );
}

export default ListContainer;
