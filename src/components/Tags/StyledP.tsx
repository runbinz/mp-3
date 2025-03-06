import styled from 'styled-components';

const StyledP = styled.p`
    margin: 1vh 1vw;
    font-size: calc(2px + 1.25vw);

    @media (max-width: 900px) {
        margin: 2% 2%;
        font-size: calc(2px + 2vw);
        
    }
`;

export default StyledP;