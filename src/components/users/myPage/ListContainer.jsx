import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { useRecoilValue } from "recoil";
import { userState } from "../../../authentication/userState";
import { Link } from "react-router-dom";
import { RightContainer, Box, Header, Block } from "./styled";
import CircleCarousel from "./CircleCarousel";
import UserSurveyCard from "./UserSurveyCard";
import SortSelect from "../../common/SortSelect";

export default function ListContainer() {
  const user = useRecoilValue(userState);
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
