import styled from "styled-components";

const StyledMain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;

    @media (max-width: 900px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

export default StyledMain;