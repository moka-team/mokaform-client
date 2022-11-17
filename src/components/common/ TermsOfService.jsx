import React, { useRef } from "react";
import {
  Container,
  TextWrapper,
  Wrapper,
  Title,
  Message,
  DetailMessage,
  TextButton,
} from "./styled";

export default function TermsOfService() {
  const termsOfServiceRef = useRef(null);
  const termsOfServiceRef2 = useRef(null);
  const termsOfServiceRef3 = useRef(null);
  const termsOfServiceRef4 = useRef(null);
  const termsOfServiceRef5 = useRef(null);
  const termsOfServiceRef6 = useRef(null);
  const termsOfServiceRef7 = useRef(null);
  const termsOfServiceRef8 = useRef(null);
  const termsOfServiceRef9 = useRef(null);
  const termsOfServiceRef10 = useRef(null);

  const onClickText = (event) => {
    termsOfServiceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText2 = (event) => {
    termsOfServiceRef2.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText3 = (event) => {
    termsOfServiceRef3.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText4 = (event) => {
    termsOfServiceRef4.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText5 = (event) => {
    termsOfServiceRef5.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText6 = (event) => {
    termsOfServiceRef6.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText7 = (event) => {
    termsOfServiceRef7.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText8 = (event) => {
    termsOfServiceRef8.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText9 = (event) => {
    termsOfServiceRef9.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText10 = (event) => {
    termsOfServiceRef10.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Wrapper>
        <Title>모카폼 이용약관</Title>
        <TextWrapper>
          <Message>
            모카폼 서비스 이용약관은 다음과 같은 내용을 담고 있습니다.
          </Message>
          <TextButton onClick={onClickText}>여러분을 환영합니다.</TextButton>
          <TextButton onClick={onClickText2}>
            다양한 모카폼 서비스를 즐겨보세요.
          </TextButton>
          <TextButton onClick={onClickText3}>
            회원으로 가입하시면 모카폼 서비스를 보다 편리하게 이용할 수
            있습니다.
          </TextButton>
          <TextButton onClick={onClickText4}>
            여러분이 제공한 콘텐츠를 소중히 다룰 것입니다.
          </TextButton>
          <TextButton onClick={onClickText5}>
            여러분의 개인정보를 소중히 보호합니다.
          </TextButton>
          <TextButton onClick={onClickText6}>
            부득이 서비스 이용을 제한할 경우 합리적인 절차를 준수합니다.
          </TextButton>
          <TextButton onClick={onClickText7}>
            모카폼의 잘못은 모카폼이 책임집니다.
          </TextButton>
          <TextButton onClick={onClickText8}>
            언제든지 모카폼 서비스 이용계약을 해지하실 수 있습니다.
          </TextButton>
          <TextButton onClick={onClickText9}>
            서비스 중단 또는 변경 시 꼭 알려드리겠습니다.
          </TextButton>
          <TextButton onClick={onClickText10}>
            여러분이 쉽게 알 수 있도록 약관 및 운영정책을 게시하며 사전 공지 후
            개정합니다.
          </TextButton>
        </TextWrapper>
        <TextWrapper ref={termsOfServiceRef}>
          <Message>여러분을 환영합니다.</Message>
          <DetailMessage>
            모카폼 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본
            약관은 다양한 모카폼 서비스의 이용과 관련하여 모카폼 서비스를
            제공하는 모카폼 주식회사(이하 ‘모카폼’)와 이를 이용하는 모카폼
            서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러
            여러분의 모카폼 서비스 이용에 도움이 될 수 있는 유익한 정보를
            포함하고 있습니다.
          </DetailMessage>
          <DetailMessage>
            모카폼 서비스를 이용하시거나 모카폼 서비스 회원으로 가입하실 경우
            여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로,
            잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={termsOfServiceRef2}>
          <Message>다양한 모카폼 서비스를 즐겨보세요.</Message>
          <DetailMessage>
            모카폼은 www.mokaform.site 을 비롯한 모카 도메인의 웹사이트를 통해
            정보 검색, 다른 이용자와의 커뮤니케이션, 콘텐츠 제공 등 여러분의
            생활에 편리함을 더할 수 있는 다양한 서비스를 제공하고 있습니다.
            여러분은 PC, 휴대폰 등 인터넷 이용이 가능한 각종 단말기를 통해
            각양각색의 모카폼 서비스를 자유롭게 이용하실 수 있으며, 개별
            서비스들의 구체적인 내용은 각 서비스 상의 안내, 공지사항, 도움말
            등에서 쉽게 확인하실 수 있습니다.
          </DetailMessage>
          <DetailMessage>
            모카폼은 기본적으로 여러분 모두에게 동일한 내용의 서비스를
            제공합니다. 다만,'청소년보호법'등 관련 법령이나 기타 개별 서비스
            제공에서의 특별한 필요에 의해서 연령 또는 일정한 등급을 기준으로
            이용자를 구분하여 제공하는 서비스의 내용, 이용 시간, 이용 횟수 등을
            다르게 하는 등 일부 이용을 제한하는 경우가 있습니다. 자세한 내용은
            역시 각 서비스 상의 안내, 공지사항, 고객센터 도움말 등에서 확인하실
            수 있습니다.
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={termsOfServiceRef3}>
          <Message>
            회원으로 가입하시면 모카폼 서비스를 보다 편리하게 이용할 수
            있습니다.
          </Message>
          <DetailMessage>
            여러분은 본 약관을 읽고 동의하신 후 회원 가입을 신청하실 수 있으며,
            모카폼은 이에 대한 승낙을 통해 회원 가입 절차를 완료하고 여러분께
            모카폼 서비스 이용 계정(이하 ‘계정’)을 부여합니다. 계정이란 회원이
            모카폼 서비스에 로그인한 이후 이용하는 각종 서비스 이용 이력을 회원
            별로 관리하기 위해 설정한 회원 식별 단위를 말합니다.
          </DetailMessage>
          <DetailMessage>
            회원은 자신의 계정을 통해 좀더 다양한 모카폼 서비스를 보다 편리하게
            이용할 수 있습니다.
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={termsOfServiceRef4}>
          <Message>여러분이 제공한 콘텐츠를 소중히 다룰 것입니다.</Message>
          <DetailMessage>
            모카폼은 여러분이 게재한 설문들이 모카폼 서비스를 통해 다른
            이용자들에게 전달되어 우리 모두의 삶을 더욱 풍요롭게 해줄 것을
            기대합니다. 설문은 여러분이 타인 또는 자신이 보게 할 목적으로 모카폼
            서비스 상에 게재한 부호, 문자, 음성, 음향, 그림, 사진, 동영상, 링크
            등으로 구성된 각종 콘텐츠 자체 또는 파일을 말합니다.
          </DetailMessage>
          <DetailMessage>
            모카폼은 여러분의 생각과 감정이 표현된 콘텐츠를 소중히 보호할 것을
            약속 드립니다. 여러분이 제작하여 게재한 게시물에 대한 지식재산권
            등의 권리는 당연히 여러분에게 있습니다.
          </DetailMessage>
          <DetailMessage>
            한편, 모카폼은 서비스를 통해 여러분이 게재한 게시물을 적법하게
            제공하려면 해당 콘텐츠에 대한 저장, 복제, 수정, 공중 송신, 전시,
            배포, 2차적 저작물 작성(단, 번역에 한함) 등의 이용 권한(기한과 지역
            제한에 정함이 없으며, 별도 대가 지급이 없는 라이선스)이 필요합니다.
            게시물 게재로 여러분은 네이버에게 그러한 권한을 부여하게 되므로,
            여러분은 이에 필요한 권리를 보유하고 있어야 합니다.
          </DetailMessage>
          <DetailMessage>
            모카폼은 여러분이 부여해 주신 콘텐츠 이용 권한을 저작권법 등 관련
            법령에서 정하는 바에 따라 모카폼 서비스 내 노출, 서비스 홍보를 위한
            활용, 서비스 운영, 개선 및 새로운 서비스 개발을 위한 연구, 웹 접근성
            등 법률상 의무 준수, 수집 및 링크 허용을 위해서만 제한적으로 행사할
            것입니다. 만약, 그 밖의 목적을 위해 부득이 여러분의 콘텐츠를
            이용하고자 할 경우엔 사전에 여러분께 설명을 드리고 동의를 받도록
            하겠습니다.
          </DetailMessage>
          <DetailMessage>
            또한 여러분이 제공한 소중한 콘텐츠는 모카폼 서비스를 개선하고 새로운
            모카폼 서비스를 제공하기 위해 인공지능 분야 기술 등의 연구 개발
            목적으로 모카폼에서 사용될 수 있습니다. 모카는 지속적인 연구 개발을
            통해 여러분께 좀 더 편리하고 유용한 서비스를 제공해 드릴 수 있도록
            최선을 다하겠습니다.
          </DetailMessage>
          <DetailMessage>
            모카폼은 여러분이 자신이 제공한 콘텐츠에 대한 모카폼 또는 다른
            이용자들의 이용 또는 접근을 보다 쉽게 관리할 수 있도록 다양한 수단을
            제공하기 위해 노력하고 있습니다. 여러분은 모카폼 서비스 내에 설문
            삭제, 비공개 등의 관리기능이 제공되는 경우 이를 통해 직접 타인의
            이용 또는 접근을 통제할 수 있고, 고객센터를 통해서도 콘텐츠의 삭제,
            비공개, 검색결과 제외 등의 조치를 요청할 수 있습니다. 다만, 일부
            모카폼 서비스의 경우 삭제, 비공개 등의 처리가 어려울 수 있으며,
            이러한 내용은 각 서비스 상의 안내, 공지사항 등에서 확인해 주시길
            부탁 드립니다.
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={termsOfServiceRef5}>
          <Message>여러분의 개인정보를 소중히 보호합니다.</Message>
          <DetailMessage>
            모카폼은 서비스의 원활한 제공을 위하여 회원이 동의한 목적과 범위
            내에서만 개인정보를 수집.이용하며, 개인정보 보호 관련 법령에 따라
            안전하게 관리합니다. 모카폼은 이용자 및 회원에 대해 관련 개인정보를
            안전하게 처리하기 위하여 기울이는 노력이나 기타 상세한
            사항은 개인정보 처리방침에서 확인하실 수 있습니다.
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={termsOfServiceRef6}>
          <Message>
            부득이 서비스 이용을 제한할 경우 합리적인 절차를 준수합니다.
          </Message>
          <DetailMessage>
            모카폼은 다양한 정보와 의견이 담긴 여러분의 콘텐츠를 소중히 다룰
            것을 약속 드립니다만, 여러분이 게재한 게시물이 관련 법령, 본 약관,
            게시물 운영정책, 각 개별 서비스에서의 약관, 운영정책 등에 위배되는
            경우, 부득이 이를 비공개 또는 삭제 처리하거나 게재를 거부할 수
            있습니다. 다만, 이것이 네이버가 모든 콘텐츠를 검토할 의무가 있다는
            것을 의미하지는 않습니다.
          </DetailMessage>
          <DetailMessage>
            또한 여러분이 관련 법령, 본 약관, 계정 및 게시물 운영정책, 각 개별
            서비스에서의 약관, 운영정책 등을 준수하지 않을 경우, 모카폼은
            여러분의 관련 행위 내용을 확인할 수 있으며, 그 확인 결과에 따라
            모카폼은 서비스 이용에 대한 주의를 당부하거나, 모카폼 서비스 이용을
            일부 또는 전부, 일시 또는 영구히 정지시키는 등 그 이용을 제한할 수
            있습니다. 한편, 이러한 이용 제한에도 불구하고 더 이상 모카폼 서비스
            이용계약의 온전한 유지를 기대하기 어려운 경우엔 부득이 여러분과의
            이용계약을 해지할 수 있습니다.
          </DetailMessage>
          <DetailMessage>
            부득이 여러분의 서비스 이용을 제한해야 할 경우 명백한 법령 위반이나
            타인의 권리침해로서 긴급한 위험 또는 피해 차단이 요구되는 사안
            외에는 위와 같은 단계적 서비스 이용제한 원칙을 준수 하겠습니다.
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={termsOfServiceRef7}>
          <Message>모카폼의 잘못은 모카폼이 책임집니다.</Message>
          <DetailMessage>
            모카폼은 여러분이 모카폼 서비스를 이용함에 있어 모카폼의 고의 또는
            과실로 인하여 손해를 입게 될 경우 관련 법령에 따라 여러분의 손해를
            배상합니다. 다만, 천재지변 또는 이에 준하는 불가항력으로 인하여
            모카폼이 서비스를 제공할 수 없거나 이용자의 고의 또는 과실로 인하여
            서비스를 이용할 수 없어 발생한 손해에 대해서 모카폼은 책임을
            부담하지 않습니다.
          </DetailMessage>
          <DetailMessage>
            그리고 모카폼이 손해배상책임을 부담하는 경우에도 통상적으로 예견이
            불가능하거나 특별한 사정으로 인한 특별 손해 또는 간접 손해, 기타
            징벌적 손해에 대해서는 관련 법령에 특별한 규정이 없는 한 책임을
            부담하지 않습니다.
          </DetailMessage>
          <DetailMessage>
            한편, 모카폼 서비스를 매개로 한 여러분과 다른 회원 간 또는 여러분과
            비회원 간의 의견 교환, 거래 등에서 발생한 손해나 여러분이 서비스
            상에 게재된 타인의 게시물 등의 콘텐츠를 신뢰함으로써 발생한 손해에
            대해서도 모카폼은 특별한 사정이 없는 한 이에 대해 책임을 부담하지
            않습니다.
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={termsOfServiceRef8}>
          <Message>
            언제든지 모카폼 서비스 이용계약을 해지하실 수 있습니다.
          </Message>
          <DetailMessage>
            모카폼에게는 참 안타까운 일입니다만, 회원은 언제든지 모카폼 서비스
            이용계약 해지를 신청하여 회원에서 탈퇴할 수 있으며, 이 경우 모카폼은
            관련 법령 등이 정하는 바에 따라 이를 지체 없이 처리하겠습니다.
          </DetailMessage>
          <DetailMessage>
            모카폼 서비스 이용계약이 해지되면, 관련 법령 및 개인정보처리방침에
            따라 모카폼이 해당 회원의 정보를 보유할 수 있는 경우를 제외하고,
            해당 회원 계정에 부속된 게시물 일체를 포함한 회원의 모든 데이터는
            소멸됨과 동시에 복구할 수 없게 됩니다.{" "}
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={termsOfServiceRef9}>
          <Message>서비스 중단 또는 변경 시 꼭 알려드리겠습니다.</Message>
          <DetailMessage>
            모카폼은 서비스 이용에 필요한 주요사항을 적시에 잘 안내해 드릴 수
            있도록 힘쓰겠습니다. 회원에게 통지를 하는 경우 전자메일, 서비스 내
            알림 또는 기타 적절한 전자적 수단을 통해 개별적으로 알려 드릴
            것이며, 다만 회원 전체에 대한 통지가 필요할 경우엔 7일
            이상 www.mokaform.site을 비롯한 모카폼 도메인의 웹사이트 초기 화면
            또는 공지사항 등에 관련 내용을 게시하도록 하겠습니다.
          </DetailMessage>
          <DetailMessage>
            모카폼은 여러분의 소중한 의견에 귀 기울이겠습니다. 여러분은 언제든지
            고객센터를 통해 서비스 이용과 관련된 의견이나 개선사항을 전달할 수
            있으며, 모카폼은 합리적 범위 내에서 가능한 그 처리과정 및 결과를
            여러분께 전달할 수 있도록 하겠습니다.
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={termsOfServiceRef10}>
          <Message>
            여러분이 쉽게 알 수 있도록 약관 및 운영정책을 게시하며 사전 공지 후
            개정합니다.
          </Message>
          <DetailMessage>
            모카폼은 본 약관의 내용을 여러분이 쉽게 확인할 수 있도록 서비스 초기
            화면에 게시하고 있습니다.
          </DetailMessage>
          <DetailMessage>
            모카폼은 수시로 본 약관, 계정 및 게시물 운영정책을 개정할 수
            있습니다만, 관련 법령을 위배하지 않는 범위 내에서 개정할 것이며,
            사전에 그 개정 이유와 적용 일자를 서비스 내에 알리도록 하겠습니다.
            또한 여러분에게 불리할 수 있는 중대한 내용의 약관 변경의 경우에는
            최소 30일 이전에 해당 서비스 내 공지하고 별도의 전자적
            수단(전자메일, 서비스 내 알림 등)을 통해 개별적으로 알릴 것입니다.
          </DetailMessage>
          <DetailMessage>
            모카폼은 변경된 약관을 게시한 날로부터 효력이 발생되는 날까지 약관
            변경에 대한 여러분의 의견을 기다립니다. 위 기간이 지나도록 여러분의
            의견이 모카폼에 접수되지 않으면, 여러분이 변경된 약관에 따라
            서비스를 이용하는 데에 동의하는 것으로 간주됩니다. 모카폼으로서는
            매우 안타까운 일이지만, 여러분이 변경된 약관에 동의하지 않는 경우
            변경된 약관의 적용을 받는 해당 서비스의 제공이 더 이상 불가능하게 될
            수 있습니다.
          </DetailMessage>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
}
