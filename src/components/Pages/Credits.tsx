import { useEffect } from "react";

function Title() {
    useEffect(() => {
        document.title = "Credits | Resume";
    }, []);
    return <></>;
}


function Credits() {
    return (
        <>
            <Title/>
        </>
    )
}

export default Credits;