import Main from "../Tags/Main.tsx";
import StyledMainTitle from "../Tags/Title.tsx";
import Calculator from "../Calculator/Calculator.tsx";

import { useEffect } from "react";

function Title() {
    useEffect(() => {
        document.title = "Projects | Resume";
    }, []);
    return <></>;
}

function Projects() {
    return (
        <>
            <Title/>
            <Main>
                <StyledMainTitle>Projects</StyledMainTitle>
                <Calculator/>
            </Main>
        </>
    )
}

export default Projects;