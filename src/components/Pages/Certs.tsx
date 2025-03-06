import Main from "../Tags/Main.tsx";
import StyledMainTitle from "../Tags/Title.tsx";
import StyledMain from "../Tags/StyledMain.tsx";
import StyledImg from "../Tags/StyledImg.tsx";
import StyledP from "../Tags/StyledP.tsx";

function Certs() {
    return (
        <>
            <Main>
                <StyledMainTitle>Certifications</StyledMainTitle>
                <StyledMain>
                    <StyledImg src={"/cert1_copy.png"} alt={"AWS Cloud Certificate"} />
                </StyledMain>
                <StyledP>
                    Amazon Cloud Practitioner
                </StyledP>
                <StyledMain>
                    <StyledImg src={"/cert2 copy.png"} alt={"Google Cloud Certificate"} />
                </StyledMain>
                <StyledP>
                    Google Cloud Professional
                </StyledP>
                <StyledMain>
                    <StyledImg src={"/cert3 copy.png"} alt={"Microsoft Fundamentals Certificate"} />
                </StyledMain>
                <StyledP>
                    Microsoft Fundamentals
                </StyledP>
            </Main>
        </>
    )
}

export default Certs;