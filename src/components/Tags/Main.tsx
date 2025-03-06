import styled from "styled-components";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: lightsteelblue;
    margin: 0 auto;
    
    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        max-width: 100%;
        max-height: 100%;
    }
`;

export default Main;
