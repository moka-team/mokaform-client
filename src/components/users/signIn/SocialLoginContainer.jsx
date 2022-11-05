import { SocialLoginWrapper, KaKaoLoginImg } from "./styled";

function SocialLoginContainer() {
  return (
    <SocialLoginWrapper>
      <KaKaoLoginImg src={require("../../common/kakao_login_large_wide.png")} />
    </SocialLoginWrapper>
  );
}

export default SocialLoginContainer;
