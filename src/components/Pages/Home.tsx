import styled from "styled-components";

import Main from "../Tags/Main.tsx";
import StyledMainTitle from "../Tags/Title.tsx";
import StyledP from "../Tags/StyledP.tsx";
import StyledMain from "../Tags/StyledMain.tsx";

import { useEffect } from "react";

function Title() {
    useEffect(() => {
        document.title = "Home | Resume";
    }, []);
    return <></>;
}

const StyledImageDiv = styled.div`
    max-width: 100%;
    width: 40%;
    margin: 1vh 1vw;
    
    @media (max-width: 900px) {
        margin: 1vh auto;
        width: 50%;
    }
`;

const StyledTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    width: 60%;
    margin: 0 auto;
    justify-content: center;

    @media (max-width: 900px) {
        width: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 1vh 1vw;
    }
`;

const StyledImage = styled.img`
    max-width: 100%;

    @media (max-width: 900px) {
        max-width: 100%;
    }
`;

function Home() {
    return (
        <>
            <Title/>
            <Main>
                <StyledMainTitle>Home</StyledMainTitle>
                <StyledMain>
                    <StyledImageDiv>
                        <StyledImage src={"/profile_25_copy.jpg"} alt={"Runbin Zhou's Profile Picture"} />
                    </StyledImageDiv>
                    <StyledTextDiv>
                        <StyledP>
                            My name is Runbin Zhou, and I am a full-time student second-year student studying Computer Science at Boston University.
                            I'm interested in learning more about the applications of computer science on our daily lives. Some current technology trends
                            that I'm interested in include: machine learning, blockchain, and cloud computing. My favorite CS class I've taken so far is
                            CS460 - Database Systems.
                        </StyledP>
                        <StyledP>
                            Welcome to my personal website! Here you'll find various information about me including my <strong><em><u>Work Experience</u></em></strong> and
                            my <strong><em><u>Projects</u></em></strong>. You will also be able to see my <strong><em><u>Certifications</u></em></strong> and what type
                            of <strong><em><u>Activities</u></em></strong> I've been involved with. Hope you enjoy my work!
                        </StyledP>
                    </StyledTextDiv>
                </StyledMain>
            </Main>
        </>
    )
}

export default Home;