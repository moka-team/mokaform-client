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

export default function PrivacyPolicy() {
  const privacyPolicyRef = useRef(null);
  const privacyPolicyRef2 = useRef(null);
  const privacyPolicyRef3 = useRef(null);
  const privacyPolicyRef4 = useRef(null);
  const privacyPolicyRef5 = useRef(null);
  const privacyPolicyRef6 = useRef(null);
  const privacyPolicyRef7 = useRef(null);
  const privacyPolicyRef8 = useRef(null);
  const privacyPolicyRef9 = useRef(null);
  const privacyPolicyRef10 = useRef(null);
  const privacyPolicyRef11 = useRef(null);

  const onClickText = (event) => {
    privacyPolicyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText2 = (event) => {
    privacyPolicyRef2.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText3 = (event) => {
    privacyPolicyRef3.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText4 = (event) => {
    privacyPolicyRef4.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText5 = (event) => {
    privacyPolicyRef5.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText6 = (event) => {
    privacyPolicyRef6.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText7 = (event) => {
    privacyPolicyRef7.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText8 = (event) => {
    privacyPolicyRef8.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText9 = (event) => {
    privacyPolicyRef9.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText10 = (event) => {
    privacyPolicyRef10.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickText11 = (event) => {
    privacyPolicyRef11.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Wrapper>
        <Title>모카폼 개인정보 처리방침</Title>
        <TextWrapper>
          <Message>
            모카폼 서비스 개인정보처리방침은 다음과 같은 내용을 담고 있습니다.
          </Message>
          <TextButton onClick={onClickText}>
            제1조(개인정보의 처리 목적)
          </TextButton>
          <TextButton onClick={onClickText2}>
            제2조(개인정보의 처리 및 보유 기간)
          </TextButton>
          <TextButton onClick={onClickText3}>
            제3조(처리하는 개인정보의 항목)
          </TextButton>
          <TextButton onClick={onClickText4}>
            제4조(개인정보의 파기절차 및 파기방법)
          </TextButton>
          <TextButton onClick={onClickText5}>
            제5조(정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항)
          </TextButton>
          <TextButton onClick={onClickText6}>
            제6조(개인정보의 안전성 확보조치에 관한 사항)
          </TextButton>
          <TextButton onClick={onClickText7}>
            제7조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에
            관한 사항)
          </TextButton>
          <TextButton onClick={onClickText8}>
            제8조 (개인정보 보호책임자에 관한 사항)
          </TextButton>
          <TextButton onClick={onClickText9}>
            제9조(개인정보의 열람청구를 접수·처리하는 부서)
          </TextButton>
          <TextButton onClick={onClickText10}>
            제10조(정보주체의 권익침해에 대한 구제방법)
          </TextButton>
          <TextButton onClick={onClickText11}>
            제11조(개인정보 처리방침 변경)
          </TextButton>
        </TextWrapper>
        <TextWrapper ref={privacyPolicyRef}>
          <Message>제1조(개인정보의 처리 목적)</Message>
          <DetailMessage fWeight="500" tColor="black">
            {"<"}MOKA{">"}
            ('https://www.mokaform.site/'이하 'MOKAFORM')은(는) 다음의 목적을
            위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적
            이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는
            「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한
            조치를 이행할 예정입니다.
          </DetailMessage>
          <DetailMessage>
            1. 홈페이지 회원가입 및 관리 회원 가입의사 확인 <br /> 회원제 서비스
            제공에 따른 본인 식별·인증, 회원자격 유지·관리 목적으로 개인정보를
            처리합니다.
          </DetailMessage>
          <DetailMessage>
            2. 재화 또는 서비스 제공 <br />
            서비스 제공, 콘텐츠 제공, 맞춤서비스 제공을 목적으로 개인정보를
            처리합니다.
          </DetailMessage>
          <DetailMessage>
            3. 마케팅 및 광고에의 활용
            <br />
            신규 서비스(제품) 개발 및 맞춤 서비스 제공 등을 목적으로 개인정보를
            처리합니다.
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={privacyPolicyRef2}>
          <Message>제2조(개인정보의 처리 및 보유 기간)</Message>
          <DetailMessage>
            ① {"<"}MOKA{">"}은(는) 법령에 따른 개인정보 보유·이용기간 또는
            정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간
            내에서 개인정보를 처리·보유합니다.② 각각의 개인정보 처리 및 보유
            기간은 다음과 같습니다.
          </DetailMessage>
          <DetailMessage>
            ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
          </DetailMessage>
          <DetailMessage>
            1.{"<"}홈페이지 회원가입 및 관리{">"}
            <br />
            {"<"}홈페이지 회원가입 및 관리{">"}와 관련한 개인정보는 수집.이용에
            관한 동의일로부터{"<"}5년
            {">"}까지 위 이용목적을 위하여 보유.이용됩니다. <br />
            보유근거 : 계약 또는 청약철회 등에 관한 기록 : 5년 <br /> 관련법령 :
            계약 또는 청약철회 등에 관한 기록 : 5년
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={privacyPolicyRef3}>
          <Message>
            제3조(처리하는 개인정보의 항목)
            <DetailMessage>
              ① {"<"}MOKA{">"}은(는) 다음의 개인정보 항목을 처리하고 있습니다.
            </DetailMessage>
          </Message>
          <DetailMessage>
            {" "}
            1 {"<"}홈페이지 회원가입 및 관리{">"}
            <br /> 필수항목 : 이메일, 비밀번호, 로그인ID, 성별, 직업, 관심사,
            나이
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={privacyPolicyRef4}>
          <Message>제4조(개인정보의 파기절차 및 파기방법)</Message>
          <DetailMessage>
            ① {"<"}MOKA{">"} 은(는) 개인정보 보유기간의 경과, 처리목적 달성 등
            개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를
            파기합니다.
          </DetailMessage>
          <DetailMessage>
            ② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이
            달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야
            하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나
            보관장소를 달리하여 보존합니다.<br></br>1. 법령 근거 :<br />
            2. 보존하는 개인정보 항목 : 계좌정보, 거래날짜
          </DetailMessage>
          <DetailMessage>
            ③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.1. 파기절차{"<"}
            MOKA{">"} 은(는) 파기 사유가 발생한 개인정보를 선정하고, {"<"}MOKA
            {">"} 의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
          </DetailMessage>
          <DetailMessage>
            2. 파기방법 <br />
            전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을
            사용합니다
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={privacyPolicyRef5}>
          <Message>
            제5조(정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항)
          </Message>
          <DetailMessage>
            ① 정보주체는 MOKA에 대해 언제든지 개인정보 열람·정정·삭제·처리정지
            요구 등의 권리를 행사할 수 있습니다.
          </DetailMessage>
          <DetailMessage>
            ② 제1항에 따른 권리 행사는MOKA에 대해 「개인정보 보호법」 시행령
            제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수
            있으며 MOKA은(는) 이에 대해 지체 없이 조치하겠습니다.
          </DetailMessage>
          <DetailMessage>
            ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자
            등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에
            관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야
            합니다.
          </DetailMessage>
          <DetailMessage>
            ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항,
            제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.
          </DetailMessage>
          <DetailMessage>
            ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집
            대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
          </DetailMessage>
          <DetailMessage>
            ⑥ MOKA은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구,
            처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한
            대리인인지를 확인합니다.
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={privacyPolicyRef6}>
          <Message>
            제6조(개인정보의 안전성 확보조치에 관한 사항){"<"}MOKA {">"}은(는)
            개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
          </Message>
          <DetailMessage>
            1. 개인정보의 암호화이용자의 개인정보는 비밀번호는 암호화 되어 저장
            및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송
            데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도
            보안기능을 사용하고 있습니다.
          </DetailMessage>
          <DetailMessage>
            2. 개인정보에 대한 접근 제한개인정보를 처리하는 데이터베이스시스템에
            대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를
            위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여
            외부로부터의 무단 접근을 통제하고 있습니다.
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={privacyPolicyRef7}>
          <Message>
            제7조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에
            관한 사항)
          </Message>
          <DetailMessage>
            ① MOKA 은(는) 이용자에게 개별적인 맞춤서비스를 제공하기 위해
            이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
          </DetailMessage>
          <DetailMessage>
            ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터
            브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의
            하드디스크에 저장되기도 합니다.
            <br />
            가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에
            대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여
            이용자에게 최적화된 정보 제공을 위해 사용됩니다.
            <br />
            나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구{">"}인터넷
            옵션{">"}개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수
            있습니다.
            <br />
            다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수
            있습니다.
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={privacyPolicyRef8}>
          <Message>제8조 (개인정보 보호책임자에 관한 사항)</Message>
          <DetailMessage>
            ① MOKA 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고,
            개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여
            아래와 같이 개인정보 보호책임자를 지정하고 있습니다. <br />▶
            개인정보 보호책임자 <br />
            성명 :MOKA <br />
            직책 :없음 <br />
            직급 :없음 <br />
            연락처 :mokaishappy@gmail.com <br />※ 개인정보 보호 담당부서로
            연결됩니다.
          </DetailMessage>
          <DetailMessage>
            ② 정보주체께서는 MOKA 의 서비스(또는 사업)을 이용하시면서 발생한
            모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을
            개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. MOKA 은(는)
            정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={privacyPolicyRef9}>
          <Message>
            {" "}
            제9조(개인정보의 열람청구를 접수·처리하는 부서)정보주체는 ｢개인정보
            보호법｣ 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수
            있습니다.{"<"} MOKA {">"}은(는) 정보주체의 개인정보 열람청구가
            신속하게 처리되도록 노력하겠습니다.
          </Message>
          <DetailMessage>
            ▶ 개인정보 열람청구 접수·처리 부서
            <br />
            부서명 : MOKA
            <br />
            담당자 : MOKA
            <br />
            연락처 :mokaishappy@gmail.com
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={privacyPolicyRef10}>
          <Message>제10조(정보주체의 권익침해에 대한 구제방법)</Message>
          <DetailMessage fWeight="500" tColor="black">
            정보주체는 개인정보침해로 인한 구제를 받기 위하여
            개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에
            분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타
            개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기
            바랍니다.
          </DetailMessage>
          <DetailMessage>
            1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)
            <br />
            2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
            <br />
            3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)
            <br />
            4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)
            <br />
            「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의
            정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대
            하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의
            침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수
            있습니다.
            <br />※ 행정심판에 대해 자세한 사항은
            중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.
          </DetailMessage>
        </TextWrapper>
        <TextWrapper ref={privacyPolicyRef11}>
          <Message>제11조(개인정보 처리방침 변경)</Message>
          <DetailMessage>
            ① 이 개인정보처리방침은 2022년 10월 1부터 적용됩니다.
          </DetailMessage>
          <DetailMessage>
            ② 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.
          </DetailMessage>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
}
