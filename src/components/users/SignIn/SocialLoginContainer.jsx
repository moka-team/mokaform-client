import styled from "styled-components";

const SocialLoginWrapper = styled.div`
  margin-top: 30px;
`;

const KaKaoLoginImg = styled.img`
  width: 100%;
  padding: 0;
  border-radius: 10px;
  border: none;

  object-fit: scale-down;
`;

function SocialLoginContainer() {
  return (
    <SocialLoginWrapper>
      <KaKaoLoginImg src="./img/kakao_login_large_wide.png" onClick="" />
    </SocialLoginWrapper>
  );
}

export default SocialLoginContainer;
