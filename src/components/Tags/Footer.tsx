import styled from 'styled-components';
import {Link} from 'react-router';

const StyledFooter = styled.footer`
    background-color: lightblue;
    color: darkblue;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    @media (max-width: 900px) {
        height: auto;
        padding: 1vh 1vw;
    }
`;

const StyledLink = styled(Link)`
    color: darkslategray;
`;

function Footer() {
    return (
        <StyledFooter>
            <p>All rights reserved by Runbin Zhou: <StyledLink to={'/credits'}>Credits</StyledLink> &#169;</p>
        </StyledFooter>
    )
}

export default Footer;