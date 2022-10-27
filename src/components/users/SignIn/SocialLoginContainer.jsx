import styled from "styled-components";

const SocialLoginWrapper = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const KaKaoLoginImg = styled.img`
  width: 400px;
  height: 50px;
  padding: 0;
  border-radius: 10px;
  border: none;

  object-fit: cover;
`;

function SocialLoginContainer() {
  return (
    <SocialLoginWrapper>
      <KaKaoLoginImg
        src={require("../../common/kakao_login_large_wide.png")}
        onClick=""
      />
    </SocialLoginWrapper>
  );
}

export default SocialLoginContainer;
