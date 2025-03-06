import styled from 'styled-components';

const StyledImg = styled.img`
    max-width: 100%;
    width: 25%;
    margin: 1vh 1vw;

    @media screen and (max-width: 900px){
        align-self: center;
        width: 25%;
        max-width: 100%;
        margin: 1vh auto;
    }
`;

export default StyledImg;