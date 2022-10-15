import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faSortAmountAsc } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";
import CircleCarousel from "./CircleCarousel";
import SortSelect from "../../../components/main/SortSelect";
import { Grid } from "@mui/material";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import PreferenceCard from "./PreferenceCard";
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

const SortedBtn = styled(Block)`
  background-color: #202632;
  color: white;
  padding: 10px;
  border-radius: 18px;
  cursor: pointer;
`;

export default function ListContainer() {
  const preference = ["HOBBY", "PET"];
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
        <SortSelect />
      </Header>
      <UserSurveyCard isCreated={true} />

      <Header>
        <Block>
          <p>내가 참여한 설문</p>
        </Block>
        <SortSelect />
      </Header>
      <UserSurveyCard isCreated={false} />
    </Container>
  );
}
