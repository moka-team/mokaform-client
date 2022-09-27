import styled from "styled-components";

function SocialLoginContainer() {
  const SocialLoginContainer = styled.div`
    margin-top: 30px;
  `;

  const KaKaoLoginImg = styled.img`
    width: 100%;
    padding: 0;
    border-radius: 10px;
    border: none;

    object-fit: scale-down;
  `;

  return (
    <SocialLoginContainer>
      <KaKaoLoginImg src="./img/kakao_login_large_wide.png" onClick="" />
    </SocialLoginContainer>
  );
}

export default SocialLoginContainer;
