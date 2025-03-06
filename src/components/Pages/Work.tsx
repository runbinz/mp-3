import Main from "../Tags/Main.tsx";
import StyledMainTitle from "../Tags/Title.tsx";
import StyledMain from "../Tags/StyledMain.tsx";
import StyledImg from "../Tags/StyledImg.tsx";
import StyledP from "../Tags/StyledP.tsx";

function Work() {
    return (
        <>
            <Main>
                <StyledMainTitle>Work Experience</StyledMainTitle>
                <StyledMain>
                    <StyledImg src={"/syep copy.jpg"} alt={"SYEP Workplace"} />
                </StyledMain>
                <StyledP>
                    Tutor | Tutoring Place
                </StyledP>
                <StyledP>
                    Tutored students in the fields of mathematics, english, and science. Prepare assignments and graded exams.
                </StyledP>
                <StyledMain>
                    <StyledImg src={"/syep2 copy.png"} alt={"SYEP Workplace"} />
                </StyledMain>
                <StyledP>
                    Site Assistant | Summer Camp
                </StyledP>
                <StyledP>
                    Supervised groups of student. Ensured safety procedures were followed. Maintained tools and equipment.
                </StyledP>
            </Main>
        </>
    )
}

export default Work;