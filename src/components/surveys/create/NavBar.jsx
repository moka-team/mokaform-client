import styled from "styled-components"
import { Button } from '@mui/material';
import {  useRecoilValue } from "recoil";
import { surveyListState,detailMCQuestionState } from "../../../atoms";

const SNavBar = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    height:5%;
    Button{
        margin-right: 25px;
        height:80%;
    }
`
function NavBar(){
    const surveyList = useRecoilValue(surveyListState);
    const detailList = useRecoilValue(detailMCQuestionState);

    const handleSubmit = ()=>{
        for(let i =0; i<surveyList.length;i++){
            let question = surveyList[i].text

            let newList = detailList.filter((item)=>item.survey_id === i)
            let jsonString = JSON.stringify(newList)
            
            alert(question +"\n"+  jsonString)
        }

    }
    return(
        <SNavBar>
            <Button onClick={handleSubmit} variant="contained">저장</Button>
        </SNavBar>
    )
}

export default NavBar;