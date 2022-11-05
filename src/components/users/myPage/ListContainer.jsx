import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../authentication/userState";
import SortSelect from "../../common/SortSelect";
import CircleCarousel from "./CircleCarousel";
import { Block, Box, Header, RightContainer } from "./styled";
import UserSurveyCard from "./UserSurveyCard";

export default function ListContainer() {
  const user = useContext(UserContext);
  return (
    <RightContainer>
      <Header>
        <Block>
          <p>나의 관심사</p>
        </Block>
      </Header>
      <CircleCarousel />
      <Header>
        <Box>
          <Block>
            <p>내가 만든 설문</p>
          </Block>
          <Link to={`/survey/${user.userId}/manage`}>
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
        </Box>
        <SortSelect page={"mySubmit"} />
      </Header>
      <UserSurveyCard isCreated={false} />
    </RightContainer>
  );
}
