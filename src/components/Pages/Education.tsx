import Main from "../Tags/Main.tsx";
import StyledMainTitle from "../Tags/Title.tsx";
import StyledMain from "../Tags/StyledMain.tsx";
import StyledImg from "../Tags/StyledImg.tsx";
import StyledP from "../Tags/StyledP.tsx";

function Education() {
    return (
        <>
            <Main>
                <StyledMainTitle>Education Background</StyledMainTitle>
                <StyledMain>
                    <StyledImg src={"/bulogo_copy.png"} alt={"Boston University Logo"} />
                </StyledMain>
                <StyledP>
                    B.A. in Computer Science, Minor in Business Administration | Boston University
                    2023 - 2027
                </StyledP>
                <StyledMain>
                    <StyledImg src={"/bthslogo_copy.png"} alt={"Brooklyn Technical High School Logo"} />
                </StyledMain>
                <StyledP>
                    High School Diploma | Brooklyn Technical High School
                    2019 - 2023
                </StyledP>
            </Main>
        </>
    )
}

export default Education;