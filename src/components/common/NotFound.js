import styled from 'styled-components'
import Header from '../users/myPage/MyHeader'

const Wrapper = styled.div`
    width:100%;
    height: 100vh;
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

const Image = styled.img`
    width: 15%;
    margin-bottom: 25px;
    opacity: 50%;
`


export const NotFound = () =>{
    return (
    <>
        <Header />
        <Wrapper>
            <Image src='https://cdn-icons-png.flaticon.com/512/5089/5089972.png'></Image>
            <h1>페이지를 찾을 수 없어요😭</h1>
        </Wrapper>
    </>
    )
}