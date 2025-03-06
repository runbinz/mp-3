import styled from 'styled-components';
import {Link} from "react-router";

const StyledNav = styled.nav`
    width: 30%;
    
    @media (max-width: 900px) {
        width: 100%;
    }
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: skyblue;
    font-size: calc(2px + 2vw);
    text-align: center;
    list-style: none;
    padding-left: 0;
    
    @media (max-width: 900px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: skyblue;
        list-style: none;
        padding-left: 0;
    }
`;

const StyledLi = styled.li`
    font-size: calc(3px + 3vw);
    width: 90%;
    background-color:lightseagreen;
    padding: 2vh 0;
    margin: 5vh auto;
    border-radius: 4vh 0.5vw;
    
    @media (max-width: 900px) {
        font-size: calc(2px + 1.5vw);
        background-color:lightseagreen;
        padding: 1% .5%;
        margin: 1% .5%;
        border-radius: 4vh 0.5vw;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    
    @media (max-width: 900px) {
        text-decoration: none;
    }
`;

function Nav() {
    return (
        <>
            <StyledNav>
                <StyledUl>
                    <StyledLi>
                        <StyledLink to={`/`}>Home</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to={`/education`}>Education</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to={`/projects`}>Projects</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to={`/work`}>Work</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to={`/activities`}>Activities</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to={`/certs`}>Certs</StyledLink>
                    </StyledLi>
                </StyledUl>
            </StyledNav>
        </>
    )
}

export default Nav;