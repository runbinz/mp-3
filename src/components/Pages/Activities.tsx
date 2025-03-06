import Main from "../Tags/Main.tsx";
import StyledMainTitle from "../Tags/Title.tsx";
import StyledMain from "../Tags/StyledMain.tsx";
import StyledImg from "../Tags/StyledImg.tsx";
import StyledP from "../Tags/StyledP.tsx";

function Activities() {
    return (
        <>
            <Main>
                <StyledMainTitle>Activities</StyledMainTitle>
                <StyledMain>
                    <StyledImg src={"/blockchain_copy.jpeg"} alt={"Boston University Blockchain Club Logo"} />
                    <StyledP>
                        BU Blockchain Club
                    </StyledP>
                </StyledMain>
                <StyledMain>
                    <StyledImg src={"/csc_copy.jpeg"} alt={"Boston University Computer Science Club Logo"} />
                    <StyledP>
                        BU Computer Science Club
                    </StyledP>
                </StyledMain>
                <StyledMain>
                    <StyledImg src={"/h4i_copy.jpeg"} alt={"Boston University Hack 4 Impact Club Logo"} />
                    <StyledP>
                        BU Hack 4 Impact Club
                    </StyledP>
                </StyledMain>
            </Main>
        </>
    )
}

export default Activities;