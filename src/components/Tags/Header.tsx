import styled from "styled-components";

const HeaderDiv = styled.header`
    display: flex;
    flex-direction: column;
    padding: 2vh 2vw;
    background-color: lightblue;
    color: darkslategray;
    
    @media (max-width: 900px) {
        align-items: center;
    }
`;

function Header() {
    return (
        <HeaderDiv>
            <h1>Runbin Zhou</h1>
            <h3>My Online Resume</h3>
        </HeaderDiv>
    )
}

export default Header;
