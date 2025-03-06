import {useState} from "react";
import styled from "styled-components";

const CalculatorDiv = styled.div`
    background-image: url('/stars copy.jpg');
    background-size: cover;
    background-position: center;
    margin: 2vh 5vw;
    padding: 5vw;
    border-radius: 5vw;
    color: white;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    height: 50vh;
`;

const StyledLabelDiv = styled.div`
    font-size: calc(2px + 2vw);
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 30vw;
    height:  30vh;
`;

const StyledInput = styled.input`
    font-size: calc(1px + 1vw);
    padding: 1vw;
    box-sizing: border-box;
    margin: 1vh 1vw;
`;

const ButtonDiv=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 1vw;
    width: 100%;
    align-items: center;
`;

const StyledButton = styled.button`
    padding: 1vh 1.25vw;
    font-size: 1.5vw;
    background: cornflowerblue;
    border: none;
    border-radius: 1vw;
`;

const StyledOutput = styled.h3`
    text-align: center;
    font-size: 2vw;
    margin: 1vw;
    background: white;
    padding: 2vw;
    border-radius: 1vw;
    width: 100%;
`;

export default function Calculator() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [result, setResult] = useState(0);
    const [color, setColor] = useState("black");

    const addition = () => {
        const sum = Number(first) + Number(second);
        setResult(sum);
        setColor(sum < 0 ? "red" : "black");
    }

    const subtraction = () => {
        const diff = Number(first) - Number(second);
        setResult(diff);
        setColor(diff < 0 ? "red" : "black");
    };

    const mult = () => {
        const product: number = Number(first) * Number(second);
        setResult(product);
        setColor(product < 0 ? "red" : "black");
    };

    const divide = () => {
        const quotient: number = Number(first) / Number(second);
        setResult(quotient);
        setColor(quotient < 0 ? "red" : "black");
    };

    const expo = () => {
        const numFirst = Number(first);
        const numSecond = Number(second);

        if (isNaN(numFirst) || isNaN(numSecond)) {
            setResult(NaN);
            setColor("black");
            return;
        }

        let result = 1;

        if (numSecond > 0) {
            for (let i = 0; i < numSecond; i++) {
                result *= numFirst;
            }
        } else if (numSecond < 0) {
            const compare: number = -numSecond;
            for (let i = 0; i < compare; i++) {
                result *= numFirst;
            }
            result = 1 / result;
        }

        setResult(result);
        setColor(result < 0 ? "red" : "black");
    };

    const clearr = () => {
        setFirst("");
        setSecond("");
        setResult(0);
        setColor("black");
    };

    return (
        <>
            <CalculatorDiv>
                <StyledLabelDiv>
                    <StyledInput
                        id="first-input"
                        type="text"
                        placeholder="First Number:"
                        value={first}
                        onChange={(e) => setFirst(e.target.value)}
                    />
                    <StyledInput
                        id={"second-input"}
                        type={"text"}
                        placeholder="Second Number:"
                        value={second}
                        onChange={(e) => setSecond((e.target.value))}
                    />
                </StyledLabelDiv>
                <ButtonDiv>
                    <StyledButton onClick={addition}>+</StyledButton>
                    <StyledButton onClick={subtraction}>-</StyledButton>
                    <StyledButton onClick={mult}>*</StyledButton>
                    <StyledButton onClick={divide}>/</StyledButton>
                    <StyledButton onClick={expo}>**</StyledButton>
                    <StyledButton onClick={clearr}>Clear</StyledButton>
                </ButtonDiv>
                <div>
                    <StyledOutput style={{color}}>{result}</StyledOutput>
                </div>
            </CalculatorDiv>
        </>
    )
}