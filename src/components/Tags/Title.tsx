import styled from 'styled-components';

const StyledMainTitle = styled.h3`
    margin: 2vw 0;
    text-align: center;
    font-size: calc(2px + 2vw);
    color: darkblue;
    
    @media (max-width: 900px) {
        text-align: center;
        font-size: calc(2px + 2vw);
    }
`;

export default StyledMainTitle;