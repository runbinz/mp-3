import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: row;
    background-color: lightsteelblue;
    
    @media (max-width: 900px) {
        display: flex;
        width: 100%;
        height: 100vh;
        flex-direction: column;
    }
`;

export default Container;