import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Logo } from './Logo'

const Container = styled.div`
    width:100%;
    height: 100vh;
    text-align :center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const Wrapper = styled.div`
    width:100%;
    height: 90%;
    text-align :center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 25px;
        font-weight: 600;
        opacity: 70%;
    }
`

const BackBtn = styled.div`
cursor:pointer;
margin-top: 25px;
padding: 10px 40px;
background-color: whitesmoke;
border-radius: 20px;
`

const SLogo = styled(Logo)`
position:fix;
bottom:0
`
  
export const NotFound = () =>{
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1)
    }
    return (
      <Container>
      <Wrapper>
      
        <h1>권한이 없거나 존재하지 않는 페이지입니다.</h1>
        <BackBtn onClick={handleClick}>이전 페이지로</BackBtn>
      </Wrapper>
        <SLogo to="/">MOKAFORM</SLogo>

        </Container>
    )
}