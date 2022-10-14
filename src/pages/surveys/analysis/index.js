import { Link } from 'react-router-dom';
import styled from "styled-components"
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const LinkWrapper = styled.div`
    display: flex;
    a{
        color:#0064FF
    }
`

const Wrapper = styled.div``
function SurveyAnalysis(){
    return(
        <Container>
            <LinkWrapper>
                <Link to={"/"}>요약 보기</Link>
                <Link to={"/"}>문항별 보기</Link>
                <Link to={"/"}>분석 결과 보기</Link>
            </LinkWrapper>
            <Wrapper>
                
            </Wrapper>
        </Container>
    )
}

export default SurveyAnalysis;
