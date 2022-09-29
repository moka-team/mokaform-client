import styled from "styled-components";

const SocialLoginWrapper = styled.div`
  margin-top: 10px;
`;

const KaKaoLoginImg = styled.img`
  width: 100%;
  height: 62.11px;
  padding: 0;
  border-radius: 10px;
  border: none;

  object-fit: cover;
`;

function SocialLoginContainer() {
  return (
    <SocialLoginWrapper>
      <KaKaoLoginImg src="./img/kakao_login_large_wide.png" onClick="" />
    </SocialLoginWrapper>
  );
}

export default SocialLoginContainer;
